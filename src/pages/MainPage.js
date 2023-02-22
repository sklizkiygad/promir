import React from 'react';
import {Fullpage, FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import FirstBanner from "../components/FirstBanner";
import SecondBanner from "../components/SecondBanner";
import ThirdBanner from "../components/ThirdBanner";
import FourthBanner from "../components/FourthBanner";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";





const MainPage = () => {



    return (
        <div>
            <MyHeader/>
        <Fullpage>
            <FullpageNavigation/>

            <FullPageSections>

                <FullpageSection ><FirstBanner/></FullpageSection>
                <FullpageSection ><SecondBanner/></FullpageSection>
                <FullpageSection ><ThirdBanner/></FullpageSection>
                <FullpageSection ><FourthBanner/></FullpageSection>

            </FullPageSections>

        </Fullpage>
            <MyFooter/>
        </div>
    );
};

export default MainPage;