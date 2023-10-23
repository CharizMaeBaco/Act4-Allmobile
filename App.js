import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RefreshCont from './source/RefreshCont';
import Touchables from './source/touchables';
import CollapseComponent from './source/collapse';
import DrawerComponent from './source/drawer';
import Flatlist from './source/Flatlist'
import KeyAvoidView from './source/KeyAvoidView'
import SectionListComponent from './source/SectionList';
import VirtualizedListComponent from './source/VirtualList';
import InputAccessoryViewExample from './source/InputAccView';
import FormComponent from './source/forms';
import ForAlert from './source/Alert';
import SpinnerComponent from './source/spinner';

function App() {
  return (
    <ScrollView>
    <div className="App">
      <View style={styles.container}>
      <RefreshCont />
      </View>
      <br></br>
      <View style={styles.button}>
        <Touchables/>
     </View>
     <SpinnerComponent/>
      <CollapseComponent/>
      <DrawerComponent/>
      <View style={styles.container}>
      <Flatlist/>
      </View>
      <br></br>
      <KeyAvoidView/>
      <View style={styles.container}>
    <SectionListComponent/>
      </View>
      <ForAlert/>  
    <VirtualizedListComponent/>
      <InputAccessoryViewExample/>
    <FormComponent/> 

    </div>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  });
  

export default App;
