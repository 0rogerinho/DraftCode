import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

const Creator = () => {
  return (
    <div className="text-white mt-10 md:p-6 bg-secondary space-y-3 rounded-lg border border-[#2e2e2e] md:w-[350px]">
      <div className="flex items-center gap-3">
        <img className="rounded-full w-16" src="/ellipse-706.jpg" />
        <div>
          <p className="text-zinc-400 text-xs">Design feito por </p>
          <h1 className="text-xl font-bold border-b-2 border-violet-800 w-fit">
            Lee Dev
          </h1>
        </div>
      </div>
      <ul className="flex gap-4">
        <li className="flex text-sm items-center gap-2">
          <AiOutlineLinkedin className="text-violet-800" size={18} />
          Linkedin
        </li>
        <li className="flex text-sm items-center gap-2">
          <AiOutlineGithub className="text-violet-800" size={18} />
          Github
        </li>
        <li className="flex text-sm items-center gap-2">
          <CgWebsite className="text-violet-800" size={18} />
          Website
        </li>
      </ul>
    </div>
  );
};

export default Creator;
