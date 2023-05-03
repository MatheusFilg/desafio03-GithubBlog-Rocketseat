import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 54rem;
  height: 13.25rem;

  padding: 2rem 2.5rem;
  gap: 2rem;

  background: ${(props) => props.theme['blue-500']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -5.5rem;
`
export const AvatarContainer = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 55rem;

  gap: 0.5rem;
`
export const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 37rem;
  height: 2rem;
`

export const GithubWithIcon = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 4.2rem;
  height: 1.2rem;

  gap: 0.5rem;

  border-top: 0p;
  border-bottom: 0px;

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

export const BioContainer = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;

  color: ${(props) => props.theme['gray-300']};

  width: 38rem;

  margin-bottom: 1rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  width: 25.5rem;
`
export const BaseInfo = styled.div`
  display: flex;
  flex-direction: row;
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
