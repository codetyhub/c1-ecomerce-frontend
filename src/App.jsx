import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LadingPage'
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/products' element={<ProductsPage/>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/checkout' element={<CheckoutPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
