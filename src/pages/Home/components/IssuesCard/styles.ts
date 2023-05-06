import styled from 'styled-components'

export const IssuesCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.25rem;
  padding: 2rem;

  width: 26rem;
  height: 16.25rem;

  border: 1xp hidden;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 10px;

  &:hover {
    border: 2px solid ${(props) => props.theme['gray-500']};
  }
`

export const IssuesCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;

  h1 {
    width: 17rem;
    height: 4rem;

    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: ${(props) => props.theme['gray-400']};

    margin-top: 0.25rem;
  }
`

export const IssuesCardPost = styled.p`
  display: block;
  display: -webkit-box;

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Overflow do texto para fazer parecer que tem mais 
  coisas com ... no final */

  width: 100%;

  color: ${(props) => props.theme['gray-300']};

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
`
