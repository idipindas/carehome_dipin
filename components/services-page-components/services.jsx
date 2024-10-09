import "./service.css";
import ServiceCard from "./serviceCard";
import { servicesData } from "../../constants/servicesData";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import serviceimg from "../../public/images/black2.jpg";
import community from '../../public/icons/service/community_support.png'
import church from '../../public/icons/service/church.png'
import gym from '../../public/icons/service/workout.png'
import shopping from '../../public/icons/service/shopping.png'
import travel from '../../public/icons/service/travel.png'
import beauty from '../../public/icons/service/beauty.png'
import family from '../../public/icons/service/family.png'
import threapy from '../../public/icons/service/threapy.png'

import aa from '../../public/icons/service/aa.png'
import counc from '../../public/icons/service/counc.png'
// import aa from '../../public/icons/service/aa.png'




const ServicesComponent = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${serviceimg})` }}
        className=" bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 "
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-xl  max-w-md font-[700]">
              At Rosemanor, we offer comprehensive and compassionate care to
              support your mental well-being. Our services include personalized
              care plans, 24/7 professional support, therapeutic activities,
              individual and group counseling, health and wellness programs, and
              family involvement. We are committed to providing a safe and
              comfortable environment where you can thrive.
            </p>
          </div>
          {/* <div className="flex gap-12 text-white max-md:text-center">
            <div className="flex max-md:items-center  flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">10k+</h2>
              <p className="text-lg">Happy clients</p>
            </div>
            {/* <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">5000+</h2>
              <p className="text-lg">Premium houses</p>
            </div> */}
          {/* </div> */}
        </motion.div>
      </div>
      
      {/* <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center"> */}
      <div className="flex w-full mb-8 gap-10 flex-col mt-6 items-center justify-center max-md:items-center">
  <h1 className="text-5xl font-bold title-font text-gray-800">COMMUNITY SUPPORT</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center justify-center max-md:items-center">
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={church} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Church Services</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={gym} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Fitness Programs</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={shopping} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Shopping Assistance</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={travel} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Outings and Trips</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={beauty} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Beauty and Personal Care</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={family} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Family Involvement</h2>
  </div>
</div>

<div className="flex w-full mb-8 gap-10 flex-col mt-12 items-center justify-center max-md:items-center">
  <h1 className="text-5xl font-bold title-font text-gray-800">THERAPY SESSIONS</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center justify-center max-md:items-center">
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={threapy} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Therapeutic Sessions</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={aa} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">AA Meetings</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <img src={counc} alt="" width={60} className="mb-4"/>
    <h2 className="text-4xl text-center text-red-500 font-semibold">Counseling Services</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">🧠</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Psychological Interventions</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">🏃‍♂️</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Physiotherapy</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">👐</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Massage Therapy</h2>
  </div>
</div>

<div className="flex w-full mb-8 gap-10 flex-col mt-12 items-center justify-center max-md:items-center">
  <h1 className="text-5xl font-bold title-font text-gray-800">PERSONALISED CARE PLAN</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center justify-center max-md:items-center">
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">📝</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Personalized Care Plans</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">🌍</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Cultural Needs</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">👁️</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Visual Assistance</h2>
  </div>
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105">
    <h2 className="text-6xl">🗣️</h2>
    <h2 className="text-4xl text-center text-red-500 font-semibold mt-4">Communication Needs</h2>
  </div>
</div>




      {/* </div> */}
    </>
  );
};

export default ServicesComponent;
{
  /* <div className="it-content text-xl  gap-2 justify-center items-center flex-col max-w-md text-center hidden overflow-hidden scale-y-0  transition-all  ">
    <p>
    We believe that technology design are revolutionizing brand
    experiences.
    </p>
    <a className="font-bold" href="">
    Read More {">"}
          </a> */
}
//   </div>
