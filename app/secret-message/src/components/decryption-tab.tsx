import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react'
import AES from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'
import { ChangeEvent, FunctionComponent, useState } from 'react'

const useDecryptionTab = () => {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [decryptedMessage, setDecryptedMessage] = useState('')

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleMessageClear = () => {
    setMessage('')
    setDecryptedMessage('')
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleMessageDecrypt = () => {
    setDecryptedMessage(AES.decrypt(message, password).toString(Utf8))
  }

  return {
    message,
    password,
    decryptedMessage,
    handleMessageChange,
    handleMessageClear,
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
        <Button onClick={handleMessageClear} variant='outline' width={120} margin={2}>
          Clear
        </Button>
      </Flex>
      <Textarea value={decryptedMessage} rows={8} shadow='base' isReadOnly />
    </Stack>
  )
}
