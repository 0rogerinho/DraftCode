import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import Input from '../login/Input';
import { UseRegister } from '../../context/useRegisterContext';
import React, { useState } from 'react';
import postLogin from '../../api/postLogin';
import { AiOutlineReload } from 'react-icons/ai';

const Login = () => {
  const { openRegister, setOpenRegister } = UseRegister();
  const { login, load, error } = postLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(event: React.MouseEvent) {
    event.preventDefault();
    setOpenRegister(!openRegister);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login({ email, password });
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
      className={`${
        openRegister ? 'hidden' : ''
      }  flex items-center bg-[#101010] rounded-md`}
    >
      <div className="p-5 text-center space-y-4">
        <div className="flex justify-center items-center gap-2">
          <img src="/logo.svg" alt="Logo DraftCode" />

          <h1 className="text-xl font-bold">DraftCode</h1>
        </div>

        <p className="text-violet-800">Entre na sua conta</p>
        <Input
          icon={<HiOutlineMail color="black" />}
          type="text"
          placeholder="Email"
          error={error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={<RiLockPasswordLine color="black" />}
          type="password"
          placeholder="Senha"
          error={error}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div
          className={`flex ${error ? 'justify-between' : 'flex-row-reverse'}`}
        >
          {error && (
            <span className="text-sm text-red-500">
              Email ou senha incorreta
            </span>
          )}

          <p className="text-[#9F9F9F] text-xs md:text-sm text-right">
            Esqueci minha senha
          </p>
        </div>

        <button className="m-auto border rounded-md h-10 w-full text-[.875rem] border-violet-800 font-semibold hover:scale-105 transition-all">
          {load ? (
            <AiOutlineReload className="w-fit animate-spin m-auto" />
          ) : (
            'Entrar'
          )}
        </button>

        <p className="text-sm">
          Não tem uma conta?{' '}
          <button onClick={handleRegister} className="text-[#830FDE]">
            'Registre-se'
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

export default Login;
