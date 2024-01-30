import React from 'react'
import Football from './Football'
import Tennis from './Tennis'
import Basketball from './Basketball'
import styles from '../styles/sass/heading.module.scss'

function MainBody() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="pt-14  pb-5">
                    <div className="lg:flex">
                        <div className={`lg:w-full pl-2 pr-2 col ${styles.globalHeading}`}>
                            <h2 className='text-4xl mb-10 font-black text-gray-600 text-center'>
                                <span className='text-sm mb-2 font-semibold uppercase block tracking-wider'>Recent bet</span>
                                Choose Your Match & Place A Bet
                            </h2>
                            <Football />
                            <Tennis />
                            <Basketball />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainBody