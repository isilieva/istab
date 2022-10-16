import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,
Text, View, TextInput, TouchableOpacity,
Keyboard, ScrollView } from 'react-native';
import { SectionList } from 'react-native-web';


const Card = (props) => {
  const [card, setCard ] = useState();
  const [cardItems, setCardItems] = useState([]);

    const handleDeleteCard = (card) => {
     const setCardItems = cardItems.filter((i) => card.id !== list.id);
    }

    const handleUpdateCard = (id) => {
      const newList = card.map((cardItems) => {
        if (cardItems.id === id) {
          const updatedItem = {
            ...cardItems,
            isComplete: !item.isComplete,
          };
  
          return updatedItem;
        }
  
        return cardItems;
      });
  
      setList(newList);
    } 

  return (

      <View >
          <View style={styles.contener}>
            <Text style={styles.itemText}>{props.text}</Text>
          </View>

        <View style={styles.btn}>
          <TouchableOpacity  onPress={() => handleDeleteCard()}>
            <View style={styles.deleteWrapper}>
                  <Text style={styles.addText}>Delete</Text>
              </View>
          </TouchableOpacity>
        </View>

        <View style={styles.btny}>
          <TouchableOpacity style={styles.btn} onPress={() => handleUpdateCard()}>
              <View style={styles.updateWrapper}>
                <Text style={styles.addText}>Update</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>   

  )
}

const styles = StyleSheet.create({
  contener: { // titre 
    backgroundColor:"#cc7474",
    width:410,
    marginBottom: 20,
    borderRadius : 10,
  },
  btn: {
    marginLeft : 350,
  },
  item: { // la place ou les cartes ce stoque 
    backgroundColor: '#E6DFB0',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tasksWrapper: { // l'eplacemets de tasks 
    paddingTop: 20,
  },
  writeTaskWrapper: {
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius : 25,
    backgroundColor: '#DDD02E',
    
  },
  deleteWrapper: {
    width: 60,
    height: 20,
    backgroundColor: '#F72828',
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  updateWrapper: {
    width: 60,
    height: 20,
    backgroundColor: '#6FE142',
    borderRadius: 60,
    alignItems: "center",
    justifyContent: 'space-between',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    space: 10
  },
  itemLeft : {
    textAlign :'left',
  },
  addText: {},
});

export default Card;