import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'This is the list content 1' },
        { key: 'This is the list content 2' },
        { key: 'This is the list content 3' },
        
      ],
    };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>FLAT LIST TAB</Text>
          </View>

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
