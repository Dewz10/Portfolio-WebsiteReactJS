import React from "react";

import Image from "../assets/img/pro.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold md-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                
              </h2>
              <br></br>
              <br></br>
              <br></br>
              <p className="mb-4 text-accent">Real life work experience is a plus</p>
              <hr className="mb-8 opacity-5"/>
              <p className="mb-8">
              I am currently a 3rd-year student at Kasetsart University Kamphaeng Saen Campus. I'm looking for an internship that allows me to apply my knowledge and experience to work. And I hope that I will be a part that can help further the organization. Because I think that the experience or opportunity gained from real work is a plus and a valuable thing. It is also a path that leads to further work in the future.
              </p>
            </div>
            <a href="#" class="text-white bg-accent hover:bg-accent-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
