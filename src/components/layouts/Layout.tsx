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
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-indigo-900">
        <main className="container mx-auto flex h-full flex-1 items-center justify-center py-5 sm:py-7 md:py-8 lg:py-10 xl:py-12">
          {children}
        </main>
        <footer className="w-full bg-blue-600 p-5">
          <p className="text-center text-xl font-bold text-white">Footer</p>
        </footer>
      </div>
    </>
  );
};
