import itlogo from "/assets/itlogo.svg";
import Up from "/assets/about-up.png";
import Down from "/assets/about-down.png";
import { TiltOptions } from "vanilla-tilt";
import Tilt from "./Tilt";

export default function About() {
  const tiltOptions: TiltOptions = {
    max: 5,
    speed: 500,
    reverse: true,
    glare: true,
    scale: 1.03,
    "max-glare": 0.1,
  };
  return (
    <div id="about" className="text-textColor flex flex-col items-center gap-8">
      <div className=" flex items-center flex-col gap-2">
        <img src={Up} className="w-80" />
        <p className="text-xl">About us</p>
        <img src={Down} className=" w-64" />
      </div>

      <Tilt
        options={tiltOptions}
        className="bg-[#07080D] cursor-pointer p-8 md:p-16 rounded-2xl 
        flex flex-col sm:flex-row md:grid 
        md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-between border-[#3D3D3D] border w-full card"
      >
        <div>
          <p className=" font-bold text-3xl pb-3">WHO ARE WE ?</p>
          <p className=" text-[14px] w-60 ">
            The IT Section, one of three key sections at Micro Club, The section
            offers activities like bootcamps and hackathons.
          </p>
        </div>

        <div className=" flex justify-end ">
          <img src={itlogo} className=" w-64  pt-5 md:pt-0" />
        </div>
      </Tilt>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6  ">
        <Tilt
          options={tiltOptions}
          className="bg-[#07080D] cursor-pointer p-8 md:p-16 rounded-2xl border-[#3D3D3D] border card "
        >
          <p className=" font-bold text-3xl pb-3">What is hollow dev ?</p>
          <p className="text-[14px]">
            Hollow Dev is an online hackathon focused on backend development and
            building server-side software, where each team will have to solve
            challenges.
          </p>
        </Tilt>

        <Tilt
          options={tiltOptions}
          className="bg-[#07080D] cursor-pointer p-8 md:p-16 rounded-2xl border-[#3D3D3D] border card"
        >
          <p className=" font-bold text-3xl pb-3">Our vision</p>
          <p className=" text-[14px] ">
            We aim to elevate the level of our members and turn them into strong
            back-end knights. Hollow Dev is designed to help you practice what
            you learned in the bootcamp. By solving challenges, We promise you
            that you will build projects that will not only deepen your
            understanding of backend concepts but also make your Portfolio
            shine. So, grab your key-sword and start coding !
          </p>
        </Tilt>
      </div>
    </div>
  );
}
