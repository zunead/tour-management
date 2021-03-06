import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';
import { HeaderContainer, HeaderLeftContent, HeaderRightContent, HeaderRightVideo, HeaderSpan, HeaderTitle, HeaderTitleSpan, Location, LocationContainer } from '../../Style/Style';
import Countdown from './Countdown';
import videos from '../../../img/video.mp4';
import { FaMapMarkedAlt } from 'react-icons/fa';

const HeaderSection = () => {
    return (
        <HeaderContainer>
            <article>
                <HeaderLeftContent>
                    <HeaderSpan >TOUR</HeaderSpan>

                    <HeaderTitle>
                        BIGGEST 
                        <wbr/>
                        <HeaderTitleSpan className='headingSpan'>Accounting </HeaderTitleSpan>
                        <HeaderTitleSpan className='headingSpan justify-between'>Department Tour</HeaderTitleSpan>
                        <HeaderTitleSpan >2021</HeaderTitleSpan>
                    </HeaderTitle>

                    <LocationContainer>
                        <Location> 
                            <FaMapMarkedAlt size={30} style={{color: '#f87171', paddingRight: '3px', marginTop:'-6px'}}/>
                            <p>Bisnakandi, Sylhet.</p>
                        </Location>
                        <Location>
                            <FcCalendar size={30} style={{paddingRight: '5px'}}/>
                            <date>01 January 2022</date>
                        </Location>
                    </LocationContainer>

                    <Countdown/>
                    <button className='primary_BTN '>Buy ticket</button>

                </HeaderLeftContent>
            </article>
            <article>
                <HeaderRightContent>
                    <HeaderRightVideo controls >
                        <source src={videos} type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
                    </HeaderRightVideo>
                </HeaderRightContent>
            </article>
        </HeaderContainer>
    );
};

export default HeaderSection;