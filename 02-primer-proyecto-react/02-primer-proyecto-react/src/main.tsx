import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirsStempsApp'
import MiPrimeraApp from './MiPrimeraApp'


createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <>
         <FirstStepsApp/>
         <MiPrimeraApp/>
      </>
   </StrictMode>,
)
