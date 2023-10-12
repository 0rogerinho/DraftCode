import { BiLogoDiscord } from 'react-icons/bi';

const Discord = () => {
  return (
    <div className="w-full p-24 flex flex-col justify-center items-center bg-secondary text-white border border-[#2e2e2e] mt-40">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-1">
          Junte-se a comunidade do Discord!
        </h1>
        <p className="text-zinc-400">
          Esperamos vê-lo em breve em nossa comunidade de desenvolvedores no
          Discord
        </p>
      </div>
      <div className="w-[20%] h-0.5 mt-6 bg-violet-800"></div>

      <a href="https://discord.gg/yXYvkwaCVm" target="_blank">
        <button className="flex items-center gap-4 px-6 py-4 mt-10 text-xl  font-bold bg-[#5662F6] rounded-lg">
          <BiLogoDiscord size={30} className="inline" />
          DISCORD
        </button>
      </a>
    </div>
  );
};

export default Discord;
