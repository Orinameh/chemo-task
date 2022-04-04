import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalBackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.74);
  z-index: 500;
`;

const ModalContainer = styled.div`
  background-color: var(--white-color);
  margin: 5rem 40rem;
  border-radius: 5px;
  overflow: hidden;
`;

const ModalCloseIcon = styled.div`
  --dimension: 20px;
  position: relative;
  float: right;
  margin: 0.5em;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--focus-color);
  color: var(--black-color);
  padding: .5rem;
  width: var(--dimension);
  height: var(--dimension);
  display: flex;
  align-items: center;

  > span {
      font-size: 1.5rem;
      font-weight: bold;
  }
`;


const ModalContent = styled.div`
  padding: ${({noContentPadding}) => (noContentPadding ? 0 : '2rem')};

  > p {
      font-size: 1.5rem;
  }
`;

const Modal = ({
    isShown,
    hide,
    children,
    noContentPadding = false,
  }) => {
    const modal = (
      <ModalBackDrop>
          <ModalContainer>
            <ModalCloseIcon>
              <span tabIndex={0} role="button" aria-label='close modal' onClick={hide} onKeyDown={hide}>&#x2715; </span>
            </ModalCloseIcon>
            <ModalContent {...{ noContentPadding }}>{children}</ModalContent>
          </ModalContainer>
      </ModalBackDrop>
    );
  
    return isShown ? createPortal(modal, document.body) : null;
  };
  
  export default Modal;