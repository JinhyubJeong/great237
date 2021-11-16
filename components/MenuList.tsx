import type { NextPage } from 'next';
import styled, { css } from 'styled-components';
import MenuListSub from './MenuListSub';

const Wrap = styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 2rem;
      margin: 15rem 0;
      white-space: pre-wrap;
      h3 {
        position: relative;
        font-size: ${theme.fontSizes.f42};
        text-align: center;
        margin-bottom: 8rem;
        :before {
          position: absolute;
          top: 2rem;
          left: 0;
          content: '';
          height: 0.3rem;
          border-left: 17rem solid ${theme.colors.black};
        }
        :after {
          position: absolute;
          top: 2rem;
          right: 0;
          content: '';
          height: 0.3rem;
          border-right: 17rem solid ${theme.colors.black};
        }
        p {
          margin-top: 0.5rem;
          font-size: ${theme.fontSizes.f18};
          color: ${theme.colors.gray8};
        }
      }
    `;
  }}
`;
export type MenuListProps = {
  menu: {
    title: string;
    menus: {
      id: number;
      name: string;
      value: number;
      list: string;
    }[];
  };
};

const MenuList: NextPage<MenuListProps> = ({ menu }) => {
  return (
    <Wrap>
      <h3 dangerouslySetInnerHTML={{ __html: menu.title }}></h3>
      {menu.menus.map((menus) => (
        <MenuListSub key={menus.id} submenu={menus} />
      ))}
    </Wrap>
  );
};

export default MenuList;
