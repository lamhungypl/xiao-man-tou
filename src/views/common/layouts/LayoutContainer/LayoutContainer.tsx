import React from 'react';
import { Outlet } from 'react-router-dom';

interface Props {}

const LayoutContainer = (props: Props) => {
  return (
    <div>
      <div>container</div>
      <Outlet />
    </div>
  );
};

export default LayoutContainer;
