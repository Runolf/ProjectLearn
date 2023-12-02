import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { addTask } from '../../redux/store';

const taskForm = (/*{onAddTask} */) => {
    
    const [newTitle, setNewTitle] = useState("");
    const dispatch = useDispatch();

    const onChangeText = (val) => {
        setNewTitle(val);
    }
    
    
    const onAddNewTask = () => {
        if(newTitle === "") return
        
        dispatch(addTask(newTitle));

        //onAddTask(newTitle); // previous way to add the tasks
        setNewTitle("");
    }

    return (  
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Nouvelle tâche'
            />
            <Button 
                onPress={onAddNewTask}
                title="Ajouter"
                color={"black"}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        width: "70%",
        height: 40,
    },
    button: {

    }
})

export default taskForm;