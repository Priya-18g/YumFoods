import React, { useState } from "react";
import Header from "../../Components/Common/Header/Header";
import TabOptions from "../../Components/Common/TabOptions/TabOptions";
import Footer from "../../Components/Common/Footer/Footer";
import Delivery from "../../Components/Delivery/Delivery";
import DiningOut from "../../Components/DiningOut/DiningOut";
import NightLife from "../../Components/NightLife/NightLife";

const HomePage = () =>{
    let [activeTab ,setActiveTab] = useState("Delivery");
    return(
        <>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>

            {getCorrectScreen(activeTab)}

            <Footer />
        </>
    );
}

const getCorrectScreen = (tab)=>{
    switch(tab){
        case "Delivery" :
            return<Delivery />
        case "Dining Out" :
            return< DiningOut />
        case "NightLife":
            return <NightLife/>
        default:
            return<Delivery/>
    }
};

export default HomePage;