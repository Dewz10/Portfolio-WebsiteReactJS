import React from "react";

import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/*section title*/}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Contact
          </h2>
          <br />
          <br />
        </div>
        {/*info*/}
        <div className="flex flex-1 flex-col items-start space-y-1 mb-12 lg:mb-0 lg:pt-2">
          {contact.map((item, index) => {
            const { icon, title} = item;
            return (
              <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                  {icon}
                </div>
                <div>
                    <h4>{title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
