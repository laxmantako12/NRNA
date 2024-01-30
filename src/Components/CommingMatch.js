import React from 'react'
import styles from '../styles/sass/heading.module.scss'
import styleVariable from '../styles/sass/variable.module.scss'
import team1 from '../images/team-3.png';
import team2 from '../images/team-4.png';
import VS from '../images/vs.png';
import vectorLine from '../images/vector-line.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock
} from '@fortawesome/free-solid-svg-icons'

function CommingMatch() {
    return (
        <div className='CommingMatch mb-14 mt-3'>
            <div className={`container ${styles.globalHeading}`}>
                <h2 className='text-4xl mb-10 font-black text-gray-600 text-center'>
                    <span className='text-sm font-semibold uppercase block mb-2 tracking-wider'>next schedule</span>
                    Fixtures of all Upcoming Matches
                </h2>
                <div className='flex row'>
                    <div className='col w-1/2 md:w-full'>
                        <div className=''>

                            <div className='shadow  border-gray-800  overflow-hidden rounded bg-white'>
                                <div className="single-view-schedule bg-white text-center">
                                    <div className={`schedue-header p-5 text-white overflow-hidden z-10 relative ${styleVariable.graidentBg}`}>
                                        <span className="tournament-name block text-2xl font-bold ">UEFA Champions League - 2022</span>
                                        <span className="stadium-name block mt-2">Tottenham Hotspur Stadium, london</span>
                                    </div>
                                    <div className="schedule-body pt-8 pb-8 pr-14 pl-14">
                                        <div className="schedule-stats flex items-center justify-between">
                                            <div className="single-team">
                                                <div className="team-icon">
                                                    <img src={team1} alt="" className='inline-block' />
                                                </div>
                                                <span className="team-name team-name text-slate-500 text-base font-bold block mt-4">Dinamo Zagreb</span>
                                            </div>
                                            <div className="date-times-vs">
                                                <span className="time text-slate-400 font-sm block text-lg">
                                                    <FontAwesomeIcon className='mr-2' icon={faClock} /> 09:00 AM</span>
                                                <span className="date font-sm text-green-600 block text-lg">24 Nov SAT, 2022</span>
                                                <img src={VS} className="versace-icon inline-block  max-w-28 mt-8" alt="" />
                                            </div>
                                            <div className="single-team">
                                                <div className="team-icon">
                                                    <img src={team2} alt=""  className='inline-block' />
                                                </div>
                                                <span className="team-name team-name text-slate-500 text-base font-bold block mt-4">Bodo Glimt FC</span>
                                            </div>
                                        </div>
                                        <div className="placing-bet mt-6">
                                            <a href="#0" className="place-a-bet placed bg-red-500 text-white text-base font-semibold rounded p-3 pt-0 pb-0  ml-3 mr-3">0.25</a>
                                            <a href="#0" className="place-a-bet border rounded ml-3 mr-3 text-slate-500 font-semibold ">1.42</a>
                                            <a href="#0" className="place-a-bet border rounded ml-3 mr-3 text-slate-500 font-semibold ">4.32</a>
                                        </div>
                                    </div>
                                    <div className={`schedue-timer timer flex items-center justify-between overflow-hidden relative ${styleVariable.graidentBg}`} data-date="30 Feb 2023 9:56:00 GMT+01:00">
                                        <div className="time-starting-text text-white text-base capitalize">
                                            <span className="txt">starting on</span>
                                            <img className="icon" src={vectorLine} alt="" />
                                        </div>
                                        <div className="all-timer-task flex items-center justify-between text-white overflow-hidden z-10 relative">
                                            <div className="single-time w-28 pt-3 pb-3">
                                                <span className="number day block text-3xl font-medium">-333</span>
                                                <span className="title block">Days</span>
                                            </div>
                                            <div className="single-time  w-28 pt-3 pb-3">
                                                <span className="number hour block text-3xl font-medium">17</span>
                                                <span className="title block">Hours</span>
                                            </div>
                                            <div className="single-time w-28 pt-3 pb-3">
                                                <span className="number minute block text-3xl font-medium">42</span>
                                                <span className="title block">Minutes</span>
                                            </div>
                                            <div className="single-time w-28 pt-3 pb-3">
                                                <span className="number second block text-3xl font-medium">59</span>
                                                <span className="title block">Seconds</span>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                    {/* end col  */}
                    <div className='col w-1/2 md:w-full'>
                        <div className='shadow  border-gray-800 mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-6">
                                <div className="single-team flex items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-10' />
                                    </div>
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-24" />
                                <div className="single-team flex items-center">
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Bodo Glimt FC</span>
                                    <div className="team-icon">
                                        <img src={team2} alt="" className='max-w-10' />
                                    </div>
                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}

                        <div className='shadow  border-gray-800 mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-6">
                                <div className="single-team flex items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-10' />
                                    </div>
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-24" />
                                <div className="single-team flex items-center">
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Bodo Glimt FC</span>
                                    <div className="team-icon">
                                        <img src={team2} alt="" className='max-w-10' />
                                    </div>
                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}

                        <div className='shadow  border-gray-800 mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-6">
                                <div className="single-team flex items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-10' />
                                    </div>
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-24" />
                                <div className="single-team flex items-center">
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Bodo Glimt FC</span>
                                    <div className="team-icon">
                                        <img src={team2} alt="" className='max-w-10' />
                                    </div>
                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}

                        <div className='shadow  border-gray-800 mb-6 overflow-hidden rounded bg-white'>
                            <div className="single-list-schedule flex items-center justify-between p-6">
                                <div className="single-team flex items-center">
                                    <div className="team-icon">
                                        <img src={team1} alt="" className='max-w-10' />
                                    </div>
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Dinamo Zagreb</span>
                                </div>
                                <img src={VS} alt="" className="versace-icon max-w-24" />
                                <div className="single-team flex items-center">
                                    <span className="team-name text-slate-500 text-base font-bold pr-4 pl-4">Bodo Glimt FC</span>
                                    <div className="team-icon">
                                        <img src={team2} alt="" className='max-w-10' />
                                    </div>
                                </div>
                            </div>
                            {/* end schedule  */}
                        </div>
                        {/*  end  */}
                    </div>
                    {/* emd col  */}
                </div>
                {/* end row  */}
            </div>
        </div>
    )
}

export default CommingMatch