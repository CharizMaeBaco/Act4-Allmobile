import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const data = [
  {
    title: 'DEVELOPED BY',
    data: ['Chariz Baco'],
  },
  {
    title: 'FRONT END',
    data: ['Dr. John Baco'],
  },
  {
    title: 'UI DESIGN',
    data: ['Engr. Bryan Baco'],
  },
];

const SectionListComponent = () => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SectionListComponent;
