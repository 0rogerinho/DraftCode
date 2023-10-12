import { BsArrowRightShort } from 'react-icons/bs';

const Description = () => {
  return (
    <section className="space-y-4 PX-[5%] md:flex md:justify-between">
      <div className="text-white space-y-3 md:w-[50%]">
        <h1 className="text-3xl font-semibold">Nome do projeto</h1>

        <p className="text-zinc-400">
          Neste desafio, você será desafiado a criar um formulário de login
          responsivo usando HTML, CSS e JavaScript. O formulário deve ter uma
          aparência agradável em dispositivos de desktop e móveis e deve ser
          fácil de usar para os usuários.
        </p>
      </div>

      <div className="space-y-3">
        <button className="group py-4 px-4 bg-gradient-to-r from-violet-900 bg-violet-700 transition duration-300 hover:scale-105 rounded-md text-sm text-white font-semibold flex items-center gap-1">
          COMECE OS DESAFIOS{' '}
          <BsArrowRightShort
            className="inline group-hover:rotate-90 transition duration-500 "
            size={20}
          />
        </button>
        <p className="w-fit text-white border-b border-violet-800">INICIANTE</p>
      </div>
    </section>
  );
};

export default Description;
