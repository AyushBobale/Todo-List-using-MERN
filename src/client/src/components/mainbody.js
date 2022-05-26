import Task from "./task";
import '../styles/mainbody.css'

function Mainbody(){
    return (
        <main>
            <div className="main-column">
                <div className="left-item">
                    Today
                </div>
                <div className="right-item">
                    View
                </div>
            </div>
            <hr className="light"></hr>
            <Task></Task>
            <Task></Task>
            <Task></Task>
            <Task></Task>
            <Task></Task>
        </main>
    )
}

export default Mainbody;