 
 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignUp from './Presentational/signUpPs'
 
import Root from './Presentational/Root'
import LoginPs from './Presentational/LoginPs'
import ResetPs from './Presentational/ResetPassword'
import ForgotPs from './Presentational/forgot'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route   element={<LoginPs />}></Route>
      <Route  element={<SignUp />}></Route>
      <Route element={<ResetPs />}></Route>
      <Route index element={<ForgotPs/>}></Route>
    </Route>
  ))

  return (
    <div >
      
      <RouterProvider router={router} />
         
    </div>
   )
}

export default App
