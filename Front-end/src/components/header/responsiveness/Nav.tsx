import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="hidden md:block font-semibold">
      <ul className="flex gap-14">
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
    </nav>
  );
};

export default Nav;
