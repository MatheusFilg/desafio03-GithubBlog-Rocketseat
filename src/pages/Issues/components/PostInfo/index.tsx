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
import { IProps } from '../../../Home'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostInfoProps {
  issuesPost: IProps
  isLoading: boolean
}

export function PostInfo({ issuesPost, isLoading }: PostInfoProps) {
  const formattedDate = relativeDateFormatter(issuesPost.created_at)

  return (
    <PostInfoContainer>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <PostInfoButtons>
            <BackButton href="/">
              <CaretLeft size={12} color="#3294f8" />
              <span>voltar</span>
            </BackButton>

            <RedirectButton href={issuesPost.html_url} target="_blankspace">
              <span>ver no github</span>
              <ArrowSquareUpRight size={12} color="#3294f8" />
            </RedirectButton>
          </PostInfoButtons>

          <PostTitle>{issuesPost.title}</PostTitle>

          <DataContainer>
            <BaseData>
              <GithubLogo size={18} color="#3a536b" />
              <h2>{issuesPost.user.login}</h2>
            </BaseData>
            <BaseData>
              <CalendarBlank size={18} color="#3a536b" />
              <h2>{formattedDate}</h2>
            </BaseData>
            <BaseData>
              <ChatCircle size={18} color="#3a536b" weight="fill" />
              <span>{issuesPost.comments}</span>
              <h2>comentários</h2>
            </BaseData>
          </DataContainer>
        </>
      )}
    </PostInfoContainer>
  )
}
