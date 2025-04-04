import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center text-center my-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
      >
        <p>Best Text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to{" "}
        <span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          className="text-blue-600"
        >
          image
        </span>
        , in seconds.
      </motion.h1>

      <p className="text-center max-w-xl mx-auto mt-5">
        Turn your ideas into stunning visuals instantly with AI. Simply describe
        what you're imagining, and see your creative vision transformed into
        digital artwork within moments.
      </p>
      <button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
      >
        Generate Images <img src={assets.star_group} alt="" className="h-6" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              key={index}
              alt=""
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generateed images from imagify</p>
    </motion.div>
  );
};

export default Hero;
