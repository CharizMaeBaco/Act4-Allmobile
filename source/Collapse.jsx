import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class CollapseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: true };
  }

  clickCOLLAPSE = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clickCOLLAPSE}>
          <Text style={styles.toggleButton}>
            {this.state.isCollapsed ? 'EXPAND to see more info' : 'Collapse'}
          </Text>
        </TouchableOpacity>
        {!this.state.isCollapsed && (
          <View style={styles.content}>
            <Text>COLLAPSE THIS SECTION .</Text>
            <Text>It can be expanded and collapsed.</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 5,
  },
  toggleButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
});

export default CollapseComponent;
