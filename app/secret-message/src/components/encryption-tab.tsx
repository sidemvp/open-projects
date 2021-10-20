import { Button, Flex, Input, Stack, Textarea, useToast } from '@chakra-ui/react'
import AES from 'crypto-js/aes'
import { ChangeEvent, FunctionComponent, useState } from 'react'

import { copyText } from 'mvp-common-utils/src/clipboard'

const useHandleMessageEncrypt = (message: string, password: string) => {
  const [encryptedMessage, setEncryptedMessage] = useState('')
  const toast = useToast()

  const handleMessageEncrypt = () => {
    try {
      setEncryptedMessage(AES.encrypt(message, password).toString())
    } catch (err) {
      console.error(err)

      toast({
        description: 'Failed to encrypt message.',
        status: 'error',
        position: 'bottom-left',
        duration: 3000,
      })
    }
  }

  return { encryptedMessage, setEncryptedMessage, handleMessageEncrypt }
}

const useEncryptionTab = () => {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const { encryptedMessage, setEncryptedMessage, handleMessageEncrypt } = useHandleMessageEncrypt(message, password)
  const toast = useToast()

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleMessageClear = () => {
    setMessage('')
    setEncryptedMessage('')
  }

  const handleTextCopy = () => {
    copyText(encryptedMessage)
    toast({
      description: 'Message copied.',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return {
    message,
    password,
    encryptedMessage,
    handleMessageChange,
    handleMessageClear,
    handleTextCopy,
    handlePasswordChange,
    handleMessageEncrypt,
  }
}

export const EncryptionTab: FunctionComponent = () => {
  const {
    message,
    password,
    encryptedMessage,
    handleMessageChange,
    handleTextCopy,
    handleMessageClear,
    handlePasswordChange,
    handleMessageEncrypt,
  } = useEncryptionTab()

  return (
    <Stack spacing={4}>
      <Textarea
        value={message}
        onChange={handleMessageChange}
        rows={8}
        placeholder='Type or paste your message here'
        shadow='base'
      />
      <Input value={password} onChange={handlePasswordChange} type='password' placeholder='Enter password' />
      <Flex wrap='wrap' justifyContent='center'>
        <Button onClick={handleMessageEncrypt} colorScheme='primary' width={120} margin={2}>
          Encrypt
        </Button>
        <Button onClick={handleTextCopy} variant='outline' width={160} margin={2}>
          Copy
        </Button>
        <Button onClick={handleMessageClear} variant='outline' width={120} margin={2}>
          Clear
        </Button>
      </Flex>
      <Textarea value={encryptedMessage} rows={8} shadow='base' isReadOnly />
    </Stack>
  )
}
