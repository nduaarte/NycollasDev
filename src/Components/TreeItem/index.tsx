import React from 'react';
import { FaLock } from 'react-icons/fa';

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

const TreeItem: React.FC<PropsTypes> = ({ Icon = FaLock, top, bottom, left, right}) => {
  return(
    <Container>
      { top ? <VerticalLine /> : null }

      <SubContainer>
        { left ? <HorizontalLine /> : null}

        <Square>
          <Icon />
        </Square>
        
        { right ? <HorizontalLine /> : null}
      </SubContainer>

      { bottom ? <VerticalLine /> : null }
    </Container>
  );
}

export default TreeItem;