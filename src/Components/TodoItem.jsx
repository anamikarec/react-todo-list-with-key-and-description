const TodoItem = ({id,status,title,dummyId,description,handleDelete,handleToggle}) =>{
    var listNumber = dummyId;
   
   if(listNumber === 1)
       return (
           ''
       );
   
     return (
           <div className="container" >
               <span className="i-num">{listNumber-1}.</span>
               <span className="task">{`${title}`}</span>
               <span className="task" id="status">{`${status}`}</span>
               <button onClick = {()=>handleDelete(id)} className="deleteBtn">Delete</button>
               <button onClick = {()=>handleToggle(id)} className = "toggleBtn">Toggle</button>
               <div className="taskDes">{`${description}`}</div>
              </div>
       );
   };
   export default TodoItem;