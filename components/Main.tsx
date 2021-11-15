import type { NextPage } from 'next';
import styled, { css } from 'styled-components';
import MenuList from './MenuList';

const Wrap = styled.div`
  ${({ theme }) => {
    return css`
      width: 64rem;
      margin: 0 auto;
      section:first-child {
        width: 100%;
        height: 55rem;
        text-align: center;
        background: no-repeat url(/img/img01.jpg);
        background-size: cover;
        h1 {
          background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.8) 100%
          );
          img {
            padding: 1.5rem 0;
            width: 25%;
            filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.6));
          }
        }
      }
      > section:nth-child(2) {
        text-align: right;
        padding: 0 2rem;
        img {
          margin-top: -3rem;
          width: 60%;
          margin-bottom: 6rem;
        }
        > ul {
          margin-bottom: 6rem;
          > li {
            font-size: ${theme.fontSizes.f32};
            :nth-child(1) {
              margin-bottom: 1.5rem;
            }
            :nth-child(2) {
              margin-bottom: 5rem;
              span {
                color: #8b2428;
              }
              a {
                margin-left: 1rem;
              }
            }
            :nth-child(3),
            :nth-child(4),
            :nth-child(5) {
              margin-bottom: 1rem;
              font-size: ${theme.fontSizes.f18};
              color: ${theme.colors.gray8};
            }
          }
        }
      }
      > section:nth-child(3) {
        margin-bottom: 15rem;
      }

      > section:nth-child(4) {
        text-align: right;
        > div {
          width: 100%;
          height: 40rem;
          background: no-repeat url(/img/img02.jpg);
          background-size: cover;
          img {
            padding: 0 2rem;
            width: 30%;
            margin-top: -8rem;
          }
        }
      }
    `;
  }}
`;

const Main: NextPage = () => {
  const content = {
    'lnuch set': {
      '런치 토마토': {
        value: 14000,
        list: '그레잇 쉐프 추천 토마토 파스타 + 식전빵 + 샐러드',
      },
      '런치 크림': {
        value: 14000,
        list: '그레잇 쉐프 추천 크림 파스타 + 식전빵 + 샐러드',
      },
      '런치 오일': {
        value: 14000,
        list: '그레잇 쉐프 추천 오일 파스타 + 식전빵 + 샐러드',
      },
    },
    Salad: {
      기본셀러드: {
        value: 8000,
        list: '간편하게 즐실 수 있는 계절채소 샐러드',
      },
      시저셀러드: {
        value: 17000,
        list: '로메인상추와 파마산치즈, 견과류, 양파가 들어간 신선한 샐러드',
      },
    },
  };

  return (
    <Wrap>
      <section>
        <h1>
          <img src="/img/logo_white.svg" alt="그레잇로고" />
        </h1>
      </section>
      <section>
        <img src="/img/great_kor.svg" alt="한글그레잇로고" />
        <ul>
          <li>서울시 강남구 논현동 23-7</li>
          <li>
            great<span>237</span> 예약문의
            <a href="tel:02-549-2370">02-549-2370</a>
          </li>

          <li>월 ~ 금 : 오전 10:00 ~ 오후 09:00</li>
          <li>토요일 사전예약하시면 반드시 오픈합니다</li>
          <li>일요일 사전예약하셔도 반드시 휴무합니다</li>
        </ul>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.669087969163!2d127.02171592487902!3d37.51406216669902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e8bb7607bf%3A0x3a0a022b0898995f!2z6re466CI7J6H7J207IK87Lmg!5e0!3m2!1sko!2skr!4v1636949504003!5m2!1sko!2skr"
          width="640"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
      <section>
        <div>
          <img src="/img/menu.svg" alt="메뉴" />
        </div>

        <MenuList menus={content} />
      </section>
    </Wrap>
  );
};

export default Main;
