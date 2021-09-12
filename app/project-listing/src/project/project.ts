import { IconType } from 'react-icons'

import { ColorToken } from 'mvp-common-components/src/app-theme'

export interface Project {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly icon: IconType
  readonly iconSize: number
  readonly primaryColor: ColorToken
}
