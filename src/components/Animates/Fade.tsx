'use client'

import { motion } from 'framer-motion'

export const FadeComponent = ({ isVisible, children }: any) => (
  <motion.div
    layout
    animate={{ opacity: 1 }}
    className='opacity-0 z-10 relative'
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
)
