import './App.css'
import Rootlayout from './components/Rootlayout';
import './index.css'
import About from './pages/about/About';
import Fashion from './pages/categories/fashion/Fashion';
import Index from './pages/home/Index'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>
        <Route path='/' element={<Index />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/categories/fashion' element={<Fashion />}></Route>
      </Route>
    )
  );


  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
