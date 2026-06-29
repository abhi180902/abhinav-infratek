import { createContext, useContext } from 'react'

const CompanyContext = createContext({ companyName: 'Abhinav Infratek' })
export const CompanyProvider = CompanyContext.Provider
export const useCompany = () => useContext(CompanyContext)
