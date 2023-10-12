import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'
import {IoIosAdd} from 'react-icons/io'

type DataQuestion = {
  title: string, 
  content: string,
}

const QuestionCard = ({title, content}: DataQuestion) => {
  const [showCard, setShowCard ] = React.useState(false)
  function handleShowCard (){
    setShowCard(!showCard)
  }
  return (
    <div className='px-[5%] mb-9'>
      <div onClick={handleShowCard} className='flex justify-between items-center'>
        <h1 className={`${showCard ? 'text-violet-800': 'text-white'}      text-xl cursor-pointer font-semibold`} >{title}</h1>
        <div className={`${showCard ? 'text-violet-800': 'text-white'} cursor-pointer`}>{showCard ?<AiOutlineMinus size={16}/>: <IoIosAdd size={20}/>}</div>
      </div>
      <p className={`${showCard ? 'block' : 'hidden'} mt-3 lg:w-[70%] text-zinc-400`}>{content}</p>
    </div>
  )
}

export default QuestionCard
