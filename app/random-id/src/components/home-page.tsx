import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { useState } from 'react'

import { AppFooter } from 'mvp-common-components/src/app-footer'

const useHomePage = () => {
  const [id, setId] = useState(() => nanoid())

  const handleGenerateClick = () => {
    setId(nanoid())
  }

  return { id, handleGenerateClick }
}

export const HomePage: NextPage = () => {
  const { id, handleGenerateClick } = useHomePage()

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
            {id}
          </Box>
          <Flex wrap='wrap' justifyContent='center'>
            <Button onClick={handleGenerateClick} colorScheme='primary' margin={1}>
              Generate
            </Button>
          </Flex>
        </Stack>
        <AppFooter />
      </Container>
    </>
  )
}
