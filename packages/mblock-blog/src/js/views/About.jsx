import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../common/components/CodeBlock'
import Markdown from '../common/components/Markdown'

import mardownFile from './markdowntest.md'

const ContainerExampleFluid = () => (
  <Container fluid>
  <ReactMarkdown
    source={mardownFile}
    renderers={Object.assign({}, ReactMarkdown.renderers, { CodeBlock: CodeBlock })}/>
    <Markdown source={mardownFile} />
  </Container>
)

export default ContainerExampleFluid
