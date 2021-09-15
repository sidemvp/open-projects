import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent, ReactNode } from 'react'

export interface PageHeaderProps {
  readonly title: string
  readonly subtitle?: string
  readonly links?: ReactNode
}

export const PageHeader: FunctionComponent<PageHeaderProps> = ({ title, subtitle, links }) => {
  return (
    <Flex marginBottom={4}>
      <Stack flex={1} spacing={1}>
        <Heading>{title}</Heading>
        {subtitle && <Text fontSize='xl'>{subtitle}</Text>}
      </Stack>
      {links && <Box>{links}</Box>}
    </Flex>
  )
}
