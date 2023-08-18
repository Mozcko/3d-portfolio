import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { certificates } from "../constants";

const CertificateCard = ({ index, title, school, image, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[300px] relative"
  >
    <div className="relative w-[200px] h-[150px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded pointer-events-none"
      />
    </div>

    <div className="mt-5 mb-10">
      <h3 className="text-white font-bold text-[14px]">{title}</h3>
    </div>

    <div className="transition ease-out delay-50 duration-200 hover:scale-110 absolute bottom-0 mb-6">
      <a
        href={link}
        target="_blank"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Check it out
      </a>
    </div>
  </motion.div>
);

const Certifications = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 50 );
  }, []);

  return (
    <div
      ref={carousel}
      className="mt-12 bg-black-100 rounded-[20px] overflow-hidden"
    >
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            Some of the courses I've took
          </p>
          <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
        </motion.div>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className={`${styles.paddingX} -mt-20 pb-14 flex gap-7 cursor-grab `}
      >
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.title}
            index={index}
            {...certificate}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
