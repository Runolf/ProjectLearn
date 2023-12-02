import React, {useState} from 'react'
import Header from '../../components/Header'
import {View, Text, FlatList, Button, StyleSheet, Pressable } from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './taskForm';
import FloatingButton from '../../components/_Shared/FloatingButton';
import CounterTask from '../../components/_Shared/CounterTask';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, toggleTask, deleteTask } from '../../redux/store';

export const TasksScreen = () => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    //const [tasks, setTasks] = useState([]);
    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();
    /*
    const onAddTask = (title) => {
      let body = {
        id: Date.now().toString(),
        title,
        isCompleted: false
      }
      setTasks([...tasks, body]);
    }
    */

    const onUpdateTask = (id) => {
      /*let newTasks = [];

      tasks.forEach(t => {
        if(t.id !== id) {
          newTasks.push(t);
          return
        }

        newTasks.push({
          id,
          title: t.title,
          isCompleted: !t.isCompleted,
        })
      })

      setTasks(newTasks);*/
      
      dispatch(toggleTask(id));
    }

    const onDeleteTask = (id) => {
      /*let newTasks = []

      tasks.forEach(t => {
        if(t.id !== id){
          newTasks.push(t);
          return
        }
      })

      setTasks(newTasks);*/
      dispatch(deleteTask(id));
    }

    const renderItem = ({item}) => {
       return <TaskTile onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} task={item}/> 
    }

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    }

  return (
    <View>
        <FlatList 
            ListHeaderComponent={
            <>
              <Header />
              { isFormVisible && <TaskForm /*onAddTask={onAddTask} */ /> }
              <View style={styles.counter}>
                <CounterTask title="Tâches crées" nbr={tasks.length}/>
                <CounterTask title="Tâches effectuées" nbr={tasks.filter(t => t.isCompleted === true).length}/>
              </View>
            </>
            }
            contentContainerStyle={{flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
      <FloatingButton toggle={toggleForm} isFormVisible={isFormVisible}/>

    </View>
  )
}

const styles = StyleSheet.create({
  counter:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingHorizontal: 10,
  }
})