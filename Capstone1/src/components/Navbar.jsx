import styles from '../styles/Navbar.module.css';
import Library from '../assets/ReadItLibrary.png';
import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <div>
            <nav className={styles.navbar}>
                <ul>
                    <div className={styles.LeftNav}>
                        <img className={styles.LibLogo} src={Library} alt="logo"/>
                    <p> Newark Library </p>
                    </div>
                    <div className={styles.RightNav}>
                    <li> <Link to="/bookList"> Book List </Link> </li>
                    <li> <Link to="/addBook"> Add Book </Link> </li>
                    <li> <Link to="/settings"> Settings </Link> </li>
                    <li> <Link to="/profile"> Profile </Link> </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
