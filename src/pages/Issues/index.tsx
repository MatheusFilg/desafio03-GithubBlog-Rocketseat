import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { IssuesContainer } from './styles'

export function Issues() {
  return (
    <IssuesContainer>
      <PostInfo />
      <PostContent />
    </IssuesContainer>
  )
}
