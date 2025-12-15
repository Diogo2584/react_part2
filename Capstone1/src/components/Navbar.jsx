import styles from '../styles/Navbar.module.css';
import Library from '../assets/ReadItLibrary.png';
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
                    <li> Book List </li>
                    <li> Add Book </li>
                    <li> Settings </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
