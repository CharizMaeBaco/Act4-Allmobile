import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const App = () => {
  return (
    <View>
      
      <CLICKABLE_HIGHLIGHT
        onPress={() => console.log('CLICKABLE_HIGHLIGHT Pressed')}
        underlayColor="lightgray">

          <Text>CLICKABLE_HIGHLIGHT </Text>
          
      </CLICKABLE_HIGHLIGHT>

      <TouchableOpacity onPress={() => console.log('TouchableOpacity Pressed')}>
        <View>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => console.log('TouchableWithoutFeedback Pressed')}>
        <View>
          <Text>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    
  );
};


export default App;
