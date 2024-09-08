import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import '../../styles/App.css';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
};

const HomeView = () => {
  return (
    <motion.div
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.h1 className="home-title" variants={containerVariants}>
        Welcome to Power Tools App
      </motion.h1>

      <motion.p className="home-description" variants={containerVariants}>
        Building trust by working efficiently. Empowering your business one task at a time.
      </motion.p>

      {/* Get Started Button with Framer Motion */}
      <div className="home-button-container">
        <Link to="/register">
          <motion.button
            className="home-button"
            variants={buttonVariants}
            whileHover="hover"
          >
            Get Started
          </motion.button>
        </Link>
      </div>

    
      <motion.p  className='heading' variants={containerVariants}>
What our Team says
      </motion.p>
      {/* Testimonials Section */}
      <motion.div
        className="home-testimonials"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <BootstrapCard className="text-center">
          <BootstrapCard.Body>
            <BootstrapCard.Title className="card-title">Abiali Sheikh</BootstrapCard.Title>
            <BootstrapCard.Text className="card-text">
              We trust Power Tools because they simplify our daily workflow and save us hours every day. Efficiency at its best!
            </BootstrapCard.Text>
          </BootstrapCard.Body>
        </BootstrapCard>

        <BootstrapCard className="text-center">
          <BootstrapCard.Body>
            <BootstrapCard.Title className="card-title">Nash Walker</BootstrapCard.Title>
            <BootstrapCard.Text className="card-text">
              Power Tools has transformed how we manage our team. It's like having an extra pair of hands to ensure everything runs smoothly!
            </BootstrapCard.Text>
          </BootstrapCard.Body>
        </BootstrapCard>

        <BootstrapCard className="text-center">
       
          <BootstrapCard.Body>
            <BootstrapCard.Title className="card-title">Mitha B</BootstrapCard.Title>
            <BootstrapCard.Text className="card-text">
              From task management to tracking analytics, Power Tools is an essential part of our daily operations. We couldn’t imagine work without it.
            </BootstrapCard.Text>
          </BootstrapCard.Body>
        </BootstrapCard>
      </motion.div>
    </motion.div>
  );
};

export default HomeView;
