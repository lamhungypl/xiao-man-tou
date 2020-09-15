import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header';

interface Props {}

const LayoutContainer = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutContainer;
