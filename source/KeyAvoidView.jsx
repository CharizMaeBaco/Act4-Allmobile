import React from 'react';
import { View, KeyboardAvoidingView, TextInput } from 'react-native';

const App = () => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View>
        <TextInput placeholder="KEYBOARD AVOIDING SECTION" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default App;
