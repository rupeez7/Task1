import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as DaveIcon } from '../ui/dave.min.svg';

const Header = () => {
  return (
    <div className='bg-black text-white px-5 flex items-baseline justify-between py-2'>
      <div className="flex items-center space-x-2">
        <DaveIcon className="h-6 w-6" />
        <NavLink to={'/'}></NavLink>
      </div>
      <nav className='space-x-5'>
        <NavLink to={'/home'}></NavLink>
        <NavLink to={'/about'}>File</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
      </nav>
    </div>
  );
};

export default Header;
