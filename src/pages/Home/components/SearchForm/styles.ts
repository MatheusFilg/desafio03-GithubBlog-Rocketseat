import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 54rem;

  gap: 1rem;
`

export const SearchFormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h1 {
    font-size: 1.125rem;
  }
`

export const SearchFormCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  text-align: right;

  color: ${(props) => props.theme['gray-400']};

  span & p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`
export const SearchFormInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 3.125rem;
  gap: 0.5rem;
  padding: 0.75rem 1rem;

  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  background: ${(props) => props.theme['blue-900']};
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    width: 100%;
    height: 1.625rem;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['gray-500']};
  }
`
