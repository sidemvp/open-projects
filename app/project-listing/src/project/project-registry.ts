import { CgFormatUppercase } from 'react-icons/cg'
import { FaRandom } from 'react-icons/fa'
import { RiShieldFlashLine } from 'react-icons/ri'

import { Project } from 'mvp-app-project-listing/src/project/project'

export const allProjects: Project[] = [
  {
    id: 'random-id',
    name: 'Random ID',
    description: 'Generate random id with custom options.',
    icon: FaRandom,
    iconSize: 7,
    primaryColor: 'purple',
  },
  {
    id: 'secret-message',
    name: 'Secret Message',
    description: 'Encrypt/decrypt message within browser.',
    icon: RiShieldFlashLine,
    iconSize: 8,
    primaryColor: 'green',
  },
  {
    id: 'text-case',
    name: 'Text Case',
    description: 'Change text to any case.',
    icon: CgFormatUppercase,
    iconSize: 12,
    primaryColor: 'blue',
  },
]
