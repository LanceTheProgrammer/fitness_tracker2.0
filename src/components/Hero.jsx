import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Gym<span className="text-blue-400">Genie</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        By using this fitness tracker app, I understand that I may undergo significant {" "}
        <span className="text-blue-400 font-medium">
        metamorphosis
        </span>{" "}
        , and I accept all associated risks, including potential alterations to my body image and size. I acknowledge that my{" "}
        <span className="text-blue-400 font-medium">devotion</span> ,
        to fitness could lead to substantial gains, and I'm prepared for the journey ahead.
      </p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text={"Accept & Begin"}/>
    </div>
  );
}
