import React, { createContext, useContext, useState } from 'react';

type IOpenLoginContext = {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const openLoginContext = createContext<IOpenLoginContext | null>(null);

export const UseOpenLogin = () => {
  const openLogin = useContext(openLoginContext);
  if (openLogin === null) throw new Error('Context outside the provider');
  return openLogin;
};

const UseOpenLoginContext = ({ children }: React.PropsWithChildren) => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <openLoginContext.Provider value={{ openLogin, setOpenLogin }}>
      {children}
    </openLoginContext.Provider>
  );
};

export default UseOpenLoginContext;
