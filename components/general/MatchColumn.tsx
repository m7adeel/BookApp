import { View, Text } from 'react-native'
import React, { useEffect, useMemo, useRef, useState }  from 'react'

type MatchColumn = {
  items: {
    left: string;
    right: string;
  }[];
}

const nodeRadius = 8;

const defaultPairs = [
  { id: 1, left: "Apple", right: "Red" },
  { id: 2, left: "Banana", right: "Yellow" },
  { id: 3, left: "Grapes", right: "Purple" },
  { id: 4, left: "Orange", right: "Orange" },
];

const findClosestNode = (nodes, mouse, threshold = nodeRadius) =>
  nodes.find(node =>
    Math.abs(mouse.x - node.x) < threshold &&
    Math.abs(mouse.y - node.y) < threshold);

const filterInPlace = (arr, rem) =>
  arr
    .reduce((r, e, i) => rem.includes(e) ? r.concat(i) : r, [])
    .sort((a, b) => b - a)
    .forEach(i => arr.splice(i, 1));

const sameHorizontal = (p1, p2) => p1 && p2 && p1.y === p2.y;
const sameVertical = (p1, p2) => p1 && p2 && p1.x === p2.x;

const equalsNode = (n1, n2) => n1 && n2 && n1.x === n2.x && n1.y === n2.y;
const equalsEdge = (e1, e2) => equalsNode(e1[0], e2[0]) && equalsNode(e1[1], e2[1]);

const hasEdge = (edges, edge) => edges.some(otherEdge => equalsEdge(edge, otherEdge));

const addEdge = (edges, edge) => {
  if (!hasEdge(edges, edge)) {
    filterInPlace(edges, edges.filter((o) => equalsNode(edge[0], o[0])));
    edges.push(edge);
    return true;
  }
  return false;
};

const renderCanvas = (canvas, leftArr, rightArr) => {
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = 100;
  const { height, width } = ctx.canvas;
  const rowHeight = height / leftArr.length;
  const margin = nodeRadius * 2.5;

  const nodes = [
    ...leftArr.map((_, i) => ({
      x: margin,
      y: i * rowHeight + rowHeight / 2
    })),
    ...rightArr.map((_, i) => ({
      x: width - margin,
      y: i * rowHeight + rowHeight / 2
    })),
  ];
  
  const edges = [];

  let activeNode = null;
  let mouse = null;
  let isDragging = false;

  const onMouseDown = (e) => {
    const closestNode = findClosestNode(nodes, mouse);
    // activeNode = closestNode !== activeNode ? closestNode : null;
    activeNode = closestNode;
    isDragging = true;
  };

  const onMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onMouseUp = (e) => {
    isDragging = false;
    
    const intentRadius = nodeRadius * 1.5;
    const closestNode = findClosestNode(nodes, mouse, intentRadius);
    if (
      activeNode && closestNode &&
      !equalsNode(activeNode, closestNode) &&
      !sameVertical(activeNode, closestNode)
    ) {
      const edge = [activeNode, closestNode].sort((a, b) => a.x - b.x);
      addEdge(edges, edge);
      activeNode = null;
    }
  };

  const animate = (() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    edges.forEach(([start, end]) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    });
  
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = equalsNode(node, activeNode) ? 'black' : 'darkgrey';
      ctx.fill();
    });

    if (isDragging && activeNode) {
      const intentRadius = nodeRadius * 1.5;
      const closestNode = findClosestNode(nodes, mouse, intentRadius);
      const intent = closestNode || mouse;
    
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.setLineDash([3, 3]);
      ctx.moveTo(activeNode.x, activeNode.y);
      ctx.lineTo(intent.x, intent.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    requestAnimationFrame(animate);
  });

  animate();
  
  return { onMouseDown, onMouseMove, onMouseUp };
};

const randomize = () => Math.random() - 0.5;

const App = () => {
  const canvasRef = useRef();
  const [pairs, setPairs] = useState(defaultPairs);

  const leftArr = useMemo(
    () => pairs.map((pair) => pair.left).sort(randomize),
    [pairs]
  );

  const rightArr = useMemo(
    () => pairs.map((pair) => pair.right).sort(randomize),
    [pairs]
  );
  
  useEffect(() => {
    const { onMouseDown, onMouseMove, onMouseUp } = renderCanvas(canvasRef.current, leftArr, rightArr);

    // Add listeners
    canvasRef.current.addEventListener('mousedown', onMouseDown);
    canvasRef.current.addEventListener('mousemove', onMouseMove);
    canvasRef.current.addEventListener('mouseup', onMouseUp);
    
    // Cleanup listeners
    return () => {
      canvasRef.current.removeEventListener('mousedown', onMouseDown);
      canvasRef.current.removeEventListener('mousemove', onMouseMove);
      canvasRef.current.removeEventListener('mouseup', onMouseUp);
    };
  }, [canvasRef, leftArr, rightArr]);

  return (
    <div className="App">
      <div className="Col">
        {leftArr.map((e) => (
          <div key={e}>
            {e}
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} className="Lines"></canvas>
      <div className="Col">
        {rightArr.map((e) => (
          <div key={e}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MatchColumn(items: MatchColumn) {
  return (
    <View>
      <Text>MatchColumn</Text>
    </View>
  )
}