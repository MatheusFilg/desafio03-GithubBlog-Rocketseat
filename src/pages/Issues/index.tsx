import { useCallback, useEffect, useState } from 'react'
import { IProps } from '../Home'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { IssuesContainer } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Issues() {
  const [issuesPost, setIssuesPost] = useState<IProps>({} as IProps)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getIssuesPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`,
      )
      setIssuesPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getIssuesPost()
  }, [getIssuesPost])

  return (
    <IssuesContainer>
      <PostInfo issuesPost={issuesPost} isLoading={isLoading} />
      {!isLoading && <PostContent content={issuesPost.body} />}
    </IssuesContainer>
  )
}
