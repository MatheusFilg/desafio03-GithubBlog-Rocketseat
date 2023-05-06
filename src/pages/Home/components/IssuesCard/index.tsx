import { relativeDateFormatter } from '../../../../utils/formatter'
import { IProps } from '../../index'
import { IssuesCardContainer, IssuesCardHeader, IssuesCardPost } from './styles'

interface IssuesProps {
  issue: IProps
}

export function IssuesCard({ issue }: IssuesProps) {
  const formattedDate = relativeDateFormatter(issue.created_at)

  return (
    <IssuesCardContainer href={`/issues/${issue.number}`}>
      <IssuesCardHeader>
        <h1>{issue.title}</h1>
        <span>{formattedDate}</span>
      </IssuesCardHeader>
      <IssuesCardPost>{issue.body}</IssuesCardPost>
    </IssuesCardContainer>
  )
}
