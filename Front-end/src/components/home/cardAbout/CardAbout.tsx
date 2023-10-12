import Card from './Card';

const DataCardAbout = [
  {
    id: 1,
    title: 'Fale alguma coisa aqui',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sapien amet feugiat varius nibh et convallis. Elementum vitae fames nulla consectetur',
  },
  {
    id: 2,
    title: 'Fale alguma coisa aqui',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sapien amet feugiat varius nibh et convallis. Elementum vitae fames nulla consectetur',
  },
  {
    id: 3,
    title: 'Fale alguma coisa aqui',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sapien amet feugiat varius nibh et convallis. Elementum vitae fames nulla consectetur',
  },
];

const CardAbout = () => {
  return (
    <div className=" px-[5%] mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {DataCardAbout.map(({ title, content, id }) => {
        return <Card title={title} content={content} key={id} />;
      })}
    </div>
  );
};

export default CardAbout;
