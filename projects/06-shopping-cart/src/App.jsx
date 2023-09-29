import {products as initialProducts} from './mocks/products.json'
import { Products } from "./components/products"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart.jsx'




function App() {  
  const {filterProducts} =useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>        
  )
}

export default App
//https://youtu.be/B9tDYAZZxcE?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&t=5461