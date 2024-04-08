import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LadingPage'
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import MensTshirts from './components/MensTshirts';
import Items from './components/Items';
import Categories from "./components/Categories";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/products' element={<ProductsPage/>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/checkout' element={<CheckoutPage/>}/>
                    <Route path ="mensTshirt" element={<MensTshirts/>}/>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/checkout' element={<CheckoutPage />} />
                    <Route path='/items' element={<Items/>} />
                    <Route path='/categories' element={<Categories/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
