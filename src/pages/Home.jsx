import React,{useState,useEffect} from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch } from 'react-redux';


const Home = () => {
    const[products,setproduct]=useState([]);
    const dispatch=useDispatch();


    useEffect(()=>{
      const fetchproduct=async()=>{
        const res=await fetch("https://fakestoreapi.com/products");
        const data=await res.json();
        setproduct(data);
      }
      fetchproduct();
    },[])
    const handleadd =(product)=>{
      dispatch(add(product))
    }
  return (
    <div className='productsWrapper'>
    {
        products.map((products)=>(

            <div className='card' key={products.id}>
                <img src={products.image} alt='img'/>
                <h4>{products.title}</h4>
                <h5>{products.price}</h5>
                <button className='btn' onClick={()=>handleadd(products)}>Add to Cart</button>
            </div>
        ))
    }
    </div>
  )
}

export default Home