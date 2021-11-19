import type { NextPage } from 'next';
// import styled from 'styled-components';
import Image from 'next/image';
import logo_color from '../public/logo_color.svg';

const Ie: NextPage = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          fontFamily: 'Sans-serif',
        }}
      >
        <section
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              marginBottom: '3rem',
            }}
          >
            <Image src={logo_color} alt="로고" width={400} height={100} />
          </div>
          <h2
            style={{
              fontSize: '2.4rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
            }}
          >
            Interent Explore는 지원하지 않습니다
          </h2>
          <p
            style={{
              color: '#888',
              fontSize: '1.8rem',
            }}
          >
            Chrome, Safari, Firefox, Edqe Brower를 이용 해주세요
          </p>
        </section>
      </div>
    </div>
  );
};

export default Ie;
