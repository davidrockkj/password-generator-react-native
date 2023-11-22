import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function passwordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword}>
      <Text>{data}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e0e',
    padding: 14,
    width: '100%',
    marginBottom: 14,
  }
})