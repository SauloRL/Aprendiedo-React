import React, { useState } from 'react';
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart';
import { Paginator } from './Paginator';

export function Products({ products }) {
    const { addToCart, removeFromCart,cart } = useCart()
    
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    if (products.length === 0) {
        return <div className="no-products">No se encontraron productos</div>;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Cantidad de productos por página
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const handlePageChange = (pageNumber) => { setCurrentPage(pageNumber);}

  return (
    <main className='products'>
      <ul>
        {currentProducts.map(product => {
            const isProductInCart = checkProductInCart(product)
                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                            <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor: isProductInCart ? 'red':'#09f'}} onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }}>
                                    {
                                        isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon />
                                    }                                    
                                </button>
                            </div>
                        </li>
                    )
                }          
            )
        }
      </ul>
      <Paginator currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
    </main>
  );
}
