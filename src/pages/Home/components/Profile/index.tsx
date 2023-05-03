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
import avatar from '../../../../assets/avatar.png'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer alt="" src={avatar} />

      <TextContainer>
        <TextHeader>
          <h1>Cameron Williamson</h1>

          <GithubWithIcon href="https://github.com/MatheusFilg" target="_blank">
            <span>github</span>
            <ArrowSquareUpRight size={16} color="#3294f8" />
          </GithubWithIcon>
        </TextHeader>

        <BioContainer>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </BioContainer>

        <InfoContainer>
          <BaseInfo>
            <GithubLogo size={18} color="#3a536b" />
            <h2>cameronwll</h2>
          </BaseInfo>
          <BaseInfo>
            <Buildings size={18} color="#3a536b" />
            <h2>Rocketseat</h2>
          </BaseInfo>
          <BaseInfo>
            <Users size={18} color="#3a536b" />
            <span>32</span>
            <h2>seguidores</h2>
          </BaseInfo>
        </InfoContainer>
      </TextContainer>
    </ProfileContainer>
  )
}
