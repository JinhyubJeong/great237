import type { NextPage } from 'next';
import Main from '../components/Main';
import { isIE } from 'react-device-detect';
import Ie from '../components/Ie';

const Home: NextPage = () => {
  if (isIE) return <Ie />;
  return <Main />;
};

export default Home;
