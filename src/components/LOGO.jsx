import React from "react";
import {LogoImg} from './index';

function Logo({ width = "100px" }) {
  return <div className="text-2xl font-sans font-semibold">
            <img src={LogoImg} alt="" className=" w-12"/>
          </div>;
}

export default Logo;
