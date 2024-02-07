import React from 'react'
import Football from './Football'
import Tennis from './Tennis'
import Basketball from './Basketball'


function MainBody() {
    return (
        <div className='container mx-auto pr-2 pl-2 max-w-6xl'>

            <div className="pt-14  pb-5">
                <div className="lg:flex">
                    <div className={`lg:w-full globalHeading`}>
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
    )
}

export default MainBody