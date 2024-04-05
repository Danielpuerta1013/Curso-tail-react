import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/Index.jsx'
import Home from '../Home/Index.jsx'
import MyAccount from '../MyAccount/Index.jsx'
import MyOrder from '../MyOrder/Index.jsx'
import MyOrders from '../MyOrders/Index.jsx'
import NotFound from '../NotFound/Index.jsx'
import SignIn from '../SignIn/Index.jsx'
import './App.css'
import Navbar from '../../Components/NavBar/Index.jsx'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/Index.jsx'

const AppRoutes=()=>{
  let routes=useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
    
  ])
  return routes  
}

const App=()=> {  

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export {App}
