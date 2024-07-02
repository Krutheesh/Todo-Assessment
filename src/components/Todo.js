import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPen, faTrash} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteTodo, markAsCompleted, updateTodo } from '../features/todoSlice'

function Todo( {taskTo,delTask}) {
  const [todo,setTodo] = useState(taskTo.title)
  const dispatch = useDispatch()
  const delTodoHandler = (id) => {
    console.log(id)
    if(!id){
      alert("no id")
    }
    else{
      dispatch(deleteTodo(id))
    }
  }

  const markHandler = (id) => {
    console.log(id)
    if(!id){
      alert("no id")
    }
    else{
      dispatch(markAsCompleted(id))
    }
  }

  const updateHandler = (id) => {
    console.log(id)
    if(!id){
      alert("no id")
    }
    else{
      dispatch(updateTodo({id,todo}))
    }
  }

  

 
  return (
    <>
          <div className='px-3'>
          <textarea name="" id=""  value={todo} readOnly={!taskTo.update} className={`${taskTo.update ? "text-yellow-500":""} px-3 mt-5  bg-sky-600 outline-none  scrollbar-hide resize-none ${taskTo.completed ? "text-[#AFB0B0] line-through ": "text-white"}` } onChange={(e) => setTodo(e.target.value)}></textarea>
          </div>
           <div className=" flex justify-between align-center  ">
           {!taskTo.completed && <div className="py-5 px-2 md:p-5  relative  group"><FontAwesomeIcon icon={faPen} className="pen hover:text-white" onClick = {() => updateHandler(taskTo.id)}
           />  <div class="opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg py-2 px-4 absolute z-10 top-15  mb-10 left-1/2 transform -translate-x-1/2 transition duration-300 ease-in-out">
           Edit
         </div></div>}
          { !taskTo.update && <div  className="py-5 px-2 md:p-5 relative  group">
           <FontAwesomeIcon icon={faCircleCheck} className="hover:text-white cursor-pointer" onClick={ () => { 
            markHandler(taskTo.id)
          }}  />
           <div class="opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg py-2 px-4 absolute z-10 top-15  mb-10 left-1/2 transform -translate-x-1/2 transition duration-300 ease-in-out">
    Mark/Remove as Completed
  </div>
           </div>}
           <div  className="py-5 px-2 md:p-5 cursor-pointer relative  group">
           <FontAwesomeIcon icon={faTrash} className="hover:text-red-600" onClick={ () => delTodoHandler(taskTo.id)}
           
           />
           <div class="opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg py-2 px-4 absolute z-10 top-15  mb-10 left-1/2 transform -translate-x-1/2 transition duration-300 ease-in-out">
    Delete
  </div>
           </div>
          
           </div>
    
    </>
  )
}

export default Todo
