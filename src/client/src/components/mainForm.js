import axios from 'axios';
import { useState } from "react";

const MainForm = (props) =>{
    const [newtask, setNewTask] = useState({task:'', date:'', id:''})
    const onSubmitHandle = (e, newtask) =>{
        e.preventDefault();
        const url = 'http://localhost:3000/tasks';
        async function postData(url, newtask){
            const fetchedData = await axios.post(url, newtask);
            console.log(fetchedData);
        } 
        postData(url, newtask);
    }
    return(
        <>
        <form>
            <textarea   cols="5" 
                        name="taskname" 
                        placeholder="Add task Description"
                        onChange={(e)=>setNewTask({task : e.target.value, date: newtask.date})}></textarea>
            <div className="form-right">
                <div className="left-item">
                    <input  type="date" 
                            onChange={(e)=>setNewTask({task : newtask.task, date : e.target.value})} />
                </div>
                <div className="right-item">
                    <button onClick={(e)=>{onSubmitHandle(e, newtask)}}> Add Task</button>
                </div>
            </div>
        </form>
        <hr className="light"></hr>
        </>
    )
}

export default MainForm;