/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeContainer, CodeContent, PostContentContainer } from './styles'

export function PostContent() {
  return (
    <PostContentContainer>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
        <br />
        <br />
        <a>Dynamic typing</a>
        <br />
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </p>
      <CodeContainer>
        <CodeContent>
          let foo =<p>42</p>; <span>// foo is now a number</span>
        </CodeContent>
        <CodeContent>
          foo =<p>'bar'</p>; <span>// foo is now a string</span>
        </CodeContent>
        <CodeContent>
          foo =<p>true</p>; <span>// foo is now a boolean</span>
        </CodeContent>
      </CodeContainer>
    </PostContentContainer>
  )
}
