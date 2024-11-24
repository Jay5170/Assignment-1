import React from "react";
import { assets } from "../../assets/assets";

export default function Our_Clients() {
  return (
    <div className="our_clients">
      <div className="op_heading flex justify-center">
        <h1>OUR CLIENTS</h1>
      </div>
      <div className="flex justify-center">
        <div className="oc_slider ">
          <div className="oc_slider_line">
            <hr />
          </div>
          <div className="oc_slider_body"></div>
        </div>
      </div>
      <div className="cl_logo">
        <div className="cl_logo_1 flex flex-wrap items-center justify-between">
          <img src={assets.Clients_1} alt="" className="clients_1" />
          <img src={assets.Clients_2} alt="" className="clients_2" />
          <img src={assets.Clients_3} alt="" className="clients_3" />
          <img src={assets.Clients_4} alt="" className="clients_4" />
          <img src={assets.Clients_5} alt="" className="clients_5" />
        </div>
        <div className="cl_logo_2 flex flex-wrap items-center justify-between">
          <img src={assets.Clients_6} alt="" className="clients_6" />
          <img src={assets.Clients_7} alt="" className="clients_7" />
          <img src={assets.Clients_8} alt="" className="clients_8" />
          <img src={assets.Clients_9} alt="" className="clients_9" />
        </div>
      </div>
    </div>
  );
}
