import React from "react";

function AboutSection() {
  return (
    <div className=" grid grid-cols-8 gap-8 p-12 ">
      <img src="../../images/about-image.jpg" alt="" className="col-start-2 col-span-3" />
      <div className="flex flex-col col-start-5 col-span-3 justify-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          About the Doctor
        </h2>
        <p className="text-lg mb-4 text-gray-600">
          Dr. Oudjdi is an experienced gynecologist known for her compassionate
          care and dedication to women’s health. She makes every patient feel
          safe, heard, and respected.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
