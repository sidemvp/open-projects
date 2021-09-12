import { Avatar, Container, Flex, Heading, Icon, Link, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { FunctionComponent } from 'react'

import { Project } from 'mvp-app-project-listing/src/project/project'
import { allProjects } from 'mvp-app-project-listing/src/project/project-registry'

interface ProjectCardProps {
  readonly project: Project
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  return (
    <LinkBox padding={4}>
      <Flex>
        <Avatar
          icon={<Icon as={project.icon} color={`${project.primaryColor}.500`} boxSize={12} />}
          background='white'
          shadow='md'
        />
        <Stack spacing={1} marginLeft={4}>
          <Heading size='md'>
            <LinkOverlay href={project.url} isExternal>
              {project.name}
            </LinkOverlay>
          </Heading>
          <Text fontSize='md'>{project.description}</Text>
          <Link href={project.url} color='primary.400' isExternal>
            {project.url}
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
      <Container maxWidth='container.lg' marginY={6}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Heading>SideMVP</Heading>
            <Text fontSize='xl'>We make side project MVPs.</Text>
          </Stack>
          {allProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Stack>
      </Container>
    </>
  )
}
