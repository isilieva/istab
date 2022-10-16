import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Board = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>

        <View style={styles.btn}>
          <TouchableOpacity onPress={() => handleDeleteBoard()}>
             <View style={styles.deleteWrapper}>
                <Text style={styles.addText}>Delete Board</Text>
              </View>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  btn:{
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,

  },
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
  deleteWrapper: {
    width: 100,
    backgroundColor: '#F72828',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#C0C0C0',
    borderWidth: 1,
    space: 10
  },
});

export default Board;