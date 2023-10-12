import { useContext } from 'react';
import { DataChallengesContext } from '../../context/useDataChallengesContext';
import ChallengsCard from '../home/challengeCarousel/Card';

const Challenges = () => {
  const dataChallenges = useContext(DataChallengesContext);

  return (
    <div className="flex flex-wrap gap-2 lg:gap-4 justify-center px-[5%]">
      {dataChallenges.map(({ id, title, content, languages, level, image }) => {
        return (
          <div key={id} className="flex gap-6 ">
            <ChallengsCard
              id={id}
              title={title}
              content={content}
              level={level}
              image={image}
              languages={languages}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Challenges;
