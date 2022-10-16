import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,
Text, View, TextInput, TouchableOpacity,
Keyboard, ScrollView } from 'react-native';
import Card from 'react-native-draganddrop-board/src/components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NoteInputModal} from './Card'

const List = (props) => {
    const [card, setCard ] = useState();
    const [cardItems, setCardItems] = useState([]);

    const handleAddCard = () => {
        Keyboard.dismiss();
        setCardItems([...cardItems, card])
        setCard(null);
      }

  return (
    <SafeAreaView>

    <View style={styles.contener}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      <View style={styles.itemLeft}>
      <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
        <TextInput style={styles.input} placeholder={'Add Task'} value={card} onChangeText={text => setCard(text)} />
          <TouchableOpacity onPress={() => handleAddCard()}>
              <View style={styles.addWrapper}>
                  <Text style={styles.addText}>ajouter</Text>
              </View>
              </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>


    </View>
      
    <View style={styles.tasksWrapper}>
        <View style={styles.item}>
          {/* This is where the boards will go! */}
          {
            cardItems.map((item) => {
              return (
                  <Card text={item} />
              )
            })
          }
        </View>
      </View>

    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#C6DD85",
    borderRadius : 9,
    width:300
  },
  item: {
    backgroundColor: '#E6DFB0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor: "#000",
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    borderColor: "#000",
  },
  itemText: {
    maxWidth: '100%',

  },
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default List;