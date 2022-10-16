import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,
Text, View, TextInput, TouchableOpacity,
Keyboard, ScrollView } from 'react-native';
import List from '../components/List'


export default function BoardView() {
  const [list, setList ] = useState();
  const [listItems, setListItems] = useState([]);

  const handleAddList = () => {
    Keyboard.dismiss();
    setListItems([...listItems, list])
    setList(null);
  }

  return (
    <View style={styles.container}>   
      {/* My Boards */}
      <View style={styles.tasksWrapper}>
      <ScrollView horizontal='true'> 
      <View style={styles.items}>
          {/* This is where the boards will go! */}
          {
            listItems.map((item,index) => {
              return (
                <TouchableOpacity key={index}>
                  <List text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView> 
      </View>
        
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
       <TextInput style={styles.input} placeholder={'List Name'} value={list} onChangeText={text => setList(text)} />
        <TouchableOpacity onPress={() => handleAddList()}>
            <View style={styles.addWrapper}>
            <Text style={styles.addText}>➕</Text>
            </View>
            </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: { // the position of the lists 
    paddingTop: 0,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: { // input of board screen
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: { // input add list 
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: { // btn add list of board screen 
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  deleteWrapper: {
    backgroundColor: '#F72828',
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#C0C0C0',
    borderWidth: 1,
    space: 10
  },
  addText: {},
});