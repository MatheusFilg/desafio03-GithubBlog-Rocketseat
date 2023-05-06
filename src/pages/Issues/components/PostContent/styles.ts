import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 2.5rem 2rem;
  gap: 1.5rem;

  width: 54rem;
  height: 26rem;

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.6rem;
  }
  a {
    color: ${(props) => props.theme['blue-100']};
    border-bottom: 1px solid ${(props) => props.theme['blue-100']};
  }

  img {
    width: 100%;
  }

  pre {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 50rem;
    height: 10rem;
    padding: 1rem;

    background: ${(props) => props.theme['gray-700']};
    border-radius: 2px;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  code {
    font-family: 'Fira Code' !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 1rem !important;
    line-height: 1.6rem !important;
  }
`

// export const CodeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 1rem;
//   gap: 0.5rem;

//   width: 50rem;
//   height: 8rem;

//   background: ${(props) => props.theme['gray-700']};
//   border-radius: 2px;
// `

// export const CodeContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;

//   gap: 0.5rem;

//   font-family: 'Fira Code';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 1.6rem;

//   p {
//     color: ${(props) => props.theme['green-100']};
//   }

//   span {
//     color: ${(props) => props.theme['gray-400']};
//     margin-left: 3rem;
//   }
// `
