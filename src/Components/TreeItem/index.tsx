import React from 'react';
import { AiFillLock } from 'react-icons/ai';

import {
  Container,
  VerticalLine,
  SubContainer,
  HorizontalLine,
  Square,
  BlockSquare
} from './styles';

interface PropsTypes {
  Icon?: any;
  iconSize?: number;
  color?: string;

  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const TreeItem: React.FC<PropsTypes> = ({
  Icon = AiFillLock,
  iconSize,
  color,
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

        {
          Icon === AiFillLock ? (
            <BlockSquare>
              <Icon size={24} color='#6B7274' />
            </BlockSquare>
          ) : (
            <Square color={color}>
              <Icon color={color} size={iconSize} />
            </Square>
          )
        }

        {right ? <HorizontalLine /> : null}
      </SubContainer>

      { bottom ? <VerticalLine /> : null}
    </Container>
  );
}

export default TreeItem;