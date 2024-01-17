import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';

import Home  from '../src/Pages/Home'
import Navbar from './Components/Navbar/Navbar'

import './App.css'

function App() {
  const Root = () => {
    return(
      <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      </>
    )
  }
  
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'element={<Root/>}>
        <Route index element={<Home /> }/>        
      </Route>
    )  
  );

  return (
    
    <>
       
      <RouterProvider router={routes} />                
    
       
    
  </>
    
  )
}

export default App
