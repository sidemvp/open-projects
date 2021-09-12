import { CgFormatUppercase } from 'react-icons/cg'
import { FaRandom } from 'react-icons/fa'

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
    id: 'text-case',
    name: 'Text Case',
    description: 'Change text to any case.',
    icon: CgFormatUppercase,
    iconSize: 12,
    primaryColor: 'blue',
  },
]
