 
 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Button } from './components/ui/button'
import Root from './Presentational/Root'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      
    </Route>
  ))

  return (
    <div className='p-3'>
      <RouterProvider router={router} />
         
    </div>
   )
}

export default App
