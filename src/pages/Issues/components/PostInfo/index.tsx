import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  BackButton,
  PostInfoButtons,
  RedirectButton,
  PostInfoContainer,
  PostTitle,
  DataContainer,
  BaseData,
} from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoButtons>
        <BackButton href="/">
          <CaretLeft size={12} color="#3294f8" />
          <span>voltar</span>
        </BackButton>

        <RedirectButton href="https://github.com/MatheusFilg">
          <span>ver no github</span>
          <ArrowSquareUpRight size={12} color="#3294f8" />
        </RedirectButton>
      </PostInfoButtons>

      <PostTitle>JavaScript data types and data structures</PostTitle>

      <DataContainer>
        <BaseData>
          <GithubLogo size={18} color="#3a536b" />
          <h2>cameronwll</h2>
        </BaseData>
        <BaseData>
          <CalendarBlank size={18} color="#3a536b" />
          <h2>Há 1 dia</h2>
        </BaseData>
        <BaseData>
          <ChatCircle size={18} color="#3a536b" weight="fill" />
          <span>5</span>
          <h2>comentários</h2>
        </BaseData>
      </DataContainer>
    </PostInfoContainer>
  )
}
