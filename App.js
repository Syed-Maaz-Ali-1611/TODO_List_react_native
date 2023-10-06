// React Native Counter Example using Hooks!

import React , {useState} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard,ScrollView, Image} from 'react-native';
import Task from './component/task';


export default function App(){
  const [task, setTask]= useState();
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  



  const handleTask = () => {
    Keyboard.dismiss();
    setPendingTasks([...pendingTasks, task]);
    setTask('');
  };

  const completeTask = (index) => {
    const completedTask = pendingTasks[index];
    setCompletedTasks([...completedTasks, completedTask]);

    const updatedPendingTasks = [...pendingTasks];
    updatedPendingTasks.splice(index, 1);
    setPendingTasks(updatedPendingTasks);
  };

  const deleteCompletedTask = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks.splice(index, 1);
    setCompletedTasks(updatedCompletedTasks);
  };

 
  return (
  
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.taskwrapper}>
        <Text style={styles.textTitle}>Todays Tasks</Text>
        <View style={styles.items}>
         
   
          {pendingTasks.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
          
        </View>
      </View>

      <View style={styles.taskwrapper}>
        <Text style={styles.textTitle}>Completed Tasks</Text>
        <TouchableOpacity onPress={() => deleteCompletedTask(0)}>
            {/* Assuming you want to delete the first completed task */}
            <Image style={styles.image} source={require('../first/assets/images/bin.png')} />
          </TouchableOpacity>
        <View style={styles.items}>
          {completedTasks.map((item, index) => (
            <Task key={index} text={item} />
          ))}
        </View>
      </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
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
    backgroundColor: "#8D8FAD",
  },

  taskwrapper:{
    paddingTop : 80,
    paddingHorizontal: 20,

  },

  textTitle:{
    fontSize: 30,
    color : 'white',
    fontWeight: '900',
    fontFamily: 'DelaGothicOne-Regular',
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
  image:{
    height: 20,
    width:20,
    marginHorizontal:290,
    marginRight: 20,
    marginVertical:-20,
  }
});



//https://www.youtube.com/watch?v=00HFzh3w1B8

