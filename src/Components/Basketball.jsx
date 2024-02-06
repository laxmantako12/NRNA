import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { BeakerIcon } from '@heroicons/react/24/solid'
import Icon1 from '../assets/images/team-3.png';
import Icon2 from '../assets/images/team-4.png';
import BasketballImage from '../assets/images/basket-bg.png';

function Basketball() {
  return (
    <div className='sports shadow  border-gray-800  overflow-hidden rounded-md bg-white mb-7'>
            <div className='sports_item'>
                <div className='sports_Header p-5 font-normal text-2xl bg-orange-600 text-white flex justify-between'>

                    <h3 className='font-bold'><FontAwesomeIcon className='mr-2' icon={faBasketball} />
                    Basketball <span>(36)</span></h3>
                    <div className='single-sports-img basket-bg'>
                        <img src={BasketballImage} />

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                <div className='sports_content p-5 '>
                    <div className='sports_content_title mb-4 flex justify-between text-lg font-bold text-gray-500'>
                        <h3>UEFA Champions League</h3>
                        <span className='count'>(3)</span>
                    </div>
                    {/* end  */}
                    <div className='sports_content_item items-center border-slate-300 rounded-md border border-solid mb-4 p-6 flex justify-between'>
                        <div className="match-time pr-6 text-center border-slate-300 border-r border-solid">
                            <div className="time-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            <div className="m-date text-slate-400 font-semibold">24 Nov</div>
                            <div className="m-time font-bold text-green-600">9:22 am</div>
                        </div>
                        {/* end  */}
                        <div className="playing-teams w-80 flex flex-col pr-5 pl-5">
                            <div className="single-team flex justify-between">
                                <div className="team-descr pt-1 pb-1 flex items-center">
                                    <span className="team-icon mr-2">
                                        <img src={Icon1} className='w-4' alt="" />
                                    </span>
                                    <span className="team-name text-slate-500 font-bold">Dinamo Zagreb</span>
                                </div>
                                <div className="team-score text-slate-300 font-bold">0</div>
                            </div>
                            <div className="single-team flex justify-between">
                                <div className="team-descr pt-1 pb-1 flex items-center">
                                    <span className="team-icon mr-2">
                                        <img src={Icon2} className='w-4' alt="" />
                                    </span>
                                    <span className="team-name text-slate-500 font-bold">Bodo-Glimt</span>
                                </div>
                                <div className="team-score text-slate-300 font-bold">0</div>
                            </div>
                        </div>
                        {/* end 
                                
                                */}
                        <div className="placing-bet gap-20 pr-6 pl-6 border-slate-300 border-r border-l border-solid flex text-center">
                            <a href="#" className="single-bet-place bg-slate-100 p-4 shadow border rounded-md">
                                <span className="bet-ratio block font-bold text-slate-600">0.25</span>
                                <span className="team-name block text-slate-500 font-semibold">Dinamo Zagreb</span>
                            </a>
                            <a href="#" className="single-bet-place bg-slate-100 p-4 shadow border rounded-md draw-box">
                                <span className="bet-ratio block font-bold text-slate-600">1.42</span>
                                <span className="team-name block text-slate-500 font-semibold" data-team-name="data-team-name">draw</span>
                            </a>
                            <a href="#0" className="single-bet-place bg-slate-100 p-4 shadow border rounded-md">
                                <span className="bet-ratio block font-bold text-slate-600">4.32</span>
                                <span className="team-name block text-slate-500 font-semibold" data-team-name="data-team-name">Bodo-Glimt</span>
                            </a>
                        </div>
                        {/* end  */}

                        <div className="bet-ratio-details pl-3 pr-3 w-10 flex font-bold text-green-600">
                            <a href="#" className='flex'>33 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </a>
                        </div>
                    </div>
                    {/* end  */}

                    <div className='sports_content_item items-center border-slate-300 rounded-md border border-solid mb-4 p-6 flex justify-between'>
                        <div className="match-time pr-6 text-center border-slate-300 border-r border-solid">
                            <div className="time-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            {/* <div className="m-date text-slate-400 font-semibold">24 Nov csad</div> */}
                            <div className="m-time text-slate-400 font-semibold">9:22 am</div>
                            <div className="m-in-play inline-block bg-red-500 text-white uppercase text-xs font-semibold ">in-play</div>
                        </div>
                        {/* end  */}
                        <div className="playing-teams w-80 flex flex-col pr-5 pl-5">
                            <div className="single-team flex justify-between">
                                <div className="team-descr pt-1 pb-1 flex items-center">
                                    <span className="team-icon mr-2">
                                        <img src={Icon1} className='w-4' alt="" />
                                    </span>
                                    <span className="team-name text-slate-500 font-bold">Dinamo Zagreb</span>
                                </div>
                                <div className="team-score text-green-600 font-bold">3</div>
                            </div>
                            <div className="single-team flex justify-between">
                                <div className="team-descr pt-1 pb-1 flex items-center">
                                    <span className="team-icon mr-2">
                                        <img src={Icon2} className='w-4' alt="" />
                                    </span>
                                    <span className="team-name text-slate-500 font-bold">Bodo-Glimt</span>
                                </div>
                                <div className="team-score text-red-500 font-bold">0</div>
                            </div>
                        </div>
                        {/* end 
                                
                                */}
                        <div className="placing-bet gap-20 pr-6 pl-6 border-slate-300 border-r border-l border-solid flex text-center">
                            <a href="#" className="single-bet-place bet-up bg-slate-100 p-4 shadow border rounded-md">
                                <span className="bet-ratio block font-bold text-green-600">1</span>
                                <span className="team-name block text-slate-500 font-semibold">Dinamo Zagreb</span>
                            </a>
                            <a href="#" className="single-bet-place bet-down bg-slate-100 p-4 shadow border rounded-md draw-box">
                                <span className="bet-ratio block font-bold text-red-500">2.42</span>
                                <span className="team-name block text-slate-500 font-semibold" data-team-name="data-team-name">draw</span>
                            </a>
                            <a href="#0" className="single-bet-place bet-down bg-slate-100 p-4 shadow border rounded-md">
                                <span className="bet-ratio block font-bold text-red-500">4.32</span>
                                <span className="team-name block text-slate-500 font-semibold" data-team-name="data-team-name">Bodo-Glimt</span>
                            </a>
                        </div>
                        {/* end  */}

                        <div className="bet-ratio-details pl-3 pr-3 w-10 flex font-bold text-green-600">
                            <a href="#" className='flex'>33 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </a>
                        </div>
                    </div>

                    <div className='sports_content_item items-center border-slate-300 rounded-md border border-solid mb-4 p-6 flex justify-between'>
                        <div className="match-time pr-6 text-center border-slate-300 border-r border-solid">
                            <div className="time-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            <div className="m-date text-slate-400 font-semibold">24 Nov</div>
                            <div className="m-time font-bold text-green-600">9:22 am</div>
                        </div>
                        {/* end  */}
                        <div className="playing-teams w-80 flex flex-col pr-5 pl-5">
                            <div className="single-team flex justify-between">
                                <div className="team-descr pt-1 pb-1 flex items-center">
                                    <span className="team-icon mr-2">
                                        <img src={Icon1} className='w-4' alt="" />
                                    </span>
                                    <span className="team-name text-slate-500 font-bold">Dinamo Zagreb</span>
                                </div>
                                <div className="team-score text-slate-300 font-bold">0</div>
                            </div>
                            <div className="single-team flex justify-between">
                                <div className="team-descr pt-1 pb-1 flex items-center">
                                    <span className="team-icon mr-2">
                                        <img src={Icon2} className='w-4' alt="" />
                                    </span>
                                    <span className="team-name text-slate-500 font-bold">Bodo-Glimt</span>
                                </div>
                                <div className="team-score text-slate-300 font-bold">0</div>
                            </div>
                        </div>
                        {/* end 
                                
                                */}
                        <div className="placing-bet gap-20 pr-6 pl-6 border-slate-300 border-r border-l border-solid flex text-center">
                            <a href="#" className="single-bet-place bg-slate-100 p-4 shadow border rounded-md">
                                <span className="bet-ratio block font-bold text-slate-600">0.25</span>
                                <span className="team-name block text-slate-500 font-semibold">Dinamo Zagreb</span>
                            </a>
                            <a href="#" className="single-bet-place bg-slate-100 p-4 shadow border rounded-md draw-box">
                                <span className="bet-ratio block font-bold text-slate-600">1.42</span>
                                <span className="team-name block text-slate-500 font-semibold" data-team-name="data-team-name">draw</span>
                            </a>
                            <a href="#0" className="single-bet-place bg-slate-100 p-4 shadow border rounded-md">
                                <span className="bet-ratio block font-bold text-slate-600">4.32</span>
                                <span className="team-name block text-slate-500 font-semibold" data-team-name="data-team-name">Bodo-Glimt</span>
                            </a>
                        </div>
                        {/* end  */}

                        <div className="bet-ratio-details pl-3 pr-3 w-10 flex font-bold text-green-600">
                            <a href="#" className='flex'>33 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Basketball