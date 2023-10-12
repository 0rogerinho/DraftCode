import React, { createContext, useContext, useState } from 'react';

type IOpenLoginContext = {
  openRegister: boolean;
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const registerContext = createContext<IOpenLoginContext | null>(null);

export const UseRegister = () => {
  const openLogin = useContext(registerContext);
  if (openLogin === null) throw new Error('Context outside the provider');
  return openLogin;
};

const UseRegisterContext = ({ children }: React.PropsWithChildren) => {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <registerContext.Provider value={{ openRegister, setOpenRegister }}>
      {children}
    </registerContext.Provider>
  );
};

export default UseRegisterContext;
