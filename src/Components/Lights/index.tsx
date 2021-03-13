import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

const Lights: React.FC = () => {

  

  return (
    <Container>
      <motion.div
        animate={{ x: 100, y: 400 }}
        transition={{ type: 'spring', stiffness: 20, repeat: Infinity }}
      />
    </Container>
  );
}

export default Lights;