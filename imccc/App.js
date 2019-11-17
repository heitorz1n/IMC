/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//t t
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Toucccha,
  TouchableOpacity,
} from 'react-native';
//
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type Props = {};
export default class App extends Component {  
  constructor(props){
    super(props)
    this.state={altura:0,peso:0,result:0,resultText:""}
    this.calcularrr=this.calcularrr.bind(this)
  }

  calcularrr() {
    let imcz=this.state.peso/(this.state.altura*this.state.altura)  //setS 
    let r = this.state                                              //{()=>}
    r.result=imcz
    this.setState(r)
  }

  
render() {
  return (
    <View style={styles.container}>
      <View style={styles.doidera}>
      <TextInput placeholder="Peso" style={styles.inputholder} onChangeText={(peso)=>{this.setState({peso})}} keyboardType="numeric"></TextInput>
      <TextInput placeholder="Altura" style={styles.inputholder} onChangeText={(altura)=>{this.setState({altura})}} keyboardType="numeric"></TextInput>  
      </View>
      <View>
        <TouchableOpacity style={styles.botão} onPress={this.calcularrr}><Text style={[ {fontSize: 20}] } >Calcular IMC</Text></TouchableOpacity>   
      </View>                                        
      <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>   
    </View>
  );
//}
}};

//50

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  //doidera: {
    //height: 110,
    //width: 50,
    //borderRadius: 4,
    //borderWidth: 1,
    //borderColor: 'black',
    //borderColor: '#d6d7da',
  //},


  inputholder: {
    height: 100,
    textAlign: "center",
    fontSize: 50,

  },

  botão: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20, 
  },

  tb: {
    color: 'black',
    fontSize: 50,
    //e
},

  result: {
    fontSize: 77,
    //TEXTALIGN: 'CENTER',
    textAlign: 'center',
    marginTop: 30
  }
  
});

//export default App;
