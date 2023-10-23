import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: false };
  }

  clicktoDRAWER = () => {
    this.setState((prevState) => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clicktoDRAWER}>
          <Text style={styles.drawerButton}> Toggle Drawer</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.isDrawerOpen}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.drawer}>
            <TouchableOpacity onPress={this.clicktoDRAWER}>
              <Text style={styles.drawerCloseButton}>CLICK HERE TO CLOSE</Text>
            </TouchableOpacity>
            <Text>This is the content of the drawer.</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  drawerCloseButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DrawerComponent;
