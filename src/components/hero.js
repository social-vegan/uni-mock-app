import React, { useState } from "react";
import bgVid from "../extras/nxt_wave_bg.mp4";
import hero from "../extras/nx_wave_hero.png";
import Navmenu from "./Navmenu";

function Hero() {
  const [selected, setSelected] = useState(true);
  const [mobileNumber, setMobileNumber] = useState();
  return (
    <div className="overflow-x-hidden">
      <Navmenu />
      {/* background */}
      <video
        src={bgVid}
        loop
        autoPlay
        muted
        className="object-cover absolute h-screen w-screen -z-10 top-0 left-0"></video>

      <div className="lg:px-36 md:px-16 px-5 flex lg:flex-row flex-col justify-between">
        <img
          src={hero}
          alt="hero"
          className="lg:hidden mt-24 mb-8 h-auto w-[225px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] max-w-[420px] z-[1]"
        />
        <div className="flex flex-col justify-center text-black space-y-5">
          <span className="lg:text-6xl md:text-4xl text-3xl">
            <b>NX Wave.</b> The next-gen credit card for those who love rewards.
          </span>
          <span className="text-display-md text-black">
            1% Cashback + 5x Rewards + Zero Forex Markup
          </span>

          <div className="flex bg-black p-1 pl-2 rounded-xl lg:w-1/2 justify-between">
            <div className="flex items-center">
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                defaultValue={mobileNumber}
                required
                onChange={(e) => setMobileNumber(e.target.value)}
                className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-full"
                placeholder="Enter Phone Number"
              />
            </div>
            <button
              type="submit"
              className= {selected ? "text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-200 rounded-xl z-10 py-2 px-4" : "text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-200 rounded-xl z-10 py-2 px-4 opacity-80 cursor-not-allowed"}
            >
              <span>Apply Now</span>
            </button>
          </div>
          <label className="flex flex-row text-xs lg:w-1/2 text-black">
              <input
                className="flex pr-1"
                type="checkbox"
                checked={selected}
                onChange={(e) => setSelected(!selected)}
              />
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </label>
        </div>

        <img
          src={hero}
          alt="hero"
          className="lg:flex hidden my-40 h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
        />
      </div>
    </div>
  );
}

export default Hero;
