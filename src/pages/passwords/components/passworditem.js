import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
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