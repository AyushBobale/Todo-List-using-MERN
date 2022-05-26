import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return (
        <header>
            <div className="navbar bg-dark text-dark">
                <div className="my-icon">
                    Todo List
                </div>
            </div>
        </header>
    )
}

export default Header;