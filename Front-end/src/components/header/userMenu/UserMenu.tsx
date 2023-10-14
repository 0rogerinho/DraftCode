import { MdAccountCircle } from 'react-icons/md';
import { BsArrowDownShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Avatar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="relative hidden md:flex items-center gap-1 ">
      <button onClick={handleClick} className=" w-8 h-8 rounded-full">
        <MdAccountCircle size={35} />
      </button>
      <BsArrowDownShort
        className={`transition-all duration-300 ${
          show ? 'rotate-0' : 'rotate-180'
        }`}
        size={20}
      />
      <nav
        className={`absolute ${
          show ? '' : 'hidden'
        } w-28 bg-[#101010] border border-[#2e2e2e] top-10 -left-[40px] rounded-sm`}
      >
        <ul>
          <Link to="/faqs">
            <li className="w-full text-center text-xl hover:bg-[#2e2e2e] hover:bg-opacity-40">
              Perfil
            </li>
          </Link>
          <div className="m-auto w-[80%] bg-[#2e2e2e] h-[1px]"></div>
          <li
            onClick={() => {
              localStorage.clear(), navigate(0);
            }}
            className="w-full cursor-pointer text-center text-xl hover:bg-[#2e2e2e] hover:bg-opacity-40"
          >
            Sair
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Avatar;
