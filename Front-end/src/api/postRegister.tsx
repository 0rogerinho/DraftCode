/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

type IRegister = {
  username: string;
  email: string;
  password: string;
};

type IPost = {
  access_token: string;
};

const postRegister = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function registerUser({ username, email, password }: IRegister) {
    try {
      setLoad(true);
      const response = await HTTP.post<IPost>('login/register', {
        username,
        email,
        password,
      });
      const json = response.data;

      setLoad(false);

      localStorage.setItem('token', json.access_token);

      setError(null);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data as { message: string };
        setError(errorMessage.message);
        setLoad(false);
        console.log(errorMessage);
      }
    }
  }

  return { registerUser, load, error };
};

export default postRegister;
