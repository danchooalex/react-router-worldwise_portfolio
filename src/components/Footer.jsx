import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <footer className={styles.footer}></footer>
      <p>&copy; Copiright {new Date().getFullYear()} by WorldWise Inc.</p>
    </div>
  );
}

export default Footer;
