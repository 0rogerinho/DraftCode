import { Route, Routes } from 'react-router-dom';
import ChallengeInfoPage from '../pages/ChallengeInfoPage';
export type IJsonParse = {
  id: number;
  title: string;
  content: string;
  languages: string[];
  level: string;
  image: string;
  figma: string;
};

const DescriptionChallengesRouter = () => {
  const access_challenge = localStorage.getItem('challenge') ?? null;
  const challenge: IJsonParse | null = access_challenge
    ? (JSON.parse(access_challenge) as IJsonParse)
    : null;

  return (
    <Routes>
      {challenge?.title && (
        <Route
          path={`${challenge.title.replace(/[^\w$]/g, '')}`}
          element={<ChallengeInfoPage />}
        />
      )}
    </Routes>
  );
};

export default DescriptionChallengesRouter;
