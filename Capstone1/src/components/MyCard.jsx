import styles from '../styles/MyCard.module.css';
function MyCard () {
    return (
        <div className={styles.card}>
            <div className={styles.card-body}>
                <h5 className={styles.card-title}>Login</h5>
                <form>
                    <div className={styles.Login}>
                        <h2> Log In to Your Account</h2>
                        <label className={styles.form-label}>Username </label>
                        <input type="email" className={styles.form-control} id="loginEmail" />
                        <label className={styles.form-label}>Password</label>
                        <input type="email" className={styles.form-control} id="loginPassword" />
                        <p> Forgot Password? </p>
                        <button type="submit" className={styles.btn-primary}>Login</button>
                    </div>
                    <div className={styles.Account}>
                        <h2> Create An Account </h2>
                        <label className={styles.form-label}>Username</label>
                        <input type="email" className={styles.form-control} id="accountEmail" />
                        <label className={styles.form-label}>Password</label>
                        <input type="password" className={styles.form-control} id="accountPassword" />
                        <div className={styles.form-check}>
                            <input className={styles.form-check-input} type="radio" name="userType" id="userType1" value="reader" />
                            <label className={styles.form-check-label}>
                            Agree to Privacy Policy and Terms of Service*
                            </label>
                        </div>
                    </div>
                    <button type="submit" className={styles.btn-primary}>Sign Up</button>
                    </form>
        </div>
        </div>
    );
}
export default MyCard;