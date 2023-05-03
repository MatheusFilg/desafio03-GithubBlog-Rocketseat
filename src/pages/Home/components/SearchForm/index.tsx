import {
  SearchFormContainer,
  SearchFormCounter,
  SearchFormHeader,
  SearchFormInput,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h1>Publicações</h1>
        <SearchFormCounter>
          <span>6</span>
          <p>Publicações</p>
        </SearchFormCounter>
      </SearchFormHeader>
      <SearchFormInput placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
