import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;
  height: 10.5rem;

  padding: 2rem;
  gap: 1.25rem;

  background: ${(props) => props.theme['blue-500']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -5.5rem;
`
export const PostInfoButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 1.2rem;
`

const BaseButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  border-top: 0px;
  border-bottom: 0px;

  color: ${(props) => props.theme['blue-100']};

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['blue-100']};
  }

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.19rem;

    text-transform: uppercase;
    cursor: pointer;

    color: ${(props) => props.theme['blue-100']};
  }
`

export const BackButton = styled(BaseButton)`
  width: 4.19rem;
`

export const RedirectButton = styled(BaseButton)`
  width: 7.19rem;
`
export const PostTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  width: 25.5rem;
`
export const BaseData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 10rem;

  h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6rem;
  }

  h2 & span {
    color: ${(props) => props.theme['gray-200']};
  }
`
