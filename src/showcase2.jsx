import Showcase2Card from "../components/showcase2-components/showcase2Card";
import { showCase } from "../constants/showcase";
import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";
import { useEffect } from "react";
import { animationVariants } from "../constants/animationVariants";
import { motion } from "framer-motion";
import img1 from "../public/images/gal1.jpg";
import news1 from '../public/images/news1.png'
import news2 from '../public/images/news2.png'

const ShowCase2 = () => {
  useEffect(() => {
    document.title = "Showcase 2 - Rosemanor";
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-[url(/showcase2-page-images/showcase2-hero-bg.jpg)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white">
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-sm:text-5xl text-center font-semibold"
        >
          News
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 p-10 max-md:px-5"
      >
        <div className=" flex-col grid grid-cols-1 my-3 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          {/* <div className="flex justify-end">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}

          <div>
            <h1 className="text-4xl  text-red-500 font-bold mb-4">
              Care Home Engagement session
            </h1>
            <p>
              Please attend the care home engagement session on July 10 at 2pm,
              where we will be discussing the latest updates relating to care
              homes. <br />
              {/* <br /> */}
              <a
                className="text-blue-500 "
                href="https://teams.microsoft.com/v2/?meetingjoin=true#/l/meetup-join/19:meeting_NmIzYTU5M2UtMzE0Yy00MTA4LWFiYjUtMDAyNTc3MGQ2YjM2@thread.v2/0?context=%7b%22Tid%22%3a%22c4f22780-485f-4507-af4a-60a971d6f7fe%22%2c%22Oid%22%3a%220f8a19ac-8f46-404c-beca-aeaebc8ffcd2%22%7d&anon=true&deeplinkId=4d13fb31-54fc-4b2b-b7fb-bdafa31a8bf0"
              >
                <u>Join the online care home engagement meeting</u>
              </a>{" "}
              <br />
              <br />
              <span className=" font-bold">
                Angela Poland Head of Digital Programmes, will be attending
                September’s forum (11 Sept) to do a presentation.
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-end">
            <div>
              <h1 className="  text-red-500 text-4xl font-bold mb-4">
                Thank you British Homes
              </h1>
              <p>
                Abig thank you to Catherine at British Homes for organising the
                last in-person engagement session. The tour was informative, as
                was the history of British homes. Everyone in the session
                engaged in conversations, and several key topics were covered.{" "}
                <br />
                Finally, thank you for the wonderful buffet of food that you
                arranged for us, which included a great assortment of diverse
                full flavored choices
              </p>
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />

        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-end">
            <div>
              <h1 className="text-4xl font-bold mb-4  text-red-500 ">
                Skills for care{" "}
              </h1>
              <p>
                We are delighted to invite you to the next Deputy Manager
                network for London and South East. The upcoming meeting of the
                Skills for Care London & South East Deputy Manager Network will
                take place via Zoom on Wednesday 10 July 2024 (10:00 – 12:00).
                Place(s) can be booked on{" "}
                <a href="https://bit.ly/3yX0oJS" className="text-blue-500">
                  https://bit.ly/3yX0oJS
                </a>{" "}
                <br />
                <span className="font-bold">
                  London and South East Deputy Manager Network
                </span>{" "}
                <br />
                <span className=" font-bold">
                  Next meeting – Wednesday 10 July 2024, 10:00 - 12:00 on Zoom
                </span>{" "}
                <br />
                Skills for Care's local deputy manager networks, provide a
                supportive and informative environment for deputies, team
                leaders, and senior care staff to discuss challenges, issues,
                and successes with others working in similar roles. These
                networks are open to people from all care settings and service
                types, and they can help you build a valuable support system and
                expand your professional network.
              </p>
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />
        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-end">
            <div>
              <h1 className="text-4xl text-red-500 font-bold mb-4">
                The Workforce Development Fund 2024-25 is now open{" "}
              </h1>
              <p>
                The Workforce Development Fund (WDF) is now open to
                organisations that provide adult social care services and
                directly employ care staff within England. The fund is being
                scaled down in 2024-25 and it will only be possible to claim WDF
                for qualifications and apprenticeships which started on or
                before 31 March 2024 and which will complete by 31 March 2025.
                This year, WDF will be distributed exclusively by Skills for
                Care.
                <br />{" "}
                <a
                  href="https://www.skillsforcare.org.uk/Funding/Workforce-Development-Fund/Workforce-Development-Fund.aspx?medium=email&source=GovDelivery#msdynttrid=wss7WYLw3F6CieWsfv_a7hKQgrOtwYuOIIPNwoD2y-s"
                  className="text-blue-500"
                >
                  {" "}
                  ⇨ Find out more about WDF
                </a>
              </p>
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />
        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-end">
            <div>
              <h1 className="text-4xl  text-red-500 font-bold mb-4">
                Workforce strategy for adult social care launch{" "}
              </h1>
              <p>
                Thursday 18 July 2024 | 10:15 – 11:30 | Zoom Tune in to watch a
                live stream of the launch of the Workforce strategy for adult
                social care. Skills for Care has been leading the development of
                this Workforce strategy, working in collaboration with a wide
                range of organisations and people with a stake in the future of
                the adult social care sector. The strategy identifies the
                workforce needed over the next 15 years and sets out a plan for
                ensuring the sector has enough of the right people with the
                right skills. <br />
                <a
                  href="https://events.skillsforcare.org.uk/skillsforcare/frontend/reg/thome.csp?eventID=1924&medium=email&pageID=617548&source=GovDelivery&traceRedir=4#msdynttrid=2q6huZc--sfUaUdjbzbLocOedpHUQ8M0UCtYQyoSJQw"
                  className="text-blue-500"
                >
                  {" "}
                  ⇨ Book now
                </a>
              </p>
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />

        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-start">
            <div>
              <h1 className="text-4xl  text-red-500 font-bold mb-4">
                Managers Network{" "}
              </h1>
              <p>
                Please see the dates below in the link for managers network
                meetings. <br />
                <a
                  className="text-blue-500"
                  href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fcontent.govdelivery.com%2Fattachments%2FUKLAMBETH%2F2024%2F07%2F05%2Ffile_attachments%2F2928638%2FManagers%2520Networks%25202024-5%2520with%2520Skills%2520for%2520care%2520.pptx&data=05%7C02%7C%7C422c1bc0da134916e9b908dc9cfc076d%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638557853492992824%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=7HaIPkVM%2Bk8a5fECi2MPtqwLmUl1M53pSk1jTA9jnjo%3D&reserved=0"

                >
                  {" "}
Dates for future meetings                </a>
              </p>
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />

        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-start">
            <div>
              <h1 className="text-4xl  text-red-500 font-bold mb-4">
              2024 Age friendly Lambeth Consultation              </h1>

              <div className="flex justify-center">
          <img className="w-full h-full rounded-xl object-cover" src={news1} alt="img" /></div>
              
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />
        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-end">
            <div>
              <h1 className="text-4xl  text-red-500 font-bold mb-4">
              Care Homes and the London Care
              Record              </h1>
              <p>
              The London Care Record provides a single, secure view of an individual’s health and
care information, accessed by frontline staff when providing care and treatment. Most
GP surgeries and hospitals in London now use the London Care Record, along with
local authorities, community health and care services, out of hours, the London
Ambulance Service and other NHS 111 and mental health services. The London Care
Record receives over 2 million views a month, 600,000 a month are South East London
staff accessing the record at point of care.
Work is currently underway with a small number of early adopter care homes in South
East London to develop a blueprint to support rollout to care homes across South East
London, including Lambeth. Access to the London Care Record will help care homes in
the following ways: <br />
Safer transfer of care between health and care, in particular better support when
residents are discharged from hospital
Easy, fast access to full medical history, allergies, repeat medications, London
Ambulance Service reports, appointments and care plans, any time of the day or
night <br />
Reduces unnecessary hospital admissions and GP callouts
Saves care home staff time as reduces need for phone calls to contact hospitals
and GPs <br />
Resident doesn’t have to repeat their story <br />
Better health outcomes as helps reduce delays in treatments with quicker, better
quality clinical decisions <br />
Angela Poland, Associate Director of Digital Programmes (South East London
Integrated Care System), will be joining Lambeth’s Care Home Providers Engagement
Session on 11 September (2-2.45pm) so do please come along to ask questions and
hear more about plans for the London Care Record in the borough’s care homes <a href="https://emea01.safelinks.protection.outlook.com/ap/t-59584e83/?url=https%3A%2F%2Fteams.microsoft.com%2Fl%2Fmeetup-join%2F19%253ameeting_NmIzYTU5M2UtMzE0Yy00MTA4LWFiYjUtMDAyNTc3MGQ2YjM2%2540thread.v2%2F0%3Fcontext%3D%257B%2522Tid%2522%253A%2522c4f22780-485f-4507-af4a-60a971d6f7fe%2522%252C%2522Oid%2522%253A%25220f8a19ac-8f46-404c-beca-aeaebc8ffcd2%2522%257D%26medium%3Demail%26source%3DGovDelivery&data=05%7C02%7C%7C422c1bc0da134916e9b908dc9cfc076d%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638557853493001419%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=Jrz6qsTNLmB8jgxrUPtNMguLZJRWx6zck6ZNoXpiDxQ%3D&reserved=0" className=" text-blue-500"> (Click
  here to join the meeting)</a>. In the meantime you can find further information at the <br />
following links: <br />
<a href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.onelondon.online%2Flondon-care-record%2F%3Fmedium%3Demail%26source%3DGovDelivery&data=05%7C02%7C%7C422c1bc0da134916e9b908dc9cfc076d%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638557853493010540%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=JziHy7s0vW7kN2FNN1HJ9XV3WeGzM%2FYqhocOAZScbTY%3D&reserved=0" className="text-blue-500">London Care Record - OneLondon </a>
<br />
<a href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.selondonics.org%2Fwho-we-are%2Four-work%2Fdigital-and-data%2Fthe-london-care-record%2F%3Fmedium%3Demail%26source%3DGovDelivery&data=05%7C02%7C%7C422c1bc0da134916e9b908dc9cfc076d%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638557853493018460%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=oUUqzC5cNLm6Dj%2B0QvdlXcpvz7oPwWW7b86%2BpMAU7x4%3D&reserved=0" className="text-blue-500">
The London Care Record - South East London ICS (selondonics.org)

</a>
              </p>
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />
        
        <div className=" flex-col grid grid-cols-1 my-6 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-start">
            <div>
              <h1 className="text-4xl  text-red-500 font-bold mb-4">
              Rosemanor Home resident party            </h1>

              <div className="flex justify-center">
          <img className="w-full h-full rounded-xl object-cover" src={news2} alt="img" /></div>
              
            </div>
          </div>
          {/* <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div> */}
        </div>
        <hr />

        
      </div>
    </div>
  );
};

export default ShowCase2;
