import { IssuesCard } from '../IssuesCard'
import { IssuesListContainer } from './styles'

export function IssuesList() {
  return (
    <IssuesListContainer>
      <IssuesCard />
      <IssuesCard />
      <IssuesCard />
    </IssuesListContainer>
  )
}
