import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="app-level-header">
            <div className="logo">
                <h1>Student Manager</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link> </li>
                    <li><Link to="/students" >Students</Link> </li>
                    <li><Link to="/students/new" >New Student</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;