import React, { useEffect, useState } from 'react';
import JewelryCard from './JewelryCard';

const AllJewelry = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/jewelry")
        // fetch(`http://localhost:5000/toys?sort=${asc ? 'asc': 'desc'}&limit=${20}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-500 mb-5 text-end pr-3 mt-4">All Items: {items.length}</h1>
            <div className=" flex justify-center mb-7">
            <div className="form-control">
 
</div>
            </div>

<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Seller</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
    {
                items.map(item => <JewelryCard key={item.name} item={item}></JewelryCard>)
            }
      
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default AllJewelry;