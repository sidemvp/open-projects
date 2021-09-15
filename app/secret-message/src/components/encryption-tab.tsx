import { Button, Flex, Input, Stack, Textarea, useToast } from '@chakra-ui/react'
import AES from 'crypto-js/aes'
import { ChangeEvent, FunctionComponent, useState } from 'react'

const useEncryptionTab = () => {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [encryptedMessage, setEncryptedMessage] = useState('')
  const toast = useToast()

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleMessageClear = () => {
    setMessage('')
    setEncryptedMessage('')
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

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

  return {
    message,
    password,
    encryptedMessage,
    handleMessageChange,
    handleMessageClear,
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
        <Button onClick={handleMessageClear} variant='outline' width={120} margin={2}>
          Clear
        </Button>
      </Flex>
      <Textarea value={encryptedMessage} rows={8} shadow='base' isReadOnly />
    </Stack>
  )
}
