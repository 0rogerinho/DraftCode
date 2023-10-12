// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { DataChallengesContext } from '../../../context/useDataChallengesContext';
import { useContext } from 'react';
import Card from './Card';

const Challenges = () => {
  const dataChallenges = useContext(DataChallengesContext);
  return (
    <div className="mt-[130px] p-[5%] ">
      <h1 className="text-3xl text-white font-bold text-center mb-10">
        Desafios Recentes
      </h1>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        centeredSlides={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          500: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.3 },
          1280: { slidesPerView: 3.1 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataChallenges.map(
          ({ id, title, content, languages, level, image }) => {
            return (
              <SwiperSlide key={id} className="flex gap-6 ">
                <Card
                  id={id}
                  title={title}
                  content={content}
                  level={level}
                  image={image}
                  languages={languages}
                />
              </SwiperSlide>
            );
          },
        )}
      </Swiper>
    </div>
  );
};
export default Challenges;
