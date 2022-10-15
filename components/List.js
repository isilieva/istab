import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,
Text, View, TextInput, TouchableOpacity,
Keyboard, ScrollView } from 'react-native';

const List = (props) => {
    const [card, setCard ] = useState();
    const [cardItems, setCardItems] = useState([]);

    const handleAddCard = () => {
        Keyboard.dismiss();
        setCardItems([...cardItems, card])
        setCard(null);
      }

  return (
    <View style={styles.item}>
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
                <Text style={styles.addText}>+</Text>
            </View>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
     

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
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
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default List;