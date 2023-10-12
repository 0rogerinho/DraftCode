import { BiLogoDiscord } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="mt-[171px] border-t border-[#2e2e2e] px-[5%] py-10 bg-secondary">
      <div className="text-white flex justify-between border-b border-violet-800">
        <Link to="/" className="flex items-center gap-[10px] py-3">
          <img src="/logo.svg" alt="logo" />
          <h1 className="text-xl font-bold">DraftCode</h1>
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/faqs">Sobre</Link>
          <a href="https://discord.gg/RbsYV4eayV" target="_blank">
            <BiLogoDiscord size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
