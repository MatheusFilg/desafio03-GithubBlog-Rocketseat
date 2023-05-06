import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, IssuesListContainer } from './styles'

import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IssuesCard } from './components/IssuesCard'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export interface IProps {
  title: string
  body: string
  number: number
  created_at: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [issues, setIssues] = useState<IProps[]>([])

  const getIssues = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${reponame}`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  return (
    <HomeContainer>
      <Profile />
      <SearchForm getIssues={getIssues} issuesLength={issues.length} />
      <IssuesListContainer>
        {issues.map((issue) => (
          <IssuesCard key={issue.number} issue={issue} />
        ))}
      </IssuesListContainer>
    </HomeContainer>
  )
}
