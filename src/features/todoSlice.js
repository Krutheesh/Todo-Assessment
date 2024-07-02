import { createSlice } from "@reduxjs/toolkit";
const loadFromLocalStorage = () => {
  
    const data = localStorage.getItem('Todo');
    return data ? JSON.parse(data) : []
  
}
const saveToLocalStorage = (todoList) => {
  localStorage.setItem("Todo",JSON.stringify(todoList))
}
const initialState ={
  todoList:loadFromLocalStorage()
}
export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action) => {
      console.log(action.payload)
     state.todoList = [...state.todoList,action.payload]
     console.log(state.todoList)
  
     saveToLocalStorage(state.todoList)
   
      
    },
    deleteTodo:(state,action)=> {

      state.todoList = state.todoList.filter((task) =>(
        task.id !== action.payload
        ) )
    console.log(state.todoList)
    
    saveToLocalStorage(state.todoList)
    },
    updateTodo:(state,action)=> {
      console.log(action.payload)
      state.todoList = state.todoList.map(task => {
        if(task.id === action.payload.id){
          task.title =action.payload.todo
          task.update = !task.update
          return task
        }
        return task
      })
      saveToLocalStorage(state.todoList)
    },
    markAsCompleted:(state,action)=> {
      state.todoList = state.todoList.map(task => {
        if(task.id === action.payload){
          task.completed = !task.completed
          return task
        }
        return task
      })
      saveToLocalStorage(state.todoList)
    }
  
  }
})

export const {addTodo,deleteTodo,updateTodo,markAsCompleted} = todoSlice.actions;

export default todoSlice.reducer