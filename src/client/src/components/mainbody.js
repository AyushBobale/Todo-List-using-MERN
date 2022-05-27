import Task from "./task";
import MainForm from "./mainForm";
import axios from 'axios';
import '../styles/mainbody.css'
import { useEffect, useState } from "react";

const Mainbody = (props) => {
    const today  = new Date().toLocaleDateString();
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        const url = 'http://localhost:3000/tasks';
        async function getData(url){
            const fetchedData = await axios.get(url);
            setTasks(fetchedData.data);
            //console.log(fetchedData.data[0]._id)
        } 
        getData(url);
    }, [])

    const updateTasks = () =>{
        const url = 'http://localhost:3000/tasks';
        async function getData(url){
            const fetchedData = await axios.get(url);
            setTasks(fetchedData.data);
            //console.log(fetchedData.data[0]._id)
        } 
        getData(url);
    }

    return (
        <main>
            <div className="main-column">
                <div className="left-item">
                    Today 
                    <div className="date">
                        {today}
                    </div>
                </div>
                <div className="right-item">
                    View
                </div>
            </div>
            <hr className="light"></hr>
            {tasks.map((task) => {
                return <Task task={task.task} date={task.date} key={tasks.indexOf(task)} id={task._id}/>
            })}
            <MainForm/>
        </main>
    )
}

export default Mainbody;