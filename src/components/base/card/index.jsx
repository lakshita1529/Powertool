import React from 'react';
import { motion } from 'framer-motion';
import '../../../styles/App.css'; 

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hover: {
    scale: 1.05,
    backgroundColor: 'var(--primary-color)',
    transition: { duration: 0.3 },
  }
};

const Card = ({ imgSrc, title, text }) => {
  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <img src={imgSrc} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </motion.div>
  );
};

export default Card;
