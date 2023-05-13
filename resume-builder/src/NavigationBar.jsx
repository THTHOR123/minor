import React from 'react';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>About</a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default Navbar;
