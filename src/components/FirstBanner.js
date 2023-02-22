import React from 'react';
import firstBannerBack from "../assets/images/banners/firstbanner.png";

const FirstBanner = () => {

    return (
        <div className="banner first-banner">

           <div className='first-banner__background__block'/>


            <h1 className="first-banner__title">PROMIR</h1>
            <div  className="first-banner__blur">

                <h2>Вода - как источник твоего внутреннего состояния, спокойствия и гармонии.</h2>
                <button>Начать диагностику твоего состояния</button>
            </div>
            <img className="first-banner__background" src={firstBannerBack}/>



        </div>
    );
};

export default FirstBanner;