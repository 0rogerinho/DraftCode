import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataChallengesContext } from '../../../context/useDataChallengesContext';

type IChallenges = {
  id: number;
  title: string;
  content: string;
  languages: string[];
  level: string;
  image: string;
};

const Card = ({ id, title, content, languages, level, image }: IChallenges) => {
  const dataChallenges = useContext(DataChallengesContext);
  const navigate = useNavigate();

  function handleClick() {
    const challenge = dataChallenges.find((challenge) => challenge.id === id);

    localStorage.setItem('challenge', JSON.stringify(challenge));

    navigate(`/desafio/${title.replace(/[^\w$]/g, '')}`);

    console.log(localStorage.getItem('challenge'));
  }
  return (
    <div
      className="bg-secondary text-white rounded-lg border border-[#2e2e2e] mt-3 w-[100%] max-w-[400px] md:w-[340px] lg:w-[380px] cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="block w-full h-[200px] object-cover rounded-t-lg"
        src={image}
      />
      <div className="space-y-3 p-6">
        <p className="w-fit border-b border-violet-800 text-zinc-400">
          {level}
        </p>

        <h1 className="text-5 font-bold">{title}</h1>
        <p className="text-zinc-400">{content}</p>
        <div className="flex gap-4">
          {languages.map((language) => {
            return (
              <p className="px-2 py-1 bg-violet-800 rounded-lg" key={language}>
                {language}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
