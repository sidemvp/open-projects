import { CgFormatUppercase } from 'react-icons/cg'

import { Project } from 'mvp-app-project-listing/src/project/project'

export const allProjects: Project[] = [
  {
    id: 'text-case',
    name: 'Text Case',
    description: 'Change text to any case.',
    icon: CgFormatUppercase,
    primaryColor: 'blue',
  },
]
