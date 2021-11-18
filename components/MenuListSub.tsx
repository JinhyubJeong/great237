import type { NextPage } from 'next';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
  ${({ theme }) => {
    return css`
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      > div {
        p {
          :first-child {
            display: flex;
            align-items: center;
            font-size: ${theme.fontSizes.f24};
            margin-bottom: 0.8rem;
            span {
              vertical-align: middle;
              font-size: ${theme.fontSizes.f18};
              color: ${theme.colors.gray8};
              font-weight: 100;
            }
          }
          :last-child {
            color: ${theme.colors.gray8};
            line-height: 2rem;
          }
        }
      }
      > p {
        font-size: ${theme.fontSizes.f24};
      }
    `;
  }}
`;
export type MenuListSubProps = {
  submenu: {
    name: string;
    value: number;
    list: string;
  };
};

const MenuListSub: NextPage<MenuListSubProps> = ({ submenu }) => {
  return (
    <Wrap>
      <div>
        <p dangerouslySetInnerHTML={{ __html: submenu.name }}></p>
        <p>{submenu.list}</p>
      </div>
      <p>{submenu.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
    </Wrap>
  );
};

export default MenuListSub;
