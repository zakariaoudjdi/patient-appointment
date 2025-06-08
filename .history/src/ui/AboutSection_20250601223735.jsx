import React from "react";

function AboutSection() {
  return (
    <div className="col-start-2 col-end-10 grid grid-cols-2 gap-8 p-12 ">
      <img src="../../images/about-image.jpg" alt="" />
      <div className="flex flex-col justify-center w-lg ">
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
