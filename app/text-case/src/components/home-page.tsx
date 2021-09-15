import { Button, Flex, Stack, Textarea } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { ChangeEvent, FunctionComponent, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case'
import { allTextCases } from 'mvp-app-text-case/src/text-case/text-case-registry'
import { PageFooter } from 'mvp-common-layout/src/page-footer'
import { PageHeader } from 'mvp-common-layout/src/page-header'
import { PageLayout } from 'mvp-common-layout/src/page-layout'
import { SocialLink } from 'mvp-common-layout/src/social-link'

interface TextInputProps {
  readonly text: string
  readonly currentTextCase: TextCase | undefined
  readonly handleTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextInput: FunctionComponent<TextInputProps> = ({ text, currentTextCase, handleTextChange }) => {
  return (
    <Textarea
      value={text && currentTextCase ? currentTextCase.transform(text) : text}
      onChange={handleTextChange}
      rows={8}
      placeholder='Type or paste your text here'
      shadow='base'
    />
  )
}

interface ActionGroupProps {
  readonly currentTextCase: TextCase | undefined
  readonly handleTextCaseToggle: (textCase: TextCase) => () => void
  readonly handleTextClear: () => void
}

const ActionGroup: FunctionComponent<ActionGroupProps> = ({
  currentTextCase,
  handleTextCaseToggle,
  handleTextClear,
}) => {
  return (
    <Flex wrap='wrap' justifyContent='center'>
      {allTextCases.map((textCase) => (
        <Button
          key={textCase.name}
          onClick={handleTextCaseToggle(textCase)}
          colorScheme={currentTextCase === textCase ? 'primary' : 'background'}
          width={160}
          margin={2}
        >
          {textCase.name}
        </Button>
      ))}
      <Button variant='outline' width={160} margin={2} onClick={handleTextClear}>
        Clear
      </Button>
    </Flex>
  )
}

const useHomePage = () => {
  const [text, setText] = useState('')
  const [currentTextCase, setCurrentTextCase] = useState<TextCase | undefined>()

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    setCurrentTextCase(undefined)
  }

  const handleTextClear = () => {
    setText('')
    setCurrentTextCase(undefined)
  }

  const handleTextCaseToggle = (textCase: TextCase) => () => {
    setCurrentTextCase(currentTextCase !== textCase ? textCase : undefined)

    if (!text) {
      setText('sample text')
    }
  }

  return { text, handleTextChange, handleTextClear, currentTextCase, handleTextCaseToggle }
}

export const HomePage: NextPage = () => {
  const { text, handleTextChange, handleTextClear, currentTextCase, handleTextCaseToggle } = useHomePage()

  return (
    <>
      <NextHead>
        <title>Text Case</title>
      </NextHead>
      <PageLayout>
        <PageHeader
          title='Text Case'
          subtitle='Change text to any case.'
          links={<SocialLink url='https://github.com/sidemvp/open-projects/tree/main/app/text-case' icon={FaGithub} />}
        />
        <Stack spacing={4}>
          <TextInput text={text} currentTextCase={currentTextCase} handleTextChange={handleTextChange} />
          <ActionGroup
            currentTextCase={currentTextCase}
            handleTextCaseToggle={handleTextCaseToggle}
            handleTextClear={handleTextClear}
          />
        </Stack>
        <PageFooter />
      </PageLayout>
    </>
  )
}
