import React from 'react';
import secondBannerImg from '../assets/images/banners/banner2.png';

import secondBannerGrassImg from '../assets/images/banners/banner2grass.png';
import secondBannerBottleImg from '../assets/images/banners/banner2bottle.png';

const SecondBanner = () => {


    return (

        <div className='banner second-banner'>
                <img src={secondBannerImg} className='second-banner__grass-earth__earth'/>
                <img src={secondBannerBottleImg}   className='second-banner__grass-earth__bottle'/>
                <img src={secondBannerGrassImg} className='second-banner__grass-earth__grass'/>
        </div>

    );
};

export default SecondBanner;