//importing components of react
import { Button, Switch, Flex,Heading, Input, useColorMode, useColorModeValue, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { EmailIcon, UnlockIcon } from '@chakra-ui/icons'
import { useToast } from "@chakra-ui/toast"

//creating index page
const IndexPage =  () => {
  //creating a toggle mode for color theme background
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("blackAlpha.100", "blackAlpha.700")
  return(
    //Flex Creates an adjustable,
    //empty space that can be used to tune the spacing between child elements within Flex
    //Stack is a layout component used to group elements together and apply a space between them.
  <Flex height = "100vh" alignItems="center" justifyContent = "center" >
    <Flex direction="column" background = {formBackground} p = {12} rounded ={6}>
      <Heading mb = {6}>Please Log in</Heading>
      <Stack spacing = {4}>
      <InputGroup>
      <InputLeftElement pointerEvents='none'
      children={<EmailIcon color='white.300' />}
    />
      <Input placeholder="Baguiochristian30@gmail.com" variant="filled" mb ={3} type = "Email" />
      </InputGroup>

      <InputGroup>
      <InputLeftElement pointerEvents='none'
      children={<UnlockIcon color='white.300' />}
      />
      <Input placeholder="Enter Password" variant = "filled" mb ={6} type = "Password" />
      </InputGroup>
      </Stack>
      <Button colorScheme = "teal" mb = {4}> Log in</Button>
      <Button onClick={toggleColorMode}>Dark theme</Button>
      </Flex>

  </Flex>
)
}
export default IndexPage
