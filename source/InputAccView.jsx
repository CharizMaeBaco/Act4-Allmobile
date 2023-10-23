import React, { useState } from 'react';
import { View, Text, TextInput, InputAccessoryView, Button, StyleSheet } from 'react-native';

const InputAccessoryViewExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [accessoryViewVisible, setAccessoryViewVisible] = useState(false);

  const showAccessoryView = () => {
    setAccessoryViewVisible(true);
  };

  const hideAccessoryView = () => {
    setAccessoryViewVisible(false);
  };

  const pressACCESORYBUTTTON = () => {
    
    alert('Accessory Button Pressed');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CLICK HERE TO GO ACCESORY INPUT SECTION ;"
        value={inputValue}
        onChangeText={setInputValue}
        onFocus={showAccessoryView}
        onBlur={hideAccessoryView}
      />
      
      {accessoryViewVisible && (
        <InputAccessoryView nativeID="accessoryViewID">
          <View style={styles.accessoryView}>
            <Button title="Accessory Button" onPress={pressACCESORYBUTTTON} />
          </View>
        </InputAccessoryView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  accessoryView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 10,
  },
});

export default InputAccessoryViewExample;
