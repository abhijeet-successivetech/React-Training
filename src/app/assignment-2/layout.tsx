import Sidebar from '@/component/Sidebar';
import data from './data.json';
import React, { ReactNode } from 'react';

interface LayoutInterface {
  children : ReactNode | ReactNode[];
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <Sidebar title="Assignment 1" data={data}>
      {children}
    </Sidebar>
  );
}
export default Layout;
