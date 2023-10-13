import React from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineReload } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';

import Input from '../login/Input';

import { UseRegister } from '../../context/useRegisterContext';
import postRegister from '../../api/postRegister';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { RegisterSchema } from '../validations/RegisterSchema';

type IFormInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(RegisterSchema) });

  const { registerUser, load, error } = postRegister();

  const onSubmit: SubmitHandler<IFormInput> = async ({
    username,
    email,
    password,
  }) => await registerUser({ username, email, password });
  const { openRegister, setOpenRegister } = UseRegister();

  function handleEnter(event: React.MouseEvent) {
    event.preventDefault();
    setOpenRegister(!register);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        openRegister ? '' : 'hidden'
      } flex text-center items-center`}
    >
      <div className="p-5 space-y-4 bg-[#101010] rounded-s-md">
        <div className="flex justify-center gap-2">
          <img src="/logo.svg" alt="Logo DraftCode" />
          <h1 className="text-xl font-bold">DraftCode</h1>
        </div>
        <p className="text-violet-800">
          Registre-se para descobrir novos desafios
        </p>
        <Input
          label="Nome de usuario"
          icon={<MdOutlineAccountCircle color="black" />}
          error={errors.username?.message}
          {...register('username')}
        />
        <div className="relative">
          <Input
            label="Email"
            icon={<HiOutlineMail color="black" />}
            error={errors.email?.message}
            {...register('email')}
          />
          {error && (
            <span className="absolute text-sm right-0 mt-1 text-red-500">
              Email em uso
            </span>
          )}
        </div>

        <Input
          type="password"
          label="Password"
          icon={<RiLockPasswordLine color="black" />}
          error={errors.password?.message}
          {...register('password')}
        />
        <Input
          type="password"
          label="Confirmar senha"
          icon={<RiLockPasswordLine color="black" />}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
        <div className="pt-4 flex flex-col items-center">
          <button className="m-auto border rounded-md h-12 w-full text-[.875rem] border-violet-800 font-semibold hover:scale-105 transition-all">
            {load ? (
              <AiOutlineReload className="w-fit animate-spin m-auto" />
            ) : (
              'Registre-se'
            )}
          </button>
        </div>
        <p className="mt-2 text-sm">
          Já tem uma conta ?{' '}
          <button onClick={handleEnter} className="text-[#830FDE]">
            Entre
          </button>
        </p>
      </div>
      <div className="hidden md:flex w-[390px] h-[611px]">
        <img className="rounded-e-md" src="/login.png" />
      </div>
    </form>
  );
};

export default Register;
