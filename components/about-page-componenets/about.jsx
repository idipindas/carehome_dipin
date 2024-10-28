import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import Showcase2Card from "../showcase2-components/showcase2Card";
import "./about.css";
import aboutImg1 from "../../public/aboutus.jpeg";
import { showCase } from "../../constants/showcase";
import owner from "../../public/branches/owners/avathar.webp";
import owner2 from '../../public/images/profileImg.jpg'
const AboutPage = () => {
  console.log("an", aboutImg1);
  return (
    <>
      <div
        className="bg-[url(aboutImg1)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24"
        style={{ backgroundImage: `url(${aboutImg1})` }}
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-balck flex flex-col gap-8 max-md:items-center max-md:text-center">
            {/* <h1 className="text-5xl font-bold">Who We Are</h1>
            <p className="text-xl max-w-md">
              " We provide a compassionate environment where minds are nurtured,
              and hearts are healed."
            </p> */}
            <h1 className="text-5xl font-bold">Our commitment</h1>
            <p className="text-xl max-w-md">
              " We are dedicated to making a positive impact in the lives of our
              residents, providing them with the care and support they need to
              lead fulfilling lives. By focusing on compassion, excellence,
              innovation, safety, and community, we strive to be the preferred
              care home, known for our unwavering commitment to the happiness
              and well-being of those we serve."
            </p>
          </div>
          {/* <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">19K+</h2>
              <p className="text-lg">Premium Services</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">5000+</h2>
              <p className="text-lg">Premium Services</p>
            </div>
          </div> */}
        </motion.div>
      </div>

      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-center max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">History</h1>
              {/* <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Services"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link> */}
            </div>
            {/* <div className="w-full">
              <img
                src="/about-page-images/what-we-do.jpg"
                className="w-full h-full"
                alt=""
              />
            </div> */}
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md: grid grid-cols-1 grid-rows-1">
            <p className="text-2xl mt-2">
              Rosemanor Homes was founded in 1987 by Ms. Parvadee Shumoogam, a
              visionary and passionate advocate for high-quality residential
              care. Driven by her commitment to creating a nurturing and
              supportive environment for adults needing care, Ms. Shumoogam
              opened the first Rosemanor. Her goal was to go beyond the
              traditional care home model and establish a place where residents
              would feel truly at home, receiving personalized care in a warm
              and welcoming setting.<br></br>
              <br /> The reputation of Rosemanor Homes for providing
              compassionate and exceptional care quickly grew. By 2001-2003, the
              demand for Rosemanor’s unique approach to care led to the
              expansion of the organization. Ms. Shumoogam oversaw the
              establishment of two additional homes, each meticulously designed
              to replicate the comforting and familial atmosphere of the
              original Rosemanor Home. These new facilities allowed Rosemanor to
              offer its specialized services, including tailored care plans for
              adults with diverse needs, to a larger community.Ms. Shumoogam's
              dedication was recognized with numerous industry awards,
              solidifying Rosemanor's reputation as a top-tier care provider.
              <br />
              <br />
              From 2015 onwards, Rosemanor Homes placed a strong emphasis on
              community engagement and outreach. Programs were developed to
              foster connections between residents and the wider community,
              enhancing the social well-being of those in care. Volunteer
              initiatives, family involvement programs, and intergenerational
              activities became integral parts of the Rosemanor experience.
              These efforts helped create a vibrant, inclusive community where
              residents could build meaningful relationships and stay connected
              with the world around them.
              {/* <h2 className="text-4xl text-red-500 font-semibold">
                37 Years of Compassion and Commitment
              </h2>
              <br /> <br />
              Our journey began 37 years ago, fueled by love and a deep sense of
              purpose. As a family-run business, we’ve dedicated ourselves to
              providing exceptional care for vulnerable individuals. Their
              well-being is at the heart of everything we do.
              <br /> <br />
              <h2 className="text-4xl text-red-500 font-semibold">
                A Vision for the Future
              </h2>{" "}
              <br /> <br />
              My vision is simple yet profound: I want our legacy to continue.
              This service, built with unwavering love, has been tailored for
              those recovering from enduring mental illness. Our focus?
              Enablement and wellness, empowering each individual to reclaim
              their independence within the community.
              <br />
              <br />
              <h2 className="text-4xl text-red-500 font-semibold">
                From Nursing to Entrepreneurship
              </h2>
              <br />
              <br />
              My path in care began with training in a children’s hospital,
              where I learned about learning disabilities. General nursing and
              mental health followed, shaping my understanding of holistic care.
              In 1987, I made a pivotal decision: to create our own home—a place
              where dreams could flourish.
              <br />
              <br />
              <h2 className="text-4xl text-red-500 font-semibold">
                Expanding Horizons
              </h2>
              <br />
              <br />
              Four years later, we acquired our second home, catering to the
              elderly. But our journey didn’t stop there. From 2001 to 2003, we
              welcomed two more houses, specializing in services for women. In
              2004, another house joined our family, focusing on mental health
              support for men.
              <br />
              <br />
              <h2 className="text-4xl text-red-500 font-semibold">
                Balancing Professionalism and Heart
              </h2>
              <br />
              <br />
              Today, our organization comprises three companies, each with its
              own directors. As we grow, I’m committed to maintaining
              professionalism while never losing sight of compassion. Our
              business isn’t just about numbers; it’s about changing lives.
              <br />
              <br />
              Thank you for being part of this incredible journey. Together,
              we’ll continue making a difference—one heart at a time.
              <br />
              <br />
              With gratitude,
              <br />
              <br />
              <h4 className="text-2xl text-black-500 font-bold">
                Mrs. Parvadee Shumoogam
              </h4> */}
            </p>
            {/* <div>
              <h2 className="text-4xl text-red-500 font-semibold">
                Date of Start
              </h2>
              <p className="text-2xl mt-2">
                The company started on 10 December 2022{" "}
              </p>
            </div>
            <div>
              <h2 className="text-4xl text-red-500 font-semibold">
                How Many Homes
              </h2>
              <p className="text-2xl mt-2">
                We offer a variety of therapy sessions, including
                cognitive-behavioral therapy, group therapy, and art therapy,
                aimed at nurturing mental well-being.
              </p>
            </div>
            <div>
              <h2 className="text-4xl text-red-500 font-semibold">
                Service Specialize
              </h2>

              <p className="text-2xl mt-2">
                Our team creates individualized care plans to meet the unique
                needs of each resident, ensuring tailored support and
                comprehensive care.
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10   max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-3/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
          >
            {/* <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1> */}
            <p className="text-4xl font-bold mt-5">
              <span className="text-5xl font-bold title-font w-max">“</span> Our
              legacy is woven with threads of love, tailored for those
              recovering from enduring mental illness. As we empower individuals
              toward full independence, let compassion be our compass.
              <span className="text-5xl font-bold title-font w-max">”</span>
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-2/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
          >
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.2 }}
              style={{ height: 250 }}
              className="relative w-full mt-6"
            >
              <img
                className="w-full h-full rounded-lg object-cover mb-2"
                src={owner}
                alt="img"
              />
              <div className=" flex justify-center">
                <h2 className="title-font text-xl font-semibold mb-1 mr-5">
                  Mrs. Parvadee Shumoogam
                </h2>
                <p className="text-xl">CEO</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center  max-md:text-center gap-15 max-md:gap-12 p-10   max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/1 max-md:w-full flex flex-col mt-12 text-black items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl max-md:text-4xl  text-red-500 font-semibold">
              TIME TO MEET THE TEAM
            </h1>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/1 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
          >
            <div
              style={{ maxWidth: 1200 }}
              className="mx-auto flex max-md:flex-col justify-center items-start max-md:text-center gap-6 max-md:gap-12 p-10    "
            >
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-2/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
              >
                {/* <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1> */}

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  variants={animationVariants.fadeUp}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ height: 180 }}
                  className="relative w-full mt-2"
                >
                  <img
                    className="w-full h-full rounded-lg object-cover mb-2"
                    src={owner}
                    alt="img"
                  />
                  {/* <div className=" flex justify-center">
                <h2 className="title-font text-xl font-semibold mb-1 mr-5">
                  Mrs. Parvadee Shumoogam
                </h2>
                <p className="text-xl">CEO</p>
              </div> */}
                </motion.div>
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-3/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
              >
                <div className="w-full">
                  <h1 className=" title-font text-xl font-semibold">
                    Mr Krishna Shumoogam
                  </h1>
                  <h1 className=" title-font text-xl font-semibold">CEO</h1>
                  <p>
                    At Rosemanor, mental health care is a cornerstone of our
                    mission to provide comprehensive and exemplary support. I am
                    immensely proud of the depth and breadth of our mental
                    health programs, which are meticulously crafted to meet the
                    complex psychological and emotional needs of our residents.
                    Our approach is distinguished by the integration of advanced
                    stress management techniques, evidence-based therapeutic
                    interventions, and personalized counseling, all tailored to
                    foster emotional stability and enhance overall well-being.
                    Leading Rosemanor, I am consistently impressed by our team’s
                    unwavering dedication and professional expertise. Their
                    commitment not only meets but surpasses the highest
                    standards in mental health care, ensuring that every
                    resident can thrive in an environment designed for their
                    success and fulfillment.
                  </p>

                  {/* <h1>Mrs. Parvadee Shumoogam</h1> */}
                </div>
              </motion.div>
            </div>

            <hr />

            {/*  next */}

            <div
              style={{ maxWidth: 1200 }}
              className="mx-auto flex max-md:flex-col justify-center items-start max-md:text-center gap-6 max-md:gap-12 p-10    "
            >
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-2/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
              >
                {/* <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1> */}

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  variants={animationVariants.fadeUp}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ height: 200 }}
                  className="relative w-full mt-2"
                >
                  <img
                    className="w-full h-full rounded-lg object-cover mb-2"
                    src={'/branches/owners/selvan2.jpg'}
                    alt="img"
                  />
                  {/* <div className=" flex justify-center">
                <h2 className="title-font text-xl font-semibold mb-1 mr-5">
                  Mrs. Parvadee Shumoogam
                </h2>
                <p className="text-xl">CEO</p>
              </div> */}
                </motion.div>
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-3/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
              >
                <div className="w-full">
                  <h1 className=" title-font text-xl font-semibold">
                    Mr selven shumoogam
                  </h1>
                  <h1 className=" title-font text-xl font-semibold">CCO</h1>
                  <p>
                    Reflecting on the past year at Rosemanor Homes, I am deeply
                    impressed by the unwavering commitment and professionalism
                    demonstrated by our dedicated team. Their relentless efforts
                    have been pivotal in advancing our mission to provide
                    exceptional mental health care. I am immensely proud of the
                    profound impact they have had on supporting our residents in
                    leading fulfilling and enriched lives. Their dedication is
                    the cornerstone of our success and continues to inspire
                    excellence in everything we do.
                  </p>

                  {/* <h1>Mrs. Parvadee Shumoogam</h1> */}
                </div>
              </motion.div>
            </div>
            <div
              style={{ maxWidth: 1200 }}
              className="mx-auto flex max-md:flex-col justify-center items-start max-md:text-center gap-6 max-md:gap-12 p-10    "
            >
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-2/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
              >
                {/* <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1> */}

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  variants={animationVariants.fadeUp}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ height: 200 }}
                  className="relative w-full mt-2"
                >
                  <img
                    className="w-full h-full rounded-lg object-cover mb-2"
                    src={'/branches/owners/vadee.jpg'}
                    alt="img"
                  />
                  {/* <div className=" flex justify-center">
                <h2 className="title-font text-xl font-semibold mb-1 mr-5">
                  Mrs. Parvadee Shumoogam
                </h2>
                <p className="text-xl">CEO</p>
              </div> */}
                </motion.div>
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-3/5 max-md:w-full flex flex-col text-black items-start justify-between max-md:items-center"
              >
                <div className="w-full">
                  <h1 className=" title-font text-xl font-semibold">
                    Ms Vadee Shumoogam{" "}
                  </h1>
                  <h1 className=" title-font text-xl font-semibold">
                    Founder and registered manager
                  </h1>
                  <p>
                    As the Registered Manager and Founder of Rosemanor Homes, I
                    take immense pride in leading a team that is passionately
                    committed to exceptional mental health care. For us, mental
                    health care is not just a profession—it’s a driving passion
                    that motivates us every day.
                    <br /> We are dedicated to creating a supportive and
                    empowering environment, combining professional expertise
                    with genuine compassion. The positive feedback from our
                    residents and their families confirms the effectiveness of
                    our approach and inspires us to continuously strive for
                    excellence.Together, we are dedicated to delivering
                    high-quality care and making a meaningful difference in the
                    lives of our residents.
                  </p>

                  {/* <h1>Mrs. Parvadee Shumoogam</h1> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* what we offer section start */}
      {/* 
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-1 grid-cols-4 max-lg:grid-rows-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-4 p-10 max-md:px-5 "
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ height: 280 }}
          className="relative w-full mb-5"
        >
          <img
            className="w-full h-full rounded-lg object-cover mb-2"
            src={owner}
            alt="img"
          />
          <div className=" flex justify-center">
            <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2>
            <p className="text-xl">CEO</p>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ height: 280 }}
          className="relative w-full mb-5"
        >
          <img
            className="w-full h-full rounded-lg object-cover mb-2"
            src={owner}
            alt="img"
          />
          <div className=" flex justify-center">
            <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2>
            <p className="text-xl">CO</p>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ height: 280 }}
          className="relative w-full mb-5"
        >
          <img
            className="w-full h-full rounded-lg object-cover mb-2"
            src={owner}
            alt="img"
          />
          <div className=" flex justify-center">
            <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2>
            <p className="text-xl">Operation Head</p>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ height: 280 }}
          className="relative w-full mb-5"
        >
          <img
            className="w-full h-full rounded-xl object-cover mb-2"
            src={owner}
            alt="img"
          />
          <div className=" flex justify-center">
            <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2>
            <p className="text-xl">Manager</p>
          </div>
        </motion.div>
      </div> */}

      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1>
            <p className="text-xl mt-5">
              At Mental Wellness Heaven, we prioritize a holistic approach to
              mental health recovery. Our expert team is committed to creating a
              nurturing environment where individuals can heal and thrive. We
              offer personalized care plans, therapy sessions, and community
              support to help every resident achieve their best mental health.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">Our Clients</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                1000+
              </h1>
              <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  // backgroundImage: "url(/200+.png)",
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-center max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">
                Today and Beyond
              </h1>
            </div>
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md: grid grid-cols-1 grid-rows-1">
            <p className="text-2xl mt-2">
              Today, Rosemanor Homes operates three care homes across the
              region, each upholding the founding principles of compassion,
              excellence, and community. The dedicated staff at Rosemanor
              ensures that every resident feels valued, respected, and at home.
              The homes offer a range of services tailored to meet the unique
              needs of each resident, including specialized care for adults with
              various conditions and challenges. <br />
              <br />
              As we look to the future, Rosemanor Homes continues to innovate
              and adapt to meet the evolving needs of the adult care community.
              With plans for further expansion and the integration of
              cutting-edge care practices, we remain committed to setting the
              standard for residential care and enriching the lives of our
              residents.
            </p>
            <h2 className="text-4xl text-red-500 font-semibold">
              Exceptional Personalised Care
            </h2>
            <p className="text-2xl mt-1">
              At Rosemanor, we are dedicated to redefining adult care through
              highly personalized attention. Our custom care plans are designed
              to address each individual's specific needs and preferences,
              ensuring a tailored approach to their well-being. We emphasize
              delivering outstanding service in a compassionate and respectful
              environment, striving to enhance the quality of life for every
              resident with dignity and care.
            </p>
            <br /> <br />
            <h2 className="text-4xl text-red-500 font-semibold">
              DEMENTIA CARE
            </h2>
            <p className="text-2xl mt-1">
              our team of highly trained and experienced professionals excels in
              dementia care, employing evidence-based approaches and advanced
              methodologies to address the complex needs associated with
              dementia. Our expertise in cognitive support and behavioral
              management allows us to deliver individualized care plans that
              effectively enhance residents' quality of life.
              <br />
              We are committed to a person-centered care model, meticulously
              assessing and respecting each individual’s cognitive abilities and
              personal preferences. At Rosemanor, we cultivate a secure,
              therapeutic environment that supports mental and emotional
              well-being, ensuring that each day is meaningful and enriching
              through targeted interventions and compassionate care strategies.
            </p>
            <br /> <br />
            <h2 className="text-4xl text-red-500 font-semibold">
              RESIDENTIAL CARE
            </h2>
            <p className="text-2xl mt-1">
              At Rosemanor, residents benefit from spacious, elegantly designed
              rooms that offer a blend of comfort and privacy. Our thoughtfully
              arranged lounges provide inviting spaces for relaxation and social
              interaction, fostering a vibrant sense of community.
              <br />
              Our dedicated activity room serves as a dynamic center for a
              diverse array of daily programs. From engaging crafts to
              stimulating games, it is designed to cater to varied interests,
              enhancing residents' engagement and enriching their daily
              experiences.
            </p>
            <br /> <br />
            <h2 className="text-4xl text-red-500 font-semibold">
              MENTAL HEALTH CARE{" "}
            </h2>
            <p className="text-2xl mt-1">
              To enhance mental health, we provide a variety of programs
              tailored to individual needs. Our wellness center features
              resources for stress management, including guided meditation,
              fitness classes, and personalized counseling. These initiatives
              are designed to support emotional balance, promote resilience, and
              encourage a positive, fulfilling daily experience.
            </p>
            <br /> <br />
          </div>
        </motion.div>
      </div>

      {/* appreciation section start */}
      {/* <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              Join our caring Community.
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              The Journey to Healing Starts Here
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-1 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  1000+
                </h2>
                <p className="text-xl">
                  Happy Clients
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  35+ 
                </h2>
                <p className="text-xl">
                  Years of successful experience in caring With CQC
                </p>
              </div>
            
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"Get In Touch"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="https://files.cdn-files-a.com/uploads/9435802/2000_668d1175c2912.jpg"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>

              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
     
      </div> */}
      {/* appreciation section end */}
      {/* review section start */}

      {/* 
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://files.cdn-files-a.com/uploads/9435802/400_668d117bb8ca7.jpg"
                }
                title={"Jane Smith"}
                from={"Resident"}
              />
            </motion.div>

            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://files.cdn-files-a.com/uploads/9435802/400_668d117bb8ca7.jpg"
                }
                title={"Jane Smith"}
                from={"Resident"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://files.cdn-files-a.com/uploads/9435802/400_668d117bb8ca7.jpg"
                }
                title={"Jane Smith"}
                from={"Resident"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://static1.s123-cdn-static-a.com/ready_uploads/media/2692690/400_5e0be51c56b84.jpg"
                }
                title={"Emily Johnson"}
                from={"Resident"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://static1.s123-cdn-static-a.com/ready_uploads/media/2692690/400_5e0be51c56b84.jpg"
                }
                title={"Emily Johnson"}
                from={"Resident"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://files.cdn-files-a.com/uploads/9435802/400_668d117ad72a0.jpg"
                }
                title={"John Doe"}
                from={"Resident"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              Why do people love Rosmanor
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div>



 */}

      {/* review section end */}
      {/* partner brand section start */}
      <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          {/* <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`/partner-brands/${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div> */}
        </div>
      </div>
      {/* partner brand section end */}
    </>
  );
};

export default AboutPage;
