import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,
Text, View, TextInput, TouchableOpacity,
Keyboard, ScrollView } from 'react-native';
import Card from './Card';


const List = (props) => {
    const [card, setCard ] = useState();
    const [cardItems, setCardItems] = useState([]);

    const handleAddCard = () => {
        Keyboard.dismiss();
        setCardItems([...cardItems, card])
        setCard(null);
      }

  return (
    <>
    <View style={styles.contener}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
    </View>

    <View>
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
      
    <View style={styles.tasksWrapper}>
    <ScrollView horizontal='true'>
        <View style={styles.item}>
          {/* This is where the cards will go! */}
          {
            cardItems.map((card,index) => {
              return (
                <TouchableOpacity key={index}>
                    
                    <Card text={card} />
  
                </TouchableOpacity>
                
              )
            })
          }
        </View>
        </ScrollView>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  contener: { // titre 
    alignItems: "center",
    backgroundColor:"#C6DD85",
    width:'100%'
  },
  item: { // la place ou les cartes ce stoque 
    backgroundColor: '#E6DFB0',
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tasksWrapper: { // l'eplacemets de tasks 
    paddingTop: 20,
  },
  writeTaskWrapper: { // add task
    width: '50%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius : 25,
    backgroundColor: '#DDD02E',
    
  },
  addWrapper: {
    width: 20,
    height: 20,
    backgroundColor: '#72D59D',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  itemLeft : {
    textAlign :'left',
  },
  addText: {},

  
});

export default List;