import React from 'react';
import { View, Text, VirtualizedList, StyleSheet } from 'react-native';

const data = Array.from({ length: 3 }, (_, index) => ({
  key: `VIRTUAL LIST ${index}`,
  value: `COMPONENT ${index}`,
}));

const getItemCount = (data) => data.length;
const getItem = (data, index) => data[index];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.key}</Text>
    <Text>{item.value}</Text>
  </View>
);

const VirtualizedListComponent = () => {
  return (
    <VirtualizedList
      data={data}
      initialNumToRender={10}
      getItemCount={getItemCount}
      getItem={getItem}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default VirtualizedListComponent;
