import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme['blue-500']};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 18.5rem;
  width: 100%;
`
export const LeftEffect = styled.img`
  width: 25.5rem;
  height: 11.75rem;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;

  margin-bottom: 3.5rem;

  img {
    width: 2.8rem;
    height: 2.5rem;
  }

  span {
    font-family: 'Coda';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.4rem;

    text-transform: uppercase;

    color: ${(props) => props.theme['blue-100']};
  }
`

export const RigthEffect = styled.img`
  width: 23.19rem;
  height: 14.75rem;
`
