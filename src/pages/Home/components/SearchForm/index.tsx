import {
  SearchFormContainer,
  SearchFormCounter,
  SearchFormHeader,
  SearchFormInput,
} from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormIssuesSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormIssuesSchema>

interface SearchInputProps {
  issuesLength: number
  getIssues: (query?: string) => Promise<void>
}

export function SearchForm({ issuesLength, getIssues }: SearchInputProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormIssuesSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await getIssues(data.query)

    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <SearchFormHeader>
        <h1>Publicações</h1>
        <SearchFormCounter>
          <span>{issuesLength}</span>
          <p>Publicações</p>
        </SearchFormCounter>
      </SearchFormHeader>
      <SearchFormInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
