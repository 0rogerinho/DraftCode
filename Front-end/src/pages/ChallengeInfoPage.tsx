import Creator from '../components/challengeInfo/creator/Creator';
import Description from '../components/challengeInfo/description/Description';
import Requisition from '../components/challengeInfo/requisition/Requisition';
import { IJsonParse } from '../routers/ChallengeInfoRouter';

const DescriptionChallengesPages = () => {
  const access_challenge = localStorage.getItem('challenge') ?? null;
  const challenge: IJsonParse | null = access_challenge
    ? (JSON.parse(access_challenge) as IJsonParse)
    : null;
  return (
    <div className="py-4 px-[5%] md:px-[7.5rem]">
      <Description />
      {challenge?.title && (
        <iframe
          className="w-full h-[400px] my-4"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0dlIPUElNWAhGe1S2rKUYH%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D62r6Qd4V0o6Xedfr-1"
        />
      )}
      <Requisition />
      <Creator />
    </div>
  );
};

export default DescriptionChallengesPages;
