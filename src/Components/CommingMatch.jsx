import React from 'react'


import team1 from '../assets/images/team-3.png';
import team2 from '../assets/images/team-4.png';
import VS from '../assets/images/vs.png';
import vectorLine from '../assets/images/vector-line.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock
} from '@fortawesome/free-solid-svg-icons'

function CommingMatch() {
    return (
        <div className='CommingMatch mb-14 mt-3'>
            <div className={`container mx-auto pr-2 pl-2 max-w-7xl globalHeading`}>
                <h2 className='text-3xl md:text-4xl mb-10 font-black text-gray-600 text-center'>
                    <span className='text-sm font-semibold uppercase block mb-2 tracking-wider'>next schedule</span>
                    Fixtures of all Upcoming Matches
                </h2>
                <div className='lg:flex -mr-2 -ml-2'>
                    <div className='pr-2 pl-2 lg:w-1/2 md:w-full'>
                        <div className='shadow  border-gray-800  overflow-hidden rounded bg-white mb-8 lg:mb-0'>
                            <div className="single-view-schedule bg-white text-center">
                                <div className={`schedue-header p-5 text-white overflow-hidden z-10 relative graidentBg`}>
                                    <span className="tournament-name block text-lg  md:text-2xl font-bold ">UEFA Champions League - 2022</span>
                                    <span className="stadium-name block mt-2">Tottenham Hotspur Stadium, london</span>
                                </div>
                                <div className="schedule-body p-6 lg:p-8 lg:pr-14 lg:pl-14">
                                    <div className="schedule-stats flex items-center justify-between">
                                        <div className="single-team">
                                            <div className="team-icon">
                                                <img src={team1} alt="" className='inline-block max-w-8 md:max-w-28' />
                                            </div>
                                            <span className="team-name text-slate-500 md:text-base text-sm/[14px] font-bold block mt-4">Dinamo Zagreb</span>
                                        </div>
                                        <div className="date-times-vs">
                                            <span className="time text-sm/[16px] md:text-lg text-slate-400 font-sm block">
                                                <FontAwesomeIcon className='mr-2' icon={faClock} /> 09:00 AM</span>

                                            <span className="date text-sm/[16px] mt-2 md:text-lg text-green-600 block">24 Nov SAT, 2022</span>
                                            <img src={VS} className="versace-icon inline-block  max-w-10 md:max-w-28 mt-8" alt="" />
                                        </div>
                                        <div className="single-team">
                                            <div className="team-icon">
                                                <img src={team2} alt="" className='inline-block max-w-8 md:max-w-28' />
                                            </div>
                                            <span className="team-name text-slate-500 md:text-base text-sm/[14px] font-bold block mt-4">Bodo Glimt FC</span>
                                        </div>
                                    </div>
                                    <div className="placing-bet flex items-center justify-center mt-6">
                                        <a href="#0" className="place-a-bet placed bg-red-500 text-white text-base font-semibold rounded p-1.5 min-w-20 inline-block  ml-1.5 mr-1.5">0.25</a>
                                        <a href="#0" className="place-a-bet p-1.5 min-w-20 inline-block border rounded ml-1.5 mr-1.5 text-slate-500 font-semibold ">1.42</a>
                                        <a href="#0" className="place-a-bet p-1.5 min-w-20 inline-block border rounded ml-1.5 mr-1.5 text-slate-500 font-semibold ">4.32</a>
                                    </div>
                                </div>
                                <div className={`schedue-timer timer flex items-center justify-between overflow-hidden relative graidentBg`} data-date="30 Feb 2023 9:56:00 GMT+01:00">
                                    <div className="time-starting-text text-white text-base capitalize">
                                        <span className="txt">starting on</span>
                                        <img className="icon" src={vectorLine} alt="" />
                                    </div>
                                    <div className="all-timer-task flex items-center justify-between text-white overflow-hidden z-10 relative">
                                        <div className="single-time w-28 pt-3 pb-3">
                                            <span className="number day block text-xl md:text-3xl font-medium">-333</span>
                                            <span className="title block">Days</span>
                                        </div>
                                        <div className="single-time  w-28 pt-3 pb-3">
                                            <span className="number hour block text-xl md:text-3xl font-medium">17</span>
                                            <span className="title block">Hours</span>
                                        </div>
                                        <div className="single-time w-28 pt-3 pb-3">
                                            <span className="number minute block text-xl md:text-3xl font-medium">42</span>
                                            <span className="title block">Minutes</span>
                                        </div>
                                        <div className="single-time w-28 pt-3 pb-3">
                                            <span className="number second block text-xl md:text-3xl font-medium">59</span>
                                            <span className="title block">Seconds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col  */}
                    <div className='pr-2 pl-2 lg:w-1/2 md:w-full'>
                        <div className='shadow  border-gray-800 mb-3 md:mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-4 md:p-6">
                                <div className="single-team md:flex  items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-14 md:max-w-24 pr-2 pl-2" />
                                <div className="single-team md:flex items-center">
                                    <div className="team-icon order-2">
                                        <img src={team2} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="order-1 team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Bodo Glimt FC</span>

                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}

                        <div className='shadow  border-gray-800 mb-3 md:mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-4 md:p-6">
                                <div className="single-team md:flex  items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-14 md:max-w-24 pr-2 pl-2" />
                                <div className="single-team md:flex items-center">
                                    <div className="team-icon order-2">
                                        <img src={team2} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="order-1 team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Bodo Glimt FC</span>

                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}

                        <div className='shadow  border-gray-800 mb-3 md:mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-4 md:p-6">
                                <div className="single-team md:flex  items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-14 md:max-w-24 pr-2 pl-2" />
                                <div className="single-team md:flex items-center">
                                    <div className="team-icon order-2">
                                        <img src={team2} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="order-1 team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Bodo Glimt FC</span>

                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}

                        <div className='shadow  border-gray-800 mb-3 md:mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-4 md:p-6">
                                <div className="single-team md:flex  items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-14 md:max-w-24 pr-2 pl-2" />
                                <div className="single-team md:flex items-center">
                                    <div className="team-icon order-2">
                                        <img src={team2} alt="" className='max-w-5 md:max-w-10 mx-auto' />
                                    </div>
                                    <span className="order-1 team-name text-slate-500  md:text-base text-sm/[14px] font-bold md:pr-4 md:pl-4 inline-block">Bodo Glimt FC</span>

                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}
                    </div>
                    {/* emd col  */}
                </div>
                {/* end -mr-2 -ml-2  */}
            </div>
        </div>
    )
}

export default CommingMatch