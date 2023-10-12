import QuestionCard from "./QuestionCard"

const Questions = () => {
  const DataQuestion = [{
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
  {
    title: 'Posso usar no meu portfolio ?',
    content: 'Lorem ipsum dolor sit amet consectetur. Purus eleifend platea nibh bibendum facilisis vel eleifend facilisi mauris. Sapien quis dolor adipiscing placerat. Urna dolor pellentesque arcu etiam nullam volutpat.'
  },
]
  return (
    <div className="mt-20 lg:mt-52">
      {DataQuestion.map(({title, content}) => {
        return <QuestionCard title={title} content={content}/>
      })}
    </div>
  )
}

export default Questions
