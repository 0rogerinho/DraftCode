import { AiOutlineMail, AiOutlineReload } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import Input from '../login/Input';

import { UseRegister } from '../../context/useRegisterContext';
import React from 'react';
import postLogin from '../../api/postLogin';

import { SubmitHandler, useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type IFormInput = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().email('insira um email valido'),
  password: z
    .string()
    .min(8, { message: 'Deve conter no minimo 8 caracteres' }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(schema) });

  const { openRegister, setOpenRegister } = UseRegister();

  const { login, load, error } = postLogin();

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) =>
    await login({ email, password });
  console.log(errors);

  function handleRegister(event: React.MouseEvent) {
    event.preventDefault();
    setOpenRegister(!openRegister);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          label="Email"
          icon={<AiOutlineMail color="black" />}
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          type="password"
          label="Password"
          icon={<RiLockPasswordLine color="black" />}
          {...register('password')}
          error={errors.password?.message}
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
            Registre-se
          </button>
        </p>
      </div>

      <div className="hidden md:flex w-[330px]">
        <img className="rounded-e-md" src="/login.png" />
      </div>
    </form>
  );
};

export default Login;
