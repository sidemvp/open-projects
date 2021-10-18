import {
  Box,
  Button,
  Checkbox,
  Code,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { FunctionComponent, useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import { generateId, GenerateIdOptions, getDefaultOptions } from 'mvp-app-random-id/src/components/id-generator'
import { PageFooter } from 'mvp-common-layout/src/page-footer'
import { PageHeader } from 'mvp-common-layout/src/page-header'
import { PageLayout } from 'mvp-common-layout/src/page-layout'
import { SocialLink } from 'mvp-common-layout/src/social-link'
import { copyText } from 'mvp-common-utils/src/clipboard'

const SliderContent: FunctionComponent = () => {
  return (
    <>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={4} />
    </>
  )
}

interface OptionGroupProps {
  readonly options: GenerateIdOptions
  readonly setOptions: (nextOptions: GenerateIdOptions) => void
}

const OptionGroup: FunctionComponent<OptionGroupProps> = ({ options, setOptions }) => {
  const { hasLetters, hasNumbers, length } = options

  return (
    <>
      <Box margin={2}>
        <Text>
          Length: <strong>{length}</strong>
        </Text>
        <Slider
          value={length}
          onChange={(nextLength) => setOptions({ ...options, length: nextLength })}
          min={10}
          max={100}
          step={1}
          width='150px'
          aria-label='Length'
        >
          <SliderContent />
        </Slider>
      </Box>
      <Checkbox
        isChecked={hasLetters}
        onChange={() => setOptions({ ...options, hasLetters: !hasLetters })}
        margin={1}
        padding={1}
      >
        Letters
      </Checkbox>
      <Checkbox
        isChecked={hasNumbers}
        onChange={() => setOptions({ ...options, hasNumbers: !hasNumbers })}
        margin={1}
        padding={1}
      >
        Numbers
      </Checkbox>
    </>
  )
}

const useHomePage = () => {
  const toast = useToast()
  const [id, setId] = useState<string | undefined>()
  const [options, setOptions] = useState<GenerateIdOptions>(getDefaultOptions)

  const setRandomId = () => {
    setId(generateId(options))
  }

  const handleTextCopy = () => {
    if (id) {
      copyText(id)
      toast({
        description: 'Id copied.',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    setId(generateId(options))
  }, [options])

  return { id, options, setOptions, setRandomId, handleTextCopy }
}

export const HomePage: NextPage = () => {
  const { id, options, setOptions, setRandomId, handleTextCopy } = useHomePage()

  return (
    <>
      <NextHead>
        <title>Random ID</title>
      </NextHead>
      <PageLayout>
        <PageHeader
          title='Random ID'
          subtitle='Generate random id with custom options.'
          links={<SocialLink url='https://github.com/sidemvp/open-projects/tree/main/app/random-id' icon={FaGithub} />}
        />
        <Stack spacing={4}>
          <Code fontSize='lg' borderRadius='md' shadow='md' paddingX={5} paddingY={3}>
            {id ?? <>&nbsp;</>}
          </Code>
          <Flex flexDirection={{ base: 'column', sm: 'row' }} wrap='wrap' justifyContent='center'>
            <Button onClick={setRandomId} colorScheme='primary' margin={2}>
              Generate
            </Button>
            <Button onClick={handleTextCopy} variant='outline' width={160} margin={2}>
              Copy
            </Button>
            <OptionGroup options={options} setOptions={setOptions} />
          </Flex>
        </Stack>
        <PageFooter />
      </PageLayout>
    </>
  )
}
