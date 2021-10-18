import { Button, Flex, Input, Stack, Textarea, useToast } from '@chakra-ui/react'
import AES from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'
import { ChangeEvent, FunctionComponent, useState } from 'react'

import { copyText } from 'mvp-common-utils/src/clipboard'

const useHandleMessageDecrypt = (message: string, password: string) => {
  const [decryptedMessage, setDecryptedMessage] = useState('')
  const toast = useToast()
  const handleMessageDecrypt = () => {
    try {
      setDecryptedMessage(AES.decrypt(message, password).toString(Utf8))
    } catch (err) {
      console.error(err)

      toast({
        description: 'Failed to decrypt message.',
        status: 'error',
        position: 'bottom-left',
        duration: 3000,
      })
    }
  }
  return { decryptedMessage, setDecryptedMessage, handleMessageDecrypt }
}

const useDecryptionTab = () => {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const { decryptedMessage, setDecryptedMessage, handleMessageDecrypt } = useHandleMessageDecrypt(message, password)
  const toast = useToast()

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleMessageClear = () => {
    setMessage('')
    setDecryptedMessage('')
  }

  const handleTextCopy = () => {
    copyText(decryptedMessage)
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
    decryptedMessage,
    handleMessageChange,
    handleMessageClear,
    handleTextCopy,
    handlePasswordChange,
    handleMessageDecrypt,
  }
}

export const DecryptionTab: FunctionComponent = () => {
  const {
    message,
    password,
    decryptedMessage,
    handleMessageChange,
    handleMessageClear,
    handleTextCopy,
    handlePasswordChange,
    handleMessageDecrypt,
  } = useDecryptionTab()

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
        <Button onClick={handleMessageDecrypt} colorScheme='primary' width={120} margin={2}>
          Decrypt
        </Button>
        <Button onClick={handleTextCopy} variant='outline' width={160} margin={2}>
          Copy
        </Button>
        <Button onClick={handleMessageClear} variant='outline' width={120} margin={2}>
          Clear
        </Button>
      </Flex>
      <Textarea value={decryptedMessage} rows={8} shadow='base' isReadOnly />
    </Stack>
  )
}
