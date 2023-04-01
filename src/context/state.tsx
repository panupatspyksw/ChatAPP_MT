'use client'

import { createContext, useContext } from 'react'
const AppContext = createContext({})

export function AppWrapper({ children }: any) {
  let sharedState = {
    login: false,
    profile: {},
    question: {},
    match: false,
    /* whatever you want */
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
