import React from "react";
import { IconWrapper, PageWrapper } from "./LgCircle.elements";
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';
function LgCircle({xAxis, next}) {
  return (
  <>
  <PageWrapper>
    <Link  to={`/#${next}`}>
    <motion.div whileHover={{ scale: 1.8 }} >
      <IconWrapper>
        <svg width="200" height="500">
          <circle cx={xAxis} cy="220" r="50%"></circle>
        </svg>
      </IconWrapper>
    </motion.div>
    </Link>
    </PageWrapper>

    </>
  );
}

export default LgCircle;
