// components/Navbar.js
import Link from 'next/link';
import styles from './navbar.module.css'; 
const Navbar = () => {
  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'center', 
      padding: '10px 10px', 
      background: '#d9dfec',
    }}>
      <Link href="./home-page"><p style={{ padding: '10px 20px', textDecoration: 'none', color: '#333' }} className={styles.navLink}>Home</p></Link>
      <Link href="./about-page"><p style={{ padding: '10px 20px', textDecoration: 'none', color: '#333' }} className={styles.navLink}>About</p></Link>
      <Link href="./illustrations-page"><p style={{ padding: '10px 20px', textDecoration: 'none', color: '#333' }} className={styles.navLink}>Gallery</p></Link>
      <Link href="./graphic-design-page"><p style={{ padding: '10px 20px', textDecoration: 'none', color: '#333' }} className={styles.navLink}>Other</p></Link>
      <Link href="./commission-page"><p style={{ padding: '10px 20px', textDecoration: 'none', color: '#333' }} className={styles.navLink}>Commission Info</p></Link>
    </nav>
  );
};

export default Navbar;
