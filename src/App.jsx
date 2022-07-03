
import { DashBoard } from './Components/DashBoard'
import { MainPanel } from './Components/MainPanel'
import { getData}  from './helpers/getData'


function App() {

  const {getEmpresa}= getData();

  getEmpresa().then(data => {
    console.log(data)
  })




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
