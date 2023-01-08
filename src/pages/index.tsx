import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Login from './login';

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  if (!sessionData) {
    return <Login />;
  }

  return <div>Homepage</div>;
};

export default Home;
