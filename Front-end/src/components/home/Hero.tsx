import { BsArrowRightShort } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=" px-[5%] bg-primary text-white md:text-center lg:justify-between md:m-auto lg:m-0 lg:flex lg:items-center lg:text-start">
      <Outlet />
      <article className="lg:w-[700px]">
        <div>
          <p className="text-base text-zinc-400 mb-3">Vamos codar 🔥</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 lg:text-5xl">
            Supere Seus Limites de Programação com Nossos{' '}
            <span className="text-transparent bg-gradient-to-r from-violet-700  to-[#FB7185] bg-clip-text">
              Desafios
            </span>
          </h1>
          <p className="text-zinc-400 mb-7 text-base">
            Teste suas habilidades em back-end e front-end e alcance novos
            patamares em sua jornada de programação.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:w-3/5 lg:flex-row">
          <Link to="/desafios">
            <button className="py-4 px-6 bg-gradient-to-r from-violet-900 bg-violet-700 transition duration-300 hover:scale-105 rounded-md text-sm font-semibold">
              COMECE OS DESAFIOS{' '}
            </button>
          </Link>
          <Link to="/faqs">
            <button className="inline border border-violet-800 rounded-md py-3 px-6 text-sm hover:scale-105 transition duration-300 group">
              Saiba mais
              <BsArrowRightShort
                className="inline group-hover:rotate-90 transition duration-500 "
                size={20}
              />
            </button>
          </Link>
        </div>

        <span className="flex gap-4 justify-center mt-6 text-base font-semibold lg:justify-start">
          <div>
            <p>+ 2000</p>
            <p className="font-normal text-zinc-400">Usuários</p>
          </div>
          <p className="text-violet-800">|</p>
          <div>
            <p>+ 2000</p>
            <p className="font-normal text-zinc-400">Desafios</p>
          </div>
          <p className="text-violet-800">|</p>
          <div>
            <p>+ 2000</p>
            <p className="font-normal text-zinc-400">Aulas</p>
          </div>
        </span>
      </article>
      <img
        className="hidden lg:block lg:w-[300px] lg:h-60 xl:w-[450px] xl:h-80"
        src="undraw-react-re-g-3-ui-1.png"
        alt="Imagem ilustrativa"
      />
    </section>
  );
};

export default Hero;
