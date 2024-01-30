import React from 'react'
import logo from '../images/etiket-logo.png';
import esewa from '../images/nrna-logo.png';
import khalti from '../images/khalti logo-01.svg';
import visacard from '../images/800px-Visa_Electron.svg.png';

function Accept() {
    // const logos = [logo, esewa, khalti, visacard, logo, khalti]; 
    const logos = [
        {
            id: 1,
            title: 'Etiket logo',
            logoSrc: logo,
        },
        {
            id: 2,
            title: 'Esewa',
            logoSrc: esewa,
        },
        {
            id: 2,
            title: 'khalti',
            logoSrc: khalti,
        },
        {
            id: 4,
            title: 'visacard',
            logoSrc: visacard,
        },
        {
            id: 5,
            title: 'khalti',
            logoSrc: khalti,
        },
        {
            id: 6,
            title: 'Etiket logo',
            logoSrc: logo,
        },
    ];
    return (
        <div className='logos bg-white shadow pt-14 pb-14'>
            <div className='container'>
                <h2 className='text-3xl mb-8 font-black text-gray-600'>Our Partners</h2>
                <div className='row flex items-center justify-between'>
                    {logos.map((logo, index) => (
                        <div key={index} className='col w-1/5'>
                            <div className='p-3 shadow flex items-center justify-center'>
                                <img
                                    src={logo.logoSrc}
                                    className="w-auto h-12 object-contain"
                                    alt={`${logo.title}`}
                                />
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Accept