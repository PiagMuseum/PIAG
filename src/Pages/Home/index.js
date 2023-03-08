import React from "react";
import HomeSection from "../../Components/HomeSection";
import MissionSection from "../../Components/MissionSection";
import ActivitiesSection from "../../Components/ActivitiesSection";
import EarthSection from "../../Components/EarthSection";
import ExhibSection from "../../Components/ExhibSection";
import UniqueSection from "../../Components/UniqueSection";
import EndSection from "../../Components/EndSection";
import PaintSection from "../../Components/PaintSection";
import WorkSection from "../../Components/WorkSection";
import ContactForm from "../../Components/Form";


const Home = () => {
  return (
    <>
      <section>
        <HomeSection />
        <MissionSection />
        <ActivitiesSection />
        <EarthSection />
        <PaintSection />
        <ExhibSection />
        <WorkSection />
        <UniqueSection />
        <EndSection /> 
        <ContactForm />
        </section>
    </>
  );
};   
      
 export default Home;
