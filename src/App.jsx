import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LadingPage'
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import MensTshirts from './components/MensTshirts';
import Items from './components/Items';
import Categories from "./components/Categories";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route element={<MainLayout/>}>
                        <Route path='/products' element={<ProductsPage/>}/>
                    </Route>
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/checkout' element={<CheckoutPage/>}/>
                    <Route path ="mensTshirt" element={<MensTshirts/>}/>
                    <Route path='/items' element={<Items/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
