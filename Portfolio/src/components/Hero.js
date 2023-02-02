import React from "react";

import ManImg from "../assets/img/brands/99088.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/*left sild*/}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hello, I'm Autsadawut Klaymueang
            </p>
            <h1 className="text-paragraph text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Computer Engineering
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am currently a 3rd-year student at Kasetsart University
              Kamphaeng Saen Campus. I'm interested in Full-Stack, Front-End and
              Mobile Application Dev.
            </p>
            
          </div>
          {/*right sild*/}
          <div className="hidden lg:flex flex-1 justify-end items-end">
            <img className="rounded-3xl h-96" src={ManImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
