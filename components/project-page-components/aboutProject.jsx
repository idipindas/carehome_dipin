import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWindows,
} from "react-icons/fa";
import "./aboutProject.css";
import Button from "../buttons-component/solidbutton";
import { Link, useParams } from "react-router-dom";
import { showCase } from "../../constants/showcase";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { scrollToTop } from "../../constants/scrollToTop";
import { useEffect } from "react";
const AboutProject = ({ heroImageSrc, attachment, phone }) => {
  const param = useParams();
  const project = showCase[param.id - 1];
  console.log("pr", project?.map_src);
  useEffect(() => {
    document.title = `${project.city} - Rosemanor `;
  }, [param]);
  return (
    <div className="overflow-hidden">
      <div
        className={`h-screen relative  ${heroImageSrc} ${attachment} bg-top bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${project.coverImage})`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/50">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-8xl max-lg:text-6xl max-md:text-5xl  font-semibold text-white"
          >
            {project.city}
          </motion.h1>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="flex mx-auto p-10 max-sm:px-5 gap-16 max-sm:gap-14 max-md:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start gap-5"
        >
          <h1 className="text-5xl font-bold">{project.city}</h1>
          <p className="text-xl">{project.shortDescription}</p>

          <a href={project?.care_qualityLink}> <u> Care Quality</u></a>
          <Link to={"/contact"} onClick={scrollToTop}>
            <Button
              content={"Contact Us"}
              fontSize={"text-xl max-md:text-xl"}
              padding={"px-4 py-2"}
            />
          </Link>
        </motion.div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="">
            <h2 className="text-xl mb-2 ">Phone</h2>
            <h3 className="text-xl opacity-80">{project?.phone}</h3>
          </div>
          {/* <div className="">
            <h2 className="text-xl mb-2 ">Date</h2>
            <h3 className="text-xl opacity-80">December 7, 2022</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">Services</h2>
            <h3 className="text-xl opacity-80">Art Direction, Website</h3>
          </div> */}
          <div className="">
            <h2 className="text-xl mb-2 ">Share on</h2>
            <div className="text-xl text-red-500 flex gap-3">
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaFacebookF />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaInstagram />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        
      </div>
      
      {/* description */}
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeRight}
        viewport={{ once: true, amount: 0.05 }}
        style={{ maxWidth: 1200 }}
        className="text-lg mx-auto p-10 max-sm:px-5 max-sm:pt-5  max-sm:mb-8 mb-20"
      >
        <div className="flex flex-col gap-1 mt-4">
          <div className="">
            {project?.id === 1 && (
              <div style={{width:'100%'}}>
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemanor%201%20Residential%20Care%20Homes,46%20Kempshott%20Rd,%20London%20SW16%205LQ,%20United%20Kingdom+(Rosemanor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
              </div>
            )}
            {project?.id === 2 && (
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemanor%201%20Residential%20Care%20Homes%2046%20Kempshott%20Rd,%20London%20SW16%205LQ,%20United%20Kingdom+(Rosemanor%201%20Residential%20Care%20Homes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
            )}
            {project?.id === 3 && (
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=rose%20manor%2018%20Bensham%20Manor%20Rd,%20Thornton%20Heath%20CR7%207AA,%20United%20Kingdom+(Rose%20Manor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
              </div>
            )}
            {project?.id === 4 && (
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemanor%202+(Rosemanor%202)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2 rounded-xl">
        {project.moreImages.map((e, i) => {
          return (
            <motion.div
              key={i}
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                className={"w-full object-cover"}
                style={{ height: 620 }}
                src={e}
                alt="e"
              />
            </motion.div>
          );
        })}
      </div>
      <div className=" flex">
        <Link
          onClick={scrollToTop}
          to={project.prevHref}
          id="prev-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <FaArrowLeft className="prev-arrow transition-all" />
          <p className="transition-all">Back</p>
        </Link>
        {/* <div className="w-1/5 py-7 border-l-2 border-r-2 flex justify-center items-center">
          <FaWindows />
        </div>
        <Link
          onClick={scrollToTop}
          to={project.nextHref}
          id="next-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <p className="transition-all">Next post</p>
          <FaArrowRight className="next-arrow transition-all " />
        </Link> */}
      </div>
    </div>
  );
};

export default AboutProject;
