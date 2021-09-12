import { Box, Button, Checkbox, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { FunctionComponent, useEffect, useState } from 'react'

import { generateId, GenerateIdOptions, getDefaultOptions } from 'mvp-app-random-id/src/components/id-generator'
import { AppFooter } from 'mvp-common-components/src/app-footer'

interface OptionGroupProps {
  readonly options: GenerateIdOptions
  readonly setOptions: (nextOptions: GenerateIdOptions) => void
}

const OptionGroup: FunctionComponent<OptionGroupProps> = ({ options, setOptions }) => {
  const { hasLetters, hasNumbers } = options

  return (
    <>
      <Checkbox isChecked={hasLetters} onChange={() => setOptions({ ...options, hasLetters: !hasLetters })} margin={2}>
        Letters
      </Checkbox>
      <Checkbox isChecked={hasNumbers} onChange={() => setOptions({ ...options, hasNumbers: !hasNumbers })} margin={2}>
        Numbers
      </Checkbox>
    </>
  )
}

const useHomePage = () => {
  const [id, setId] = useState<string | undefined>()
  const [options, setOptions] = useState<GenerateIdOptions>(getDefaultOptions)

  const setRandomId = () => {
    setId(generateId(options))
  }

  useEffect(() => {
    setId(generateId(options))
  }, [options])

  return { id, options, setOptions, setRandomId }
}

export const HomePage: NextPage = () => {
  const { id, options, setOptions, setRandomId } = useHomePage()

  return (
    <>
      <NextHead>
        <title>Random ID</title>
      </NextHead>
      <Container maxWidth='container.lg' marginY={6}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Heading>Random ID</Heading>
            <Text fontSize='xl'>Generate random id with custom options.</Text>
          </Stack>
          <Box fontWeight='medium' borderRadius='md' shadow='md' paddingX={4} paddingY={3}>
            {id ?? <>&nbsp;</>}
          </Box>
          <Flex wrap='wrap' justifyContent='center'>
            <Button onClick={setRandomId} colorScheme='primary' margin={2}>
              Generate
            </Button>
            <OptionGroup options={options} setOptions={setOptions} />
          </Flex>
        </Stack>
        <AppFooter />
      </Container>
    </>
  )
}
