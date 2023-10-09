import React from 'react';
import { Link } from 'react-router-dom';

const JewelryCard = ({item}) => {
    const {name,category, image, price, quantity, sellerName} = item;
    console.log(item)
    return (
        <tr>
      {/* <th>
      <button  className="btn btn-sm ">
      <FontAwesomeIcon icon={faTrashAlt} />
</button>
      </th> */}
      <td>
          <div className="avatar ">

            <div className="rounded w-24 h-24">
              {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          
      </td>
      <td>
        {name}
      </td>
      <td>{sellerName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        {/* <Link to={`/details/${_id}`}><button onClick={detail} className='btn btn-primary'>View Details</button></Link> */}
      </th>
    </tr>
    );
};

export default JewelryCard;