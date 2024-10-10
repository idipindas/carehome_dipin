import { useEffect } from "react";
import Section from "../components/showcase1-components/section";
import { showCase } from "../constants/showcase";
import { motion } from "framer-motion";

import gal1 from "../public/images/gallery/g1.jpg";
import gal2 from "../public/images/gallery/g2.jpg";

import gal3 from "../public/images/gallery/g3.jpg";

import gal4 from "../public/images/gallery/g4.jpg";

import gal5 from "../public/images/gallery/g5.jpg";

import gal6 from "../public/images/gallery/g6.jpg";

import gal7 from "../public/images/gallery/g7.jpg";

import gal8 from "../public/images/gallery/g8.jpg";
import img1 from '../public/branches/rosemanor/img1.jpeg'
import img2 from '../public/branches/rosemanor/img2.jpeg'
import img3 from '../public/branches/rosemanor/img3.jpeg'
import img4 from '../public/branches/rosemanor/img4.jpeg'
import img5 from '../public/branches/rosemanor/img5.jpeg'
import img6 from '../public/branches/rosemanor1/img1.jpeg'
import img7 from '../public/branches/rosemanor1/img2.jpeg'
import img8 from '../public/branches/rosemanor1/img3.jpeg'
import img9 from '../public/branches/rosemanor1/img4.jpeg'
import img10 from '../public/branches/rosemanor1/img5.jpeg'
import img11 from '../public/branches/rosemanor2/img1.jpeg'

import img12 from '../public/branches/rosemanor2/img2.jpeg'

import img13 from '../public/branches/rosemanor2/img3.jpeg'



// import gal9 from "../public/images/gallery/DSC06584.jpg";
// import gal10 from "../public/images/gallery/DSC06592.jpg";
import { animationVariants } from "../constants/animationVariants";
import ExculusivePropertyCard from "../components/home-page-components/exculusivePropertyCard";
import galImg from '../public/branches/rosemanor1/img3.jpeg'

const showcase1 = () => {
  useEffect(() => {
    document.title = "Showcase 1 - Rosemanor";
  }, []);
  return (
    <div className="overflow-hidden" >
      <div className="bg-[url(galImg)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white"
              style={{ backgroundImage: `url(${galImg})` }}
>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-sm:text-5xl text-center font-semibold"
        >
          Gallery
        </motion.h1>
      </div>
      {/* {showCase.map((e, i) => {
        return (
          <Section
            key={i}
            url={e.coverImage}
            // href={`/projects/${e.id}`}
            title={e.city}
            desc={e.shortDescription}
            attachment={e.id % 2 !== 0 ? "bg-fixed" : ""}
          />
        );
      })} */}

      <div style={{ maxWidth: 1200 }} className="p-10 max-md:px-5 mx-auto">
        <motion.h2
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="text-5xl max-md:text-4xl font-semibold text-center"
        >
          {/* Gallery */}
        </motion.h2>
        <div className="flex flex-col gap-5 mt-10 max-sm:mt-8">
          <div className=" flex gap-5 max-lg:flex-col">
            <div className="w-2/4 max-lg:w-full">
              <ExculusivePropertyCard
                imgSrc={gal1}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[0].name}
                // pricing={rentHouses[0].price}
                // type={rentHouses[0].type}
                // href={rentHouses[0].id}
              />
            </div>
            <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
              <ExculusivePropertyCard
                imgSrc={gal2}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[1].name}
                // pricing={rentHouses[1].price}
                // // type={rentHouses[1].type}
                // href={rentHouses[1].id}
              />
              <ExculusivePropertyCard
                imgSrc={gal3}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[2].name}
                // pricing={rentHouses[2].price}
                // // type={rentHouses[2].type}
                // href={rentHouses[2].id}
              />
            </div>
          </div>
          <div className=" flex gap-5 max-lg:flex-col">
            <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
              <ExculusivePropertyCard
                imgSrc={gal4}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[3].name}
                // pricing={rentHouses[3].price}
                // // type={rentHouses[3].type}
                // href={rentHouses[3].id}
              />
              <ExculusivePropertyCard
                imgSrc={gal5}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[4].name}
                // pricing={rentHouses[4].price}
                // // type={rentHouses[4].type}
                // href={rentHouses[4].id}
              />
            </div>
            <div className="w-2/4 max-lg:w-full">
              <ExculusivePropertyCard
                imgSrc={gal6}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[5].name}
                // pricing={rentHouses[5].price}
                // // type={rentHouses[5].type}
                // href={rentHouses[5].id}
              />
            </div>
          </div>
          
        </div>

        <div className="flex flex-col gap-5 mt-10 max-sm:mt-8">
          <div className=" flex gap-5 max-lg:flex-col">
            <div className="w-2/4 max-lg:w-full">
              <ExculusivePropertyCard
                imgSrc={img1}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[0].name}
                // pricing={rentHouses[0].price}
                // type={rentHouses[0].type}
                // href={rentHouses[0].id}
              />
            </div>
            <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
              <ExculusivePropertyCard
                imgSrc={img2}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[1].name}
                // pricing={rentHouses[1].price}
                // // type={rentHouses[1].type}
                // href={rentHouses[1].id}
              />
              <ExculusivePropertyCard
                imgSrc={img3}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[2].name}
                // pricing={rentHouses[2].price}
                // // type={rentHouses[2].type}
                // href={rentHouses[2].id}
              />
            </div>
          </div>
          <div className=" flex gap-5 max-lg:flex-col">
            <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
              <ExculusivePropertyCard
                imgSrc={img4}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[3].name}
                // pricing={rentHouses[3].price}
                // // type={rentHouses[3].type}
                // href={rentHouses[3].id}
              />
              <ExculusivePropertyCard
                imgSrc={img6}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[4].name}
                // pricing={rentHouses[4].price}
                // // type={rentHouses[4].type}
                // href={rentHouses[4].id}
              />
            </div>
            <div className="w-2/4 max-lg:w-full">
              <ExculusivePropertyCard
                imgSrc={img7}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[5].name}
                // pricing={rentHouses[5].price}
                // // type={rentHouses[5].type}
                // href={rentHouses[5].id}
              />
            </div>
          </div>
          
        </div>
        <div className="flex flex-col gap-5 mt-10 max-sm:mt-8">
          <div className=" flex gap-5 max-lg:flex-col">
            <div className="w-2/4 max-lg:w-full">
              <ExculusivePropertyCard
                imgSrc={img8}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[0].name}
                // pricing={rentHouses[0].price}
                // type={rentHouses[0].type}
                // href={rentHouses[0].id}
              />
            </div>
            <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
              <ExculusivePropertyCard
                imgSrc={img9}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[1].name}
                // pricing={rentHouses[1].price}
                // // type={rentHouses[1].type}
                // href={rentHouses[1].id}
              />
              <ExculusivePropertyCard
                imgSrc={img10}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[2].name}
                // pricing={rentHouses[2].price}
                // // type={rentHouses[2].type}
                // href={rentHouses[2].id}
              />
            </div>
          </div>
          <div className=" flex gap-5 max-lg:flex-col">
            <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
              <ExculusivePropertyCard
                imgSrc={img11}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[3].name}
                // pricing={rentHouses[3].price}
                // // type={rentHouses[3].type}
                // href={rentHouses[3].id}
              />
              <ExculusivePropertyCard
                imgSrc={img12}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[4].name}
                // pricing={rentHouses[4].price}
                // // type={rentHouses[4].type}
                // href={rentHouses[4].id}
              />
            </div>
            <div className="w-2/4 max-lg:w-full">
              <ExculusivePropertyCard
                imgSrc={img13}
                // titlePart1={"House in "}
                // titlePart2={rentHouses[5].name}
                // pricing={rentHouses[5].price}
                // // type={rentHouses[5].type}
                // href={rentHouses[5].id}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default showcase1;
