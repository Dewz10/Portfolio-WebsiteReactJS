import React from "react";

import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary">
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
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">Contact me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
