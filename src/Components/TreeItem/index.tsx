import React from 'react';
import { AiFillLock } from 'react-icons/ai';

import { Container, VerticalLine, SubContainer, HorizontalLine, Square, BlockSquare } from './styles';

interface PropsTypes {
  Icon?: any;
  color?: string;

  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const TreeItem: React.FC<PropsTypes> = ({Icon = AiFillLock, color, top, bottom, left, right }) => {
  // const windowWidth = window.innerWidth;
  // const [isHandleIcon, setIsHandleIcon] = useState(false);

  // useEffect(() => {
  //   windowWidth < 1100 ? setIsHandleIcon(true) : setIsHandleIcon(false);
  // }, [windowWidth]);

  return (
    <Container>
      { top ? <VerticalLine /> : null}

      <SubContainer>
        {left ? <HorizontalLine /> : null}

        {
          Icon === AiFillLock ? (
            <BlockSquare>
              <Icon size={19} color='#6B7274' />
            </BlockSquare>
          ) : (
            <Square color={color}>
              <Icon color={color} size={18} />
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