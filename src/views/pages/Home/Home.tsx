import React from 'react';
import { AppDispatch, useAppDispatch } from 'src/core/appStore';
import { login } from 'src/core/auth/effects/auth.effects';

interface Props {}

const Home = (props: Props) => {
  const appDispatch: AppDispatch = useAppDispatch();
  const handleClick = () => {
    appDispatch(login({ emailId: 'lamhungnuce02@gmail.com', password: 'a123456' }));
  };
  return (
    <div>
      <div>home</div>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Home;
