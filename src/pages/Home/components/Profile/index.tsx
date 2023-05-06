import {
  AvatarContainer,
  ProfileContainer,
  TextContainer,
  TextHeader,
  GithubWithIcon,
  BioContainer,
  InfoContainer,
  BaseInfo,
} from './styles'

import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileProps {
  name: string
  login: string
  bio: string
  workAt?: string
  followers: number
  avatar_url: string
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  const loadProfile = useCallback(async () => {
    const response = await api.get(`/users/${username}`)

    setProfile(response.data)
  }, [])

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  return (
    <ProfileContainer>
      <AvatarContainer alt="" src={profile.avatar_url} />

      <TextContainer>
        <TextHeader>
          <h1>{profile.name}</h1>

          <GithubWithIcon href={profile.html_url} target="_blank">
            <span>github</span>
            <ArrowSquareUpRight size={16} color="#3294f8" />
          </GithubWithIcon>
        </TextHeader>

        <BioContainer>{profile.bio}</BioContainer>

        <InfoContainer>
          <BaseInfo>
            <GithubLogo size={18} color="#3a536b" />
            <h2>{profile.login}</h2>
          </BaseInfo>
          <BaseInfo>
            <Buildings size={18} color="#3a536b" />
            {profile?.workAt ? <h2>{profile.workAt}</h2> : <h2>N/A</h2>}
          </BaseInfo>
          <BaseInfo>
            <Users size={18} color="#3a536b" />
            <span>{profile.followers}</span>
            <h2>seguidores</h2>
          </BaseInfo>
        </InfoContainer>
      </TextContainer>
    </ProfileContainer>
  )
}
