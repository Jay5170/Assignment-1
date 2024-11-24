import React from "react";
import { assets } from "../../assets/assets";

const About_Us = () => {
  return (
    <div className="about_us_con flex mx-32	justify-between">
      <div className="ab_1">
        <img src={assets.About_Us} alt="" className="ab_img" />
      </div>
      <div className="ab_2">
        <div className="ab_heading">
          <h1>ABOUT US</h1>
        </div>
        <div className="slider">
          <div className="slider_line"><hr /></div>
          <div className="slider_body"></div>
        </div>
        <div className="ab_text">
          <p>
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
          </p>
        </div>
        <div className="flex mt-10">
          <div className="engagement">
            <div>
              <img src={assets.Engagement_icon} alt="" className="w-10"/>
            </div>
            <div className="eg_heading">
              <h4>Engagement</h4>
            </div>
            <div className="eg_text">
              <p>
                We are engagement specialists, who have led projects at all
                levels of the IAP2 spectrum. READ MORE
              </p>
            </div>
          </div>
          <div className="communications">
          <div>
              <img src={assets.Communication_icon} alt="" className="w-10"/>
            </div>
            <div className="cm_heading">
              <h4>Communications</h4>
            </div>
            <div className="cm_text">
              <p>
              We are award-winning leaders in communications and campaign management.
              READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
