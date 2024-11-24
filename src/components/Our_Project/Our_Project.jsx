import React from "react";
import { assets } from "../../assets/assets";

const Our_Project = () => {
  return (
    <div className="our_project">
      <div className="op_heading flex justify-center">
        <h1>OUR PROJECTS</h1>
      </div>
      <div className="flex justify-center">
        <div className="op_slider ">
          <div className="op_slider_line">
            <hr />
          </div>
          <div className="op_slider_body"></div>
        </div>
      </div>
      <div className="op_img_con flex justify-between">
        <img src={assets.Our_project_1} alt="" className="op_img_1" />
        <div className="">
          <img src={assets.Our_project_2} alt="" className="op_img_2" />
          <img src={assets.Our_project_3} alt="" className="op_img_3" />
        </div>
      </div>
    </div>
  );
};

export default Our_Project;
