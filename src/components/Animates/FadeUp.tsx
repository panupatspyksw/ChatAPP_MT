'use client'

import { motion } from 'framer-motion'

export const FadeUpComponent = ({ isVisible, children, className }: any) => (
  <motion.div
    layout
    animate={{ opacity: 1, top: '50%' }}
    initial={{ opacity: 0, top: '60%' }}
    exit={{ opacity: 0 }}
    className={`opacity-0 z-10  ${className}`}
  >
    {children}
  </motion.div>
)
