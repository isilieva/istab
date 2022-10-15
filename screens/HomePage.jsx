import { View, Text, StyleSheet,FlatList, StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import Note from '../components/Note';
import NoteInputModal from '../components/NoteInputModal';
import NotFound from '../components/NotFound';
import RoundIconBtn from '../components/RoundIconBtn';
import SearchBar from '../components/SearchBar';
import { useNotes } from '../context/NoteProvider';
import colors from '../misc/colors';


const HomePage = ({ navigation }) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [resultNotFound, setResultNotFound] = useState(false);
    
    const { notes, setNotes, findNotes } = useNotes();
    
    
    const handleOnSubmit = async (title, desc) => {
        const note = { id: Date.now(), title, desc, time: Date.now() };
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };
    
    const openNote = note => {
        navigation.navigate('NoteDetail', { note }); //navigation to created board 
    };
    
    const handleOnSearchInput = async text => {
        setSearchQuery(text);
        if (!text.trim()) {
          setSearchQuery('');
          setResultNotFound(false);
          return await findNotes();
        }
        const filteredNotes = notes.filter(note => {
          if (note.title.toLowerCase().includes(text.toLowerCase())) {
            return note;
          }
    });
    
    if (filteredNotes.length) {
          setNotes([...filteredNotes]);
        } else {
          setResultNotFound(true);
        }
    };
    
    const handleOnClear = async () => {
        setSearchQuery('');
        setResultNotFound(false);
        await findNotes();
    };
    
    return (
        <>
          <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <SearchBar
                  value={searchQuery}
                  onChangeText={handleOnSearchInput}
                  containerStyle={{ marginVertical: 15 }}
                  onClear={handleOnClear}
                />

              {resultNotFound ? (
                <NotFound />
              ) : (
                <FlatList
                  numColumns={2}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginBottom: 15,
                  }}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <Note onPress={() => openNote(item)} item={item} />
                  )}
                />
              )}
    
                <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    styles.emptyHeaderContainer,
                  ]}
                >
                  <Text style={styles.emptyHeader}>Add Notes</Text>
                </View>

            </View>
          </TouchableWithoutFeedback>
          <RoundIconBtn
            onPress={() => setModalVisible(true)}
            antIconName='plus'
            style={styles.addBtn}
          />
          <NoteInputModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onSubmit={handleOnSubmit}
          />
        </>
      );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });

export default HomePage