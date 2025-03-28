import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Define interfaces for props and state
interface Position {
  x: number;
  y: number;
}

interface Match {
  leftIndex: number;
  rightIndex: number;
}

interface ItemPositions {
  left: Position[];
  right: Position[];
}

interface ArrowProps {
  startY: number;
  endY: number;
}

interface MatchColumnsProps {
  headers: [string, string]; // Tuple of two strings for column headers
  leftValues: string[];
  rightValues: string[];
  number?: number; // Optional question number
}

// Component for rendering arrow between matches
const Arrow: React.FC<ArrowProps> = ({ startY, endY }) => {
  // Arrow styles will depend on the distance and direction
  const arrowDirection = startY <= endY ? "down" : "up";
  const height = Math.abs(endY - startY);
  
  return (
    <View style={[styles.arrowContainer, { height }]}>
      <View style={styles.arrowLine} />
      <View style={[
        styles.arrowHead, 
        arrowDirection === "down" ? styles.arrowHeadDown : styles.arrowHeadUp,
        { [arrowDirection === "down" ? "bottom" : "top"]: 0 }
      ]} />
    </View>
  );
};

// Main component
const MatchColumns: React.FC<MatchColumnsProps> = ({ headers, leftValues, rightValues, number }) => {
  // Use all items from the arrays directly - removed the slice(1)
  const leftItems = leftValues;
  const rightItems = rightValues;
  
  // Track selected items and matches
  const [selectedLeftIndex, setSelectedLeftIndex] = useState<number | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  
  // Refs for measuring item positions
  const leftItemRefs = useRef<(View | null)[]>([]);
  const rightItemRefs = useRef<(View | null)[]>([]);
  
  // Store positions of items for arrow drawing
  const [itemPositions, setItemPositions] = useState<ItemPositions>({
    left: [],
    right: []
  });
  
  // Reset refs when items change
  useEffect(() => {
    leftItemRefs.current = leftItems.map(() => React.createRef());
    rightItemRefs.current = rightItems.map(() => React.createRef());
  }, [leftItems, rightItems]);
  
  // Measure positions of all items
  const measureItemPositions = () => {
    const leftPos = [];
    const rightPos = [];
    
    leftItemRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.measure((x, y, width, height, pageX, pageY) => {
          leftPos[index] = { x: pageX + width, y: pageY + height/2 };
          
          // Update state if we have all positions
          if (leftPos.length === leftItems.length && rightPos.length === rightItems.length) {
            setItemPositions({ left: leftPos, right: rightPos });
          }
        });
      }
    });
    
    rightItemRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.measure((x, y, width, height, pageX, pageY) => {
          rightPos[index] = { x: pageX, y: pageY + height/2 };
          
          // Update state if we have all positions
          if (leftPos.length === leftItems.length && rightPos.length === rightItems.length) {
            setItemPositions({ left: leftPos, right: rightPos });
          }
        });
      }
    });
  };
  
  // Handle item selection
  const handleLeftItemPress = (index: number): void => {
    setSelectedLeftIndex(index);
  };
  
  const handleRightItemPress = (index: number): void => {
    if (selectedLeftIndex !== null) {
      // Create new matches array
      const newMatches = [...matches];
      
      // Remove any existing matches for the selected left item
      const leftItemMatchIndex = newMatches.findIndex(match => 
        match.leftIndex === selectedLeftIndex);
      
      if (leftItemMatchIndex !== -1) {
        newMatches.splice(leftItemMatchIndex, 1);
      }
      
      // Remove any existing matches for the selected right item
      const rightItemMatchIndex = newMatches.findIndex(match => 
        match.rightIndex === index);
      
      if (rightItemMatchIndex !== -1) {
        newMatches.splice(rightItemMatchIndex, 1);
      }
      
      // Add new match
      newMatches.push({
        leftIndex: selectedLeftIndex,
        rightIndex: index
      });
      
      // Update matches
      setMatches(newMatches);
      
      // Clear left selection
      setSelectedLeftIndex(null);
      
      // Measure positions for drawing arrows
      setTimeout(measureItemPositions, 100);
    }
  };
  
  // Check if an item is matched
  const isItemMatched = (index: number, column: 'left' | 'right'): boolean => {
    if (column === 'left') {
      return matches.some(match => match.leftIndex === index);
    } else {
      return matches.some(match => match.rightIndex === index);
    }
  };
  
  // Get matching item index
  const getMatchingItemIndex = (index: number, column: 'left' | 'right'): number | null => {
    if (column === 'left') {
      const match = matches.find(match => match.leftIndex === index);
      return match ? match.rightIndex : null;
    } else {
      const match = matches.find(match => match.rightIndex === index);
      return match ? match.leftIndex : null;
    }
  };
  
  // Find match number (1-based index for display)
  const getMatchNumber = (leftIndex: number, rightIndex: number): number | null => {
    const matchIndex = matches.findIndex(match => 
      match.leftIndex === leftIndex && match.rightIndex === rightIndex);
    
    if (matchIndex !== -1) {
      return matchIndex + 1;
    }
    return null;
  };
  
  // Reset all matches
  const resetMatches = () => {
    setMatches([]);
    setSelectedLeftIndex(null);
  };
  
  // Render arrows between matched items
  const renderArrows = () => {
    if (itemPositions.left.length === 0 || itemPositions.right.length === 0) {
      return null;
    }
    
    return matches.map((match, index) => {
      const leftPos = itemPositions.left[match.leftIndex];
      const rightPos = itemPositions.right[match.rightIndex];
      
      if (!leftPos || !rightPos) return null;
      
      // Calculate arrow position
      const startY = leftPos.y;
      const endY = rightPos.y;
      const arrowLeft = (rightPos.x + leftPos.x) / 2;
      
      return (
        <View 
          key={`arrow-${index}`} 
          style={[
            styles.arrowWrapper,
            {
              left: arrowLeft,
              top: Math.min(startY, endY),
            }
          ]}
        >
          <Arrow startY={startY} endY={endY} />
          <View style={[
            styles.arrowNumberBadge,
            {
              top: (endY - startY) / 2 - 10,
            }
          ]}>
            <Text style={styles.arrowNumberText}>{index + 1}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container} onLayout={measureItemPositions}>
      {/* Header row with question number and reset button */}
      <View style={styles.headerRow}>
        {number && <Text style={styles.number}>{number}. </Text>}
        <Text style={styles.title}>Match the columns</Text>
        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={resetMatches}
        >
          <Ionicons name="refresh" size={14} color="#FFFFFF" />
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      
      {/* Column headers */}
      <View style={styles.columnsHeaderRow}>
        <View style={styles.leftColumn}>
          <Text style={styles.columnHeader}>{headers[0]}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.columnHeader}>{headers[1]}</Text>
        </View>
      </View>
      
      {/* Match items with arrows */}
      <View style={styles.matchContainer}>
        {/* Arrows between matched items */}
        {renderArrows()}
        
        <View style={styles.columnsContainer}>
          {/* Left column items */}
          <View style={styles.leftColumn}>
            {leftItems.map((item, index) => {
              const isMatched = isItemMatched(index, 'left');
              const matchingRightIndex = getMatchingItemIndex(index, 'left');
              const matchNumber = matchingRightIndex !== null 
                ? getMatchNumber(index, matchingRightIndex) 
                : null;
              
              return (
                <TouchableOpacity
                  key={`left-${index}`}
                  ref={el => leftItemRefs.current[index] = el}
                  style={[
                    styles.item,
                    selectedLeftIndex === index && styles.selectedItem,
                    isMatched && styles.matchedItem
                  ]}
                  onPress={() => handleLeftItemPress(index)}
                >
                  <Text style={styles.itemText}>{item}</Text>
                  {isMatched && (
                    <View style={styles.matchBadge}>
                      <Text style={styles.matchBadgeText}>{matchNumber}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
          
          {/* Right column items */}
          <View style={styles.rightColumn}>
            {rightItems.map((item, index) => {
              const isMatched = isItemMatched(index, 'right');
              const matchingLeftIndex = getMatchingItemIndex(index, 'right');
              const matchNumber = matchingLeftIndex !== null 
                ? getMatchNumber(matchingLeftIndex, index) 
                : null;
              
              return (
                <TouchableOpacity
                  key={`right-${index}`}
                  ref={el => rightItemRefs.current[index] = el}
                  style={[
                    styles.item,
                    isMatched && styles.matchedItem,
                    selectedLeftIndex !== null && styles.rightColumnActive
                  ]}
                  onPress={() => handleRightItemPress(index)}
                  disabled={selectedLeftIndex === null}
                >
                  <Text style={styles.itemText}>{item}</Text>
                  {isMatched && (
                    <View style={styles.matchBadge}>
                      <Text style={styles.matchBadgeText}>{matchNumber}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      
      {/* Instructions */}
      <Text style={styles.instructions}>
        Tap a word from Column A, then tap its match from Column B
      </Text>
    </View>
  );
};

export default MatchColumns;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  number: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  resetButton: {
    backgroundColor: "#f44336",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  columnsHeaderRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  columnHeader: {
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
  },
  matchContainer: {
    position: "relative",
    marginBottom: 8,
  },
  columnsContainer: {
    flexDirection: "row",
  },
  leftColumn: {
    flex: 1,
    marginRight: 8,
  },
  rightColumn: {
    flex: 1,
    marginLeft: 8,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 4,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    position: "relative",
  },
  selectedItem: {
    backgroundColor: "#E3F2FD",
    borderWidth: 2,
    borderColor: "#2196F3",
  },
  matchedItem: {
    backgroundColor: "#E8F5E9",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  rightColumnActive: {
    backgroundColor: "#FFF9C4",
  },
  itemText: {
    textAlign: "center",
    fontSize: 15,
  },
  matchBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#4CAF50",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  matchBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  instructions: {
    marginTop: 12,
    color: "#757575",
    fontSize: 13,
    textAlign: "center",
    fontStyle: "italic",
  },
  arrowWrapper: {
    position: "absolute",
    width: 20,
    zIndex: 10,
  },
  arrowContainer: {
    width: 20,
    position: "relative",
  },
  arrowLine: {
    position: "absolute",
    left: 9,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#4CAF50",
  },
  arrowHead: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    left: 0,
  },
  arrowHeadDown: {
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#4CAF50",
  },
  arrowHeadUp: {
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#4CAF50",
  },
  arrowNumberBadge: {
    position: "absolute",
    left: -10,
    backgroundColor: "#4CAF50",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 15,
  },
  arrowNumberText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  }
});