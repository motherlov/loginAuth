import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
export default function SearchBar() {

    const [productList,setProductList]= useState('')
    const fetchData =()=>{
        axios.get('https://dummyjson.com/products/search?q=phone').then(res=>{
            setProductList(res.data.products);
            //  console.log(res.data.products)
        })    
    }
    // console.log(productList);
    useEffect(()=>{
        fetchData()
    },[])
    const [products, setProducts] = useState(productList);
    console.log(products);
    const [searchVal, setSearchVal] = useState("");
    const handleSearchClick =()=> {
        if (searchVal === "") {
             setProducts(productList);
              return; 
            }
        const filterBySearch = productList.filter((item)=> {
            if (item.toLowerCase().includes(searchVal.toLowerCase()))
             { 
                return item; 
            }
        })
        setProducts(filterBySearch);
    }

    

    const mystyle = {
        marginLeft: "600px",
        marginTop: "20px",
        fontWeight: "700"
    };
  return (
    <div>

                <div style={mystyle}>
                <input onChange={(e) => setSearchVal(e.target.value)} />
                <BsSearch onClick={handleSearchClick} />
            </div>
            <div>
                { products && products.map((product) => {
                    return (
                        <div style={mystyle}>{product}</div>
                    )
                })
                }
 
            </div>

    </div>
  )
}
