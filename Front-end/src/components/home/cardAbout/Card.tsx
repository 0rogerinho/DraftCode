import {BsArrowRightShort} from 'react-icons/bs'

type Data = {
  title: string,
  content: string,
}

const Card = ({title, content}: Data) => {
  return (
    <div className="w-[90%] md:w-[55%] lg:w-[30%] 2xl:w-[20%] p-6 bg-secondary flex flex-col items-center border border-[#2e2e2e] rounded-lg text-center text-white">
      <img className='mb-7' src="CardAbout.png" />
      <h1 className="font-bold mb-1">{title}</h1>
      <p className="text-zinc-400 mb-5">{content}</p>
      <button className='group text-violet-800 hover:scale-105 transition duration-300'>Saiba mais <BsArrowRightShort className='inline group-hover:rotate-90 transition duration-500 ' size={18}/></button>
    </div>
  )
}

export default Card
