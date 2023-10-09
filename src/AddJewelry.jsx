import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './components/Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddJewelry = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    // useTitle('Add Toy')

    const handleSet = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.picture.value;
        const name = form.name.value;
        const sellerName = form.seller.value;
        const email = user.email;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const order = {
            image,
            name,
            sellerName,
            email,
            category,
            price,
            quantity,
            details
        }
        fetch('http://localhost:5000/jewelry',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Wow!',
                    text: 'Added Successfully'
                  })
                  form.reset();
                  navigate('/alljewelry')
              }
        })
    }

    return (
        <div className="mb-10">
            <h1 className="font-bold text-4xl text-center mt-10 mb-5 text-orange-500">Add a Toy</h1>
            <div className="w-[60%] mx-auto">
            <form onSubmit={handleSet}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toys Picture</span>
          </label>
          <input type="text" placeholder="picture" name='picture' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" placeholder="Toy Name" name='name' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" placeholder="Seller Name" name='seller' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="Email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Category" name='category' className="input input-bordered"  required/>
</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" name='price' className="input input-bordered"  required/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Abailable Quantity</span>
          </label>
          <input type="number" placeholder="Available Quantity" name='quantity' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Details" name='details' className="input input-bordered"  required/>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-orange-500 text-white" type="submit" value='Add a toy' name="" id="" />
        </div>
        </form>
        </div>
        </div>
    );
};

export default AddJewelry;