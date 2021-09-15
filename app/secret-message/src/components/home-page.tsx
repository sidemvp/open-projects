import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextHead from 'next/head'
import { FaGithub } from 'react-icons/fa'

import { DecryptionTab } from 'mvp-app-secret-message/src/components/decryption-tab'
import { EncryptionTab } from 'mvp-app-secret-message/src/components/encryption-tab'
import { PageFooter } from 'mvp-common-layout/src/page-footer'
import { PageHeader } from 'mvp-common-layout/src/page-header'
import { PageLayout } from 'mvp-common-layout/src/page-layout'
import { SocialLink } from 'mvp-common-layout/src/social-link'

export const HomePage: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>Secret Message</title>
      </NextHead>
      <PageLayout>
        <PageHeader
          title='Secret Message'
          subtitle='Encrypt/decrypt message within browser.'
          links={
            <SocialLink url='https://github.com/sidemvp/open-projects/tree/main/app/secret-message' icon={FaGithub} />
          }
        />
        <Tabs>
          <TabList>
            <Tab>Encryption</Tab>
            <Tab>Decryption</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <EncryptionTab />
            </TabPanel>
            <TabPanel>
              <DecryptionTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <PageFooter />
      </PageLayout>
    </>
  )
}
