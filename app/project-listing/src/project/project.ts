import { IconType } from 'react-icons'

import { ColorToken } from 'mvp-common-layout/src/app-theme'

export interface Project {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly icon: IconType
  readonly iconSize: number
  readonly primaryColor: ColorToken
}
