import React from "react";
import { assets } from "../../assets/assets";

const Services = () => {
  return (
    <div className="services flex flex-wrap justify-center">
      <div className="sr_heading">
        <h1>SERVICES</h1>
        <div className="sr_slider ">
          <div className="sr_slider_line">
            <hr />
          </div>
          <div className="sr_slider_body"></div>
        </div>
      </div>
      <div className="sr_eg flex justify-between">
        <div className="sr_eg_1">
          <div className="sr_eg_heading ">
            <h1>ENGAGEMENT</h1>
          </div>
          <div className="sr_eg_text mt-5">
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>
        <div className="sr_eg_img">
          <img src={assets.Engagement} alt="" />
        </div>
      </div>
      <div className="sr_cm flex justify-between">
        <div>
          <img src={assets.Communication} alt="" />
        </div>
        <div className="sr_cm_1">
          <div className="sr_cm_heading ">
            <h1>COMMUNICATIONS</h1>
          </div>
          <div className="sr_cm_text mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </div>
        </div>
      </div>
      <div className="sr_fc flex justify-between">
        <div className="sr_fc_1">
          <div className="sr_fc_heading ">
            <h1>FACILITATION</h1>
          </div>
          <div className="sr_fc_text mt-5">
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>
        <div>
          <img src={assets.Facilation} alt="" />
        </div>
      </div>
      <div className="sr_cn flex justify-between">
        <div>
          <img src={assets.Consultation} alt="" />
        </div>
        <div className="sr_cn_1">
          <div className="sr_cn_heading ">
            <h1>COMMUNICATION</h1>
          </div>
          <div className="sr_cn_text mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </div>
        </div>
      </div>
      <div className="sr_tm flex justify-between">
        <div className="sr_tm_1">
          <div className="sr_tm_heading ">
            <h1>TRANING & MENTORING</h1>
          </div>
          <div className="sr_tm_text mt-5">
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>
        <div>
          <img src={assets.T_M} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
