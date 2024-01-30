import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/sass/variable.module.scss'
// $graidentBg
import {
    faHome,
    faCoffee,
    faFutbol,
    faTableTennisPaddleBall,
    faBasketball,
    faCircle,
    faRunning,
    faChess
} from '@fortawesome/free-solid-svg-icons'



function Topbar() {
    return (
        <div className={`pt-6  pb-6 bg-slate-700 text-white topbar ${styles.graidentBg}`}>
            <div className='container'>
                <ul className='flex text-sm items-center justify-between'>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faHome} />Home</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faCoffee} />Live</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faFutbol} />Football</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faTableTennisPaddleBall} />Tennis</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faBasketball} />Basketball</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faFutbol} />Football</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faCircle} />Cricket</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faChess} />Chess</a></li>
                    <li><a><FontAwesomeIcon className='mr-2' icon={faRunning} />Running</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar