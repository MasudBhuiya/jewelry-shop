import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = "hello"
    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alljewelry'>All jewelry</Link></li>
    <li><Link to='/alltoys'>My jewelry</Link></li>
    <li><Link to='/alltoys'>Add jewelry</Link></li>
    <li><Link to='/alltoys'>Blogs</Link></li>
    
    {/* {
      user && <>
      <li><Link to='/addtoys'>Add a Toy</Link></li><li><Link to='/mytoys'>My Toys</Link></li>
      </>
    } */}
  </>
    return (
        <div className="navbar bg-base-100 h-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn p-0">
        <div>
        <img className="h-10 w-28 rounded" src='https://i.ibb.co/pQk9fc4/jewelry-logo.png' alt="" />
        <h5 className='text-sm'>ROYAL JEWELRY</h5>
        </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {/* {user ? <><img title={user.displayName} className="w-10 h-10 rounded-3xl mr-4" src={user.photoURL
} alt="" /><button className="btn btn-secondary" onClick={handleLogout}>LogOut</button></> : <button className="btn btn-secondary"><Link to='/login'>Login</Link></button>} */}
{user? <button className='btn btn-primary'>Logout</button>: <button className='btn btn-primary'>Login</button>}
  </div>
</div> 
    );
};

export default Navbar;