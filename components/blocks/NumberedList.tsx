import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RenderBlock from "./RenderBlock";

import { childTypes } from "@/data/chapters";

type NumberedListProps = {
  children: any[];
  childType: string;
};

export default function NumberedList({
  children,
  childType,
}: NumberedListProps) {
  if (childType === childTypes.COMPONENT) {
    return (
      <View style={styles.container}>
        {children.map((child, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.number}>
              {(index + 1).toString() + "."}
            </Text>
            <View style={styles.content}>
              <RenderBlock block={{ ...child, number: index + 1 }} />
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  number: {
    width: 25,
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    marginRight: 5,
  },
  content: {
    flex: 1,
  }
});
