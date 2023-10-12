/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

type ILogin = {
  email: string;
  password: string;
};

type IPost = {
  access_token: string;
};

const postLogin = () => {
  const [error, setError] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  async function login({ email, password }: ILogin) {
    try {
      setLoad(true);

      const response = await HTTP.post<IPost>('login', { email, password });

      const json = response.data;

      localStorage.setItem('token', json.access_token);

      setLoad(false);

      setError(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(true);
        setLoad(false);
        throw new Error(error.message);
      }
    }
  }

  return { login, load, error };
};

export default postLogin;
