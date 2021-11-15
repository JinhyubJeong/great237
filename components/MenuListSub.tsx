import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrap = styled.dt``;
export type MenuListSubProps = {
  text: {
    id: number;
  };
};

const MenuListSub: NextPage = () => {
  return (
    <Wrap>
      <span></span>
      <span></span>
      <span></span>
    </Wrap>
  );
};

export default MenuListSub;
