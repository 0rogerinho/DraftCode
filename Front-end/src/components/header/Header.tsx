import { Link } from 'react-router-dom';

import { UseOpenLogin } from '../../context/UseOpenLoginContext';
import NavMobile from './responsiveness/NavMobile.tsx';
import Nav from './responsiveness/Nav.tsx';
import Avatar from './avatar/Avatar.tsx';

const Header = () => {
  const { openLogin, setOpenLogin } = UseOpenLogin();
  const token = localStorage.getItem('token');

  return (
    <header className="relative w-full flex justify-between items-center text-white bg-secondary py-4 px-[5%] md:px-[7.5rem] border-b border-[#2e2e2e] mb-10">
      <Link to="/" className="flex gap-2">
        <img src="/logo.svg" alt="Logo DraftCode" />
        <h1 className="text-xl font-semibold">DraftCode</h1>
      </Link>

      <Nav />

      <NavMobile />

      {token ? (
        <Avatar />
      ) : (
        <button
          onClick={() => setOpenLogin(!openLogin)}
          className="hidden md:block border rounded-md p-[.625rem] text-[.875rem] border-violet-800 font-semibold hover:scale-105 transition-all"
        >
          LOGIN
        </button>
      )}
    </header>
  );
};

export default Header;
