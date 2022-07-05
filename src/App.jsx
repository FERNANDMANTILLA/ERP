
import { useLayoutEffect } from 'react'
import { DashBoard } from './Components/DashBoard'
import { MainPanel } from './Components/MainPanel'
import { responsiveScript } from './Hooks/responsiveScript'



function  App ()  {

  useLayoutEffect(() => {
    
    responsiveScript();

  }, [])

  window.addEventListener('resize', responsiveScript);



  return (
   <>
   <main className='row justify-content-center  vh-100'>
  
   <DashBoard/>

   <MainPanel></MainPanel>
  
   </main>
   </>
  )
}

export default App
