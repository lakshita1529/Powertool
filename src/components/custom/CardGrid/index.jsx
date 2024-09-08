import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../../styles/variable.css';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const cardsData = [
  { title: 'Filter Menu', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-1)' },
  { title: 'Power Tools Suite', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-2)' },
  { title: 'Variant Tagger', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-3)' },
  { title: 'Trending Sort', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-4)' },
  { title: 'Pricing Policy', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-5)' },
  { title: 'Sort Orders', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-6)' },
  { title: 'Hide Sold Out', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-7)' },
  { title: 'Custom Pricing', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-8)' },
  { title: 'AI Content Creator', description: 'BY POWER TOOLS', bgColor: 'var(--card-bg-color-9)' },
];

const CardsGrid = () => {
  return (
    <div className="container mx-auto my-4 p-6" style={{ backgroundColor: 'var(--primary-bg-color)' }}>
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-sm-6 col-lg-4 mb-4">
            <motion.div
              className="card"
              style={{ backgroundColor: card.bgColor }}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="card-body text-light">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <Button variant="light" className="text-dark">Go to Tool</Button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
