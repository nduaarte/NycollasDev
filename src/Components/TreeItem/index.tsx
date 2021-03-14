import React from 'react';
import { AiFillLock } from 'react-icons/ai';

import {
  Container,
  VerticalLine,
  SubContainer,
  HorizontalLine,
  Square
} from './styles';

interface PropsTypes {
  Icon?: any;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const TreeItem: React.FC<PropsTypes> = ({
  Icon = AiFillLock,
  top,
  bottom,
  left,
  right
}) => {
  return (
    <Container>
      { top ? <VerticalLine /> : null}

      <SubContainer>
        {left ? <HorizontalLine /> : null}

        <Square>
          <Icon color='#6B7274' size={24} />
        </Square>

        {right ? <HorizontalLine /> : null}
      </SubContainer>

      { bottom ? <VerticalLine /> : null}
    </Container>
  );
}

export default TreeItem;