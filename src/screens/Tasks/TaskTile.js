import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

function TaskTile({task, onUpdateTask, onDeleteTask}) {

    const onChangeStatus = () => {
        onUpdateTask(task.id);
    }

    const onRemoveTask = () => {
        onDeleteTask(task.id);
    }

    return (
        <View style={style.container}>
            <Pressable onPress={onChangeStatus} style={style.suContainer}>
                <Image 
                    style={style.check}
                    source={task.isCompleted? require('../../assets/icons/task_alt.png')  : require('../../assets/icons/outline_circle.png')}
                />
                <Text style={style.title}>{task.title}</Text>
            </Pressable>
            
            <Pressable onPress={onRemoveTask}>
                <Image 
                    style={style.check}
                    source={require('../../assets/icons/outline_delete.png')}
                />
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
    },
    suContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title:{
        marginLeft: 20,
        fontSize: 16,
    },  
    check:{
        width: 26,
        height: 26,
    }
})

export default TaskTile;