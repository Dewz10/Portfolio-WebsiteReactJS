import React from "react";

import { social } from "../data";
import { contact } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12" id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between">
          {/*social icon*/}
          <div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="flex">
            {contact.map((item, index) => {
              const { icon, title } = item;
              return (
                <div className="flex flex-row lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-end text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-paragraph justify-evenly">{title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
