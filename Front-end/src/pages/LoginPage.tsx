import Login from '../components/login/Login';
import Register from '../components/login/Register';
import { UseOpenLogin } from '../context/UseOpenLoginContext';

import UseRegisterContext from '../context/useRegisterContext';

const LoginPage = () => {
  const { openLogin, setOpenLogin } = UseOpenLogin();

  function handleClick() {
    setOpenLogin(!openLogin);
  }

  return (
    <UseRegisterContext>
      <dialog
        onClick={handleClick}
        open={openLogin}
        className={` fixed z-50 w-screen h-screen bg-[rgb(0,0,0,0.5)] ${
          openLogin ? 'flex' : ''
        }  justify-center items-center`}
      >
        <div onClick={(event) => event.stopPropagation()}>
          <Login />
          <Register />
        </div>
      </dialog>
    </UseRegisterContext>
  );
};

export default LoginPage;
