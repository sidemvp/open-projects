import { Avatar, Flex, Heading, Icon, Link, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { FunctionComponent } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import { Project } from 'mvp-app-project-listing/src/project/project'
import { allProjects } from 'mvp-app-project-listing/src/project/project-registry'
import { PageFooter } from 'mvp-common-components/src/page-footer'
import { PageHeader } from 'mvp-common-components/src/page-header'
import { PageLayout } from 'mvp-common-components/src/page-layout'
import { SocialLink } from 'mvp-common-components/src/social-link'

const resolveUrl = (url: string) => {
  const envDomain = process.env.NEXT_PUBLIC_ENV_DOMAIN

  return `https://${envDomain ? [envDomain, url].join('.') : url}`
}

interface ProjectCardProps {
  readonly project: Project
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const projectUrl = resolveUrl(`${project.id}.mvp.onl`)

  return (
    <LinkBox>
      <Flex>
        <Avatar
          icon={<Icon as={project.icon} color={`${project.primaryColor}.500`} boxSize={project.iconSize} />}
          background='white'
          shadow='md'
        />
        <Stack spacing={1} marginLeft={4}>
          <Heading size='md'>
            <LinkOverlay href={projectUrl} isExternal>
              {project.name}
            </LinkOverlay>
          </Heading>
          <Text fontSize='md'>{project.description}</Text>
          <Link href={projectUrl} color='primary.500' isExternal>
            {projectUrl}
          </Link>
        </Stack>
      </Flex>
    </LinkBox>
  )
}

export const HomePage: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>SideMVP</title>
      </NextHead>
      <PageLayout>
        <PageHeader
          title='SideMVP'
          subtitle='We make side project MVPs.'
          links={
            <>
              <SocialLink url='https://github.com/sidemvp/open-projects' icon={FaGithub} />
              <SocialLink url='https://twitter.com/sidemvp' icon={FaTwitter} />
            </>
          }
        />
        <Stack spacing={6} padding={6}>
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Stack>
        <PageFooter />
      </PageLayout>
    </>
  )
}
