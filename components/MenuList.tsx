import type { NextPage } from 'next';
import styled from 'styled-components';
import MenuListSub from './MenuListSub';

const Wrap = styled.dl``;
export type MenuListProps = {
  menus: {};
};

const MenuList: NextPage<MenuListProps> = ({ menus }) => {
  const menuKeys = Object.keys(menus);
  console.log(menuKeys);
  return (
    <Wrap>
      {menuKeys.map((val, index) => {
        <div key={index}>{val}</div>;
      })}
    </Wrap>
  );
};

export default MenuList;
