import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineReload } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Input from '../login/Input';
import { UseRegister } from '../../context/useRegisterContext';
import postRegister from '../../api/postRegister';

const Register = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [correctPassword, SetCorrectPassword] = useState(false);

  const password_hard = /[0-9a-zA-Z$*&@#]/;

  const { username, email, password, confirmPassword } = inputValue;

  const { openRegister, setOpenRegister } = UseRegister();
  const { register, error, load } = postRegister();

  function handleEnter(event: React.MouseEvent) {
    event.preventDefault();
    setOpenRegister(!register);
  }

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    console.log(error);

    e.preventDefault();
    if (confirmPassword === password && confirmPassword != '') {
      SetCorrectPassword(false);
      await register({ username, email, password });
    } else {
      SetCorrectPassword(true);
    }
  }
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleRegister}
      className={`${
        openRegister ? '' : 'hidden'
      } flex relative text-center items-center`}
    >
      <div className="p-5 space-y-3 bg-[#101010] rounded-s-md">
        <div className="flex justify-center gap-2">
          <img src="/logo.svg" alt="Logo DraftCode" />
          <h1 className="text-xl font-bold">DraftCode</h1>
        </div>
        <p className="text-violet-800">
          Registre-se para descobrir novos desafios
        </p>
        <Input
          icon={<HiOutlineMail color="black" />}
          type="text"
          placeholder="Nome de usuario"
          value={username}
          onChange={(e) =>
            setInputValue({ ...inputValue, username: e.target.value })
          }
        />
        <div className="relative">
          <Input
            icon={<HiOutlineMail color="black" />}
            type="text"
            placeholder="Email"
            value={email}
            error={error === 'Unauthorized'}
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
          />
          {error === 'Unauthorized' && (
            <span className="absolute right-0 text-sm mt-1 text-red-600">
              Email em uso
            </span>
          )}
        </div>
        <div className="relative pb-1.5">
          <Input
            icon={<RiLockPasswordLine color="black" />}
            type="password"
            placeholder="Senha"
            value={password}
            error={error?.includes('password is not strong enough')}
            onChange={(e) =>
              setInputValue({ ...inputValue, password: e.target.value })
            }
          />
          {error?.includes('password is not strong enough') && (
            <span className="absolute right-0 text-xs mt-1 text-red-600">
              {password.length < 8 && 'Sua senha deve conter 8 caracteres'}
              {password_hard.test(password) &&
                'Deve conter letra maiuscula, numero e simbolo'}
            </span>
          )}
        </div>
        <Input
          icon={<RiLockPasswordLine color="black" />}
          type="password"
          placeholder="confirmar senha"
          value={confirmPassword}
          error={correctPassword}
          onChange={(e) => {
            SetCorrectPassword(e.target.value != password);
            setInputValue({ ...inputValue, confirmPassword: e.target.value });
          }}
        />
        <div className=" flex flex-col items-center">
          <button className="m-auto border rounded-md h-12 w-full text-[.875rem] border-violet-800 font-semibold hover:scale-105 transition-all">
            {load ? (
              <AiOutlineReload className="w-fit animate-spin m-auto" />
            ) : (
              'Registre-se'
            )}
          </button>
          <span
            className={` text-sm text-red-600 ${
              correctPassword ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Preencha todos os campos
          </span>
        </div>
        <p className="mt-2 text-sm">
          Já tem uma conta ?{' '}
          <button onClick={handleEnter} className="text-[#830FDE]">
            Entre
          </button>
        </p>
      </div>
      <div
        className={`flex ${
          openRegister
            ? 'hidden md:block w-[408px]'
            : 'hidden md:block w-[330px]'
        }`}
      >
        <img className="rounded-e-md" src="/login.png" />
      </div>
    </form>
  );
};

export default Register;
