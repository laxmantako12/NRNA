import React from 'react'
import styles from '../styles/sass/footer.module.scss'

function Footer() {
  return (
    <footer className={ `footer pt-4 pb-4 text-center bg-orange-600 text-white ${styles.footer} `}>
        <div className='container'>
        <div>&copy; 2024 The Eticket, All rights reserved.</div>
        </div>
    </footer>
  )
}

export default Footer