import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-20 h-[72vh]">

      <div className="flex-1 flex flex-col justify-between items-center bg-[#F1F7ED] rounded-[20px] w-[76px] py-8 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
          <div className = 'mt-44'>
          <img className = 'h-17 w-14' src = {Logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar