import { Icon, Link, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { AiOutlineCoffee } from 'react-icons/ai'

export const PageFooter: FunctionComponent = () => {
  const envDomain = process.env.NEXT_PUBLIC_ENV_DOMAIN ?? 'www'

  return (
    <Text fontSize='sm' fontWeight='medium' color='background.600' textAlign='center' paddingY={16}>
      Made with <Icon as={AiOutlineCoffee} boxSize={6} marginBottom={2} /> by{' '}
      <Link href={`https://${envDomain}.sidemvp.com`} color='primary.500'>
        SideMVP
      </Link>
      {'.'}
    </Text>
  )
}
