import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseOpenLogin } from '../../../context/UseOpenLoginContext';

const NavMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hidden, setHidden] = useState('');
  const { openLogin, setOpenLogin } = UseOpenLogin();

  function handleClick() {
    setOpenMenu(!openMenu);

    let timeOut;

    if (openMenu) {
      timeOut = setTimeout(() => {
        setHidden('hidden');
      }, 400);
    } else {
      clearTimeout(timeOut);
      setHidden('');
    }
  }

  function handleOpenLogin() {
    setOpenLogin(!openLogin);
  }

  const classAnimationHamburger = openMenu ? 'ml-2.5' : '';
  const ClassOpenMenu = openMenu ? 'opacity-100' : `opacity-0 ${hidden}`;

  return (
    <div className="relative md:hidden">
      <div className="w-5 space-y-1 group:" onClick={handleClick}>
        <div className="w-5 h-0.5 bg-white rounded-full"></div>
        <div className="w-5 h-0.5 bg-white rounded-full"></div>
        <div
          className={`w-5 h-0.5 bg-white rounded-full group:transition duration-500 ${classAnimationHamburger} `}
        ></div>
      </div>

      <div
        className={`absolute p-6 right-4 top-5 bg-[rgb(15,15,15)] border border-[#2e2e2e] rounded transition duration-500 ${ClassOpenMenu} flex flex-col items-center`}
      >
        <ul className="flex flex-col gap-5 justify-center items-center">
          <li className="group">
            <Link to="/">Home</Link>
            <div className="w-1 h-1 m-auto rounded-sm bg-violet-800 group-hover:w-full transition-all duration-500 "></div>
          </li>
          <li className="group">
            <Link to="/desafios">Desafio</Link>
            <div className="w-1 h-1 m-auto rounded-sm bg-violet-800 group-hover:w-full transition-all duration-500 "></div>
          </li>
          <li className="group">
            <Link to="/faqs">FAQ's</Link>
            <div className="w-1 h-1 m-auto rounded-sm bg-violet-800 group-hover:w-full transition-all duration-500 "></div>
          </li>
        </ul>
        <button
          onClick={handleOpenLogin}
          className=" mt-6 border rounded-md py-[.3125rem] px-4 text-[.875rem] border-violet-800 font-semibold hover:scale-110"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavMobile;
