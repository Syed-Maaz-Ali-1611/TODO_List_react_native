// React Native Counter Example using Hooks!

import React , {useState} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './component/task';


export default function App(){
  const [task, setTask]= useState();
  const [taskItems, setTaskItems] = useState([]);

  const handletask = () =>{
    Keyboard.dismiss();
    // console.log(task);~
    setTaskItems([...taskItems, task])
    setTask(null);
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      
      {/*TODO LIST TODAYS TASK*/} 

      <View style= {styles.taskwrapper}>
          <Text style={styles.textTitle}>Todays Tasks</Text>

          <View style = {styles.items}>   
          {
            taskItems.map((items,index) =>{ 
               return (
                <TouchableOpacity key={index} onPress={() =>completeTask(index)}>
                  <Task text={items} />
                </TouchableOpacity>
               ) 
            })
          }
         

          </View>
      </View>

      <KeyboardAvoidingView
       behavior={Platform.OS==="Andriod"?"padding":"height"}
       style = {styles.writeTaskWrapper}>
        <TextInput style= {styles.input}
        placeholder='Write a task' 
        onChangeText={text => setTask(text)}
        value={task} />
          <TouchableOpacity onPress={()=> handletask()}>
            <View style = {styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
              </View>
              </TouchableOpacity>
       </KeyboardAvoidingView>
    </View>

    
  );
  }
// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff0ea",
  },

  taskwrapper:{
    paddingTop : 80,
    paddingHorizontal: 20,

  },

  textTitle:{
    fontSize: 30,
    color : 'black',
    fontWeight: '900',
    fontFamily: 'dela',
  },

  items :{
    marginTop : 30,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection :'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input : {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth : 1,
    marginLeft: 20,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0', 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth : 1, 
    marginRight: 10, 
  },
  addText: {},
});



//https://www.youtube.com/watch?v=00HFzh3w1B8

