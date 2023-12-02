/** Normalement on doit créer des sous dossiers: Reducers, Actions, Store ... Mais 
 * ici on fait une version simplifiée pour la formation
 */

import { createStore, combineReducers } from 'redux';


// Selectors : Selectionner une partie de notre store
export const getTasks = (store) => store.tasksList;
export const getCompletedTasks = (store) => store.tasksList.filter(t => t.isCompleted === true);  
// Actions : Fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload: { DATA }}

//ADD_TASK
const ADD_TASK = "ADD_TASK";  
export function addTask(title){
    return{
        type: ADD_TASK,
        payload: {
            title: title,
        }
    }
}
//TOGGLE_TASK
const TOGGLE_TASK = "TOGGLE_TASK";
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
})
//DELETE_TASK
const DELETE_TASK = "DELETE_TASK";
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
})


// Reducers : fonctions retournant un nouveau state
const initialState = [{id: 1, title: "init state", isCompleted: false}]
const tasksList = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK: 
            return [...state, {
                id: new Date().getTime().toString(),
                isCompleted: false,
                title: action.payload.title,
            }]
        case TOGGLE_TASK:
            let newState = [];
            state.forEach(task => {
                if(task.id === action.payload.id){
                    newState.push({
                        ...task,
                        isCompleted: !task.isCompleted
                    })
                    return
                }
                newState.push(task);
            })
            return newState;
        
        case DELETE_TASK:
           return state.filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
}

// on peut avec ça créer d'autre reducer pour les envoyer ensuite dans le createStore
const rootReducers = combineReducers({
    tasksList
})

// Store : Accessible depuis tous les composant

export const store = createStore(rootReducers);


