import type { NextPage } from 'next';
import styled, { css } from 'styled-components';
import MenuList from './MenuList';
import Image from 'next/image';
import logo_color from '../public/logo_color.svg';
import logo_white from '../public/logo_white.svg';
import great_kor from '../public/great_kor.svg';
import menu from '../public/menu.svg';

const Wrap = styled.div`
  ${({ theme }) => {
    return css`
      width: 64rem;
      margin: 0 auto;
      position: relative;
      background-color: ${theme.colors.white};
      section {
        padding: 0 2rem;
      }
      section:first-child {
        text-align: center;
        h1 {
          padding: 1.5rem 0;
        }
        span {
          display: block;
          width: 100%;
          height: 55rem;
          background: no-repeat url('/img01.jpg');
          background-size: cover;
          border-radius: 3rem;
        }
      }
      > section:nth-child(2) {
        text-align: right;

        div:first-child {
          margin-top: 4rem;
          margin-bottom: 2rem;
        }

        > ul {
          margin-bottom: 6rem;
          > li {
            font-size: ${theme.fontSizes.f24};
            :nth-child(1) {
              line-height: 3.5rem;
              margin-bottom: 2rem;
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
        iframe {
          border-radius: 3rem;
        }
      }
      > section:nth-child(4) {
        text-align: right;
        position: relative;
        div:first-child {
          margin-bottom: 1rem;
        }
        > div:last-child {
          width: 100%;
          height: 40rem;
          background: no-repeat url('/img02.jpg');
          background-size: cover;
          border-radius: 3rem;
        }
      }
      /* section:nth-child(6) 하위 컨포넌트에서 스타일 */
      > section:nth-child(6) {
        position: relative;
        background-color: ${theme.colors.gray3};
        text-align: center;
        color: ${theme.colors.white};
        font-weight: 100;
        div {
          padding-top: 2rem;
          img {
            width: 40%;
            margin: 4rem 0 2rem 0;
          }
        }
        ul {
          padding-bottom: 4rem;
          opacity: 0.5;
          li {
            font-size: ${theme.fontSizes.f18};
            line-height: 3rem;
            a {
              margin-left: 0.5rem;
              color: ${theme.colors.white};
            }
          }
        }
      }
    `;
  }}
`;

const Main: NextPage = () => {
  const content = [
    {
      id: 1,
      title: 'Lunch Set<p>PM12:00~14:00</p>',
      menus: [
        {
          id: 1,
          name: '런치 토마토',
          value: 15400,
          list: '그래잇 쉐프 추천 토마토 파스타 + 식전빵 + 샐러드',
        },
        {
          id: 2,
          name: '런치 크림',
          value: 15400,
          list: '그래잇 쉐프 추천 크림 파스타 + 식전빵 + 샐러드',
        },
        {
          id: 3,
          name: '런치 오일',
          value: 15400,
          list: '그래잇 쉐프 추천 오일 파스타 + 식전빵 + 샐러드',
        },
      ],
    },
    {
      id: 2,
      title: 'Salad',
      menus: [
        {
          id: 1,
          name: '기본샐러드',
          value: 8800,
          list: '간편하게 즐길 수 있는 계절채소 샐러드',
        },
        {
          id: 2,
          name: '시저샐러드',
          value: 18700,
          list: '로메인상추와 파마산치주, 견과류, 양파가 들어간 신선한 샐러드',
        },
        {
          id: 3,
          name: '카프레제샐러드',
          value: 18700,
          list: '신선한 토마토와 모짜렐라치즈 샐러드',
        },
      ],
    },
    {
      id: 3,
      title: 'Pasta',
      menus: [
        {
          id: 1,
          name: '알리오 올리오',
          value: 17600,
          list: '마늘과 올리브,루꼴라, 레드페퍼가 들어간 담백하고 깔끔한 오일 파스타',
        },
        {
          id: 2,
          name: '아마트리치아나 <span>🌶️</span>',
          value: 17600,
          list: '양파, 파프리카, 베이컨이 들어간 매운 토마토 파스타',
        },
        {
          id: 3,
          name: '까르보나라',
          value: 18700,
          list: '양파, 베이컨, 양송이 파마산치즈로 맛을낸 크림 파스타',
        },
        {
          id: 4,
          name: '새우크림<span> 🌶️   매움 or 보통</span>',
          value: 19800,
          list: '신선한 새우살로 맛을내고 페페론치노로 매운맛을 조절가능한 크림 파스타',
        },
        {
          id: 5,
          name: '해산물 크림',
          value: 20900,
          list: '꽃게, 새우, 쭈구미, 오징어, 홍합과 크림소스의 향이 어우러진 풍미 가득한 크림 파스타',
        },
        {
          id: 6,
          name: '해산물 토마토',
          value: 20900,
          list: '꽃게, 새우, 쭈구미, 오징어, 홍합과 토마토 소스의 향이 어우러진 상큼한 토마토 파스타',
        },
      ],
    },
    {
      id: 4,
      title: 'Risotto',
      menus: [
        {
          id: 1,
          name: '버섯 크림 리조토',
          value: 19800,
          list: '새송이, 양송이, 느타리, 표고버섯과 파마산치즈가 들어간 고소한 크림 리조토',
        },
        {
          id: 2,
          name: '버섯 토마토 리조토',
          value: 18700,
          list: '새송이, 양송이, 느타리, 표고버섯과 파마산치즈가 들어간 상큼한 토마토 리조토',
        },
        {
          id: 3,
          name: '해산물 크림 리조토',
          value: 20900,
          list: '꽃게, 새우, 쭈구미, 오징어, 홍합이 들어간 고소한 크림 리조토',
        },
        {
          id: 4,
          name: '해산물 토마토 리조토',
          value: 19800,
          list: '꽃게, 새우, 쭈구미, 오징어, 홍합이 들어간 상큼한 토마토 리조토',
        },
      ],
    },
    {
      id: 5,
      title: 'Pizza',
      menus: [
        {
          id: 1,
          name: '마르게리따피자',
          value: 18700,
          list: '바질, 토마토 소스, 모짜렐라 치즈로 만든 피자',
        },
        {
          id: 2,
          name: '고르곤졸라피자',
          value: 19300,
          list: '고르곤졸라치즈, 아몬드가 어우러진 꿀과 함께 즐기는 담백한 피자',
        },
        {
          id: 3,
          name: '디아볼라피자',
          value: 20400,
          list: '페페로니와 올리브가 가득 들어간 매콤한 피자',
        },
        {
          id: 4,
          name: '루꼴라렌츠피자',
          value: 20900,
          list: '렌츠소스와 루꼴라가 가득 들어간 단백한 피자',
        },
        {
          id: 5,
          name: '꽈뜨로포르마지피자',
          value: 24200,
          list: '까망베르, 브리, 고르곤졸라, 모짜렐라 4가지 치즈가 들어간 피자',
        },
      ],
    },
    {
      id: 6,
      title: 'Dinner Plate',
      menus: [
        {
          id: 1,
          name: '안심스테이크와 감자,채소',
          value: 88000,
          list: '안심스테이크와 각종 채소 및 감자를 함께 즐기실 수 있는 요리',
        },
        {
          id: 2,
          name: '모듬치즈 & 과일',
          value: 33000,
          list: '다양한 치즈 & 크레커와 신선한 과일 플레이트',
        },
      ],
    },
    {
      id: 7,
      title: 'Red Wine<p>코르크 차지 10,000</p>',
      menus: [
        {
          id: 1,
          name: '<img src="/cl.png" alt="" /> 그래잇 하우스 와인 잔',
          value: 10000,
          list: '　　 Carmen Tolten Cabernet Sauvignon / Glass / CHILE',
        },
        {
          id: 2,
          name: '　 그래잇 하우스 와인 병',
          value: 30800,
          list: '　　 Carmen Tolten Cabernet Sauvignon / Bottle / CHILE',
        },
        {
          id: 3,
          name: '　 얄리 리저브 까르메네르',
          value: 49500,
          list: '　　 Yali Reserve Carmenere / CHILE',
        },
        {
          id: 4,
          name: '　 발디비에소 싱글빈야드 까베르네 프랑',
          value: 67100,
          list: '　　 Valdivieso, Single Vineyard Cabernet Franc Reserve / CHILE',
        },
        {
          id: 5,
          name: '　 몬테스 알파',
          value: 74800,
          list: '　　 Montes Alpha / CHILE',
        },
        {
          id: 6,
          name: '<img src="/it.png" alt="" /> 엘레트라 프리미티보 - 니그로아마로',
          value: 74800,
          list: '　　 Elettra Primitivo - Negroamaro / ITALIA \n　　 2020 루카마로니 99점 만점 / 2020년 Best 이탈리안 와인 선정',
        },
        {
          id: 7,
          name: '　 프리미티보 아파시멘토',
          value: 86900,
          list: '　　 Primitivo Appassimento / RONCO DI SASSI / ITALIA \n　　 2017~2020 루카마로니4년연속 99점 만점',
        },
        {
          id: 8,
          name: '　 프리미티보 디 만두리아 리세르바',
          value: 97900,
          list: '　　 Primitivo di Manduria Riserva / RONCO DI SASSI / ITALIA \n　　 2020 루카마로니 98점',
        },
        {
          id: 9,
          name: '<img src="/es.png" alt="" /> 돈멘도 그란 리세르바',
          value: 74800,
          list: '　　 Don Mendo Gran Reserva / SPAIN',
        },
        {
          id: 10,
          name: '　 까사 로호 무쏘 피노누아',
          value: 52800,
          list: '　　 Casa Rojo Musso Pinot Noir / SPAIN',
        },
        {
          id: 11,
          name: '<img src="/pt.png" alt="" /> 파시스 불독',
          value: 52800,
          list: '　　 Paxis, Bulldog / PORTUGAL',
        },
        {
          id: 12,
          name: '<img src="/nz.png" alt="" /> 기센 말보로 피노누아',
          value: 93500,
          list: '　　 Giesen, The Brothers Marlborough Pinot Noir / NEW ZEALAND',
        },
      ],
    },
    {
      id: 8,
      title: 'White Wine<p>코르크 차지 10,000</p>',
      menus: [
        {
          id: 1,
          name: '<img src="/cl.png" alt="" /> 그래잇 하우스 와인 잔',
          value: 10000,
          list: '　　 Carmen Tolten Cabernet Sauvignon / Glass / CHILE',
        },
        {
          id: 2,
          name: '　 그래잇 하우스 와인 병',
          value: 30800,
          list: '　　 Carmen Tolten Cabernet Sauvignon / Bottle / CHILE',
        },
        {
          id: 3,
          name: '<img src="/de.png" alt="" /> 레오나르드 커리쉬 슈페트레제',
          value: 42900,
          list: '　　 Leonard Kreusch Spatlese / GERMANY',
        },
        {
          id: 4,
          name: '<img src="/fr.png" alt="" /> 더 롱 독 로제',
          value: 51700,
          list: '　　 The Long Dog Rose / FRANCE',
        },
        {
          id: 5,
          name: '　 떼땡져 리저브 브륏',
          value: 152900,
          list: '　　 Taittinger,  Reserve Brut / Champagne / FRANCE',
        },
        {
          id: 6,
          name: '<img src="/ar.png" alt="" /> 안델루나 1300 토론테스',
          value: 74800,
          list: '　　 Andeluna, 1300 Torrontes / ARGENTINA',
        },
        {
          id: 7,
          name: '<img src="/pt.png" alt="" /> 아니무스 비뉴 베르데',
          value: 46200,
          list: '　　 Animus Vinho Verde / PORTUGAL',
        },
      ],
    },
  ];

  return (
    <Wrap>
      <section>
        <h1>
          <Image src={logo_color} width={200} height={70} alt="그래잇로고" />
        </h1>
        <span></span>
      </section>
      <section>
        <div>
          <Image
            src={great_kor}
            width={300}
            height={100}
            alt="한글그래잇로고"
          />
        </div>
        <ul>
          <li>
            서울 강남구 논현동 23-7
            <br />
            (도로명) 서울 강남구 학동로7길 29
          </li>
          <li>
            예약문의
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
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </section>

      <section>
        <div>
          <Image src={menu} width={190} height={90} alt="메뉴" />
        </div>
        <div></div>
      </section>
      <section>
        {content.map((menu) => (
          <MenuList key={menu.id} menu={menu} />
        ))}
      </section>
      <section>
        <div>
          <Image src={logo_white} width={180} height={70} alt="그래잇로고" />
        </div>
        <ul>
          <li>
            서울 강남구 논현동 23-7 <br />
            도로명)서울 강남구 학동로7길 29
          </li>
          <li>
            예약문의
            <a href="tel:02-549-2370">02-549-2370</a>
          </li>
          <li>
            <strong>ⓒ great237</strong>
          </li>
        </ul>
      </section>
    </Wrap>
  );
};

export default Main;
