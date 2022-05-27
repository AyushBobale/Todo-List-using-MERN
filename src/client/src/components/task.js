import axios from 'axios';

const Task = (props) => {
    const onSubmitHandle = (e) =>{
        console.log(props.id)
        e.preventDefault();
        const url = `http://localhost:3000/tasks/${props.id}`;
        async function delData(url){
            const fetchedData = await axios.delete(url);
            console.log(fetchedData);
        } 
        delData(url);
    }
    return(
        <>
        <div className="main-column">
            <div className="left-item">
                {props.task}
            </div>
            <div className="right-item">
                <div className="date">
                    {props.date}
                </div>
                <button onClick={(e) => {onSubmitHandle(e)}}>Delete Task</button>
            </div>
        </div>
        <hr className="light"></hr>
        </>
    )
}

export default Task;