import React from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta
          name="description"
          content="Todo App created with T3 Stack (create-t3-app)"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
