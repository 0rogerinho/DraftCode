import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import FaqsPage from './pages/FaqsPage';

import UseOpenLoginContext from './context/UseOpenLoginContext';
import LoginPage from './pages/LoginPage';
import UseRegisterContext from './context/useRegisterContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DescriptionChallengesRouter from './routers/ChallengeInfoRouter';

const App = () => {
  return (
    <div className=" relative 2xl:container m-auto">
      <UseOpenLoginContext>
        <UseRegisterContext>
          <LoginPage />
        </UseRegisterContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desafios" element={<ChallengesPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/desafio/*" element={<DescriptionChallengesRouter />} />
        </Routes>
        <Footer />
      </UseOpenLoginContext>
    </div>
  );
};

export default App;
