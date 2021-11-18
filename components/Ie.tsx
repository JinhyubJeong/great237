import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import logo_white from '../public/logo_white.svg';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #111;
  font-family: 'Spoqa Han Sans Neo', 'Sans-serif';
  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    div {
      margin-bottom: 2rem;
    }
    h2 {
      color: #fff;
      font-size: 2.4rem;
      font-weight: bold;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.4rem;
      color: #888;
    }
  }
`;

const Ie: NextPage = () => {
  return (
    <Wrap>
      <section>
        <div>
          <Image src={logo_white} alt="로고" width={400} height={100} />
        </div>
        <h2>Interent Explore는 지원하지 않습니다</h2>
        <p>Chrome, Safari, Firefox, Edqe Brower를 이용 해주세요</p>
      </section>
    </Wrap>
  );
};

export default Ie;
