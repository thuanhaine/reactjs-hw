import ImgProduct from '../../img/girl.jpg'
import './Page1.css'
import { useState, useEffect } from 'react'


function Page1() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://resfulapitest.herokuapp.com/api/get')
        .then(res => res.json())
        .then( data => {
            console.log(data);
            setBooks(data)
        })
    }, [])
    
    return(
        <>
            <ul className='product-list'>
                {books.map(book => (
                    <li className="product-item" key={book.id}>
                    <img className='product-img' src={ImgProduct} alt="product img"/>
                    <div className='product-info'>
                    <p className='product-name'>{book.name}</p>
                    <p className='product-author'>{book.author || "Đang cập nhật ..."}</p>
                    <p className='product-price'>{book.price}</p>
                    </div>
                    <button className='product-btn-buy'>Buy</button>
            </li>
                ))}
            </ul> 
        </>
    )
}
export default Page1;