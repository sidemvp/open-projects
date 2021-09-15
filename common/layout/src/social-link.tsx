import { Icon, Link } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'

export interface SocialLinkProps {
  readonly url: string
  readonly icon: IconType
}

export const SocialLink: FunctionComponent<SocialLinkProps> = ({ url, icon }) => {
  return (
    <Link href={url} display='inline-block' color='background.600' margin={1}>
      <Icon as={icon} boxSize={6} />
    </Link>
  )
}
