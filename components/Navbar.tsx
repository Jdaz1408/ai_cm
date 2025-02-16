import {
  Box,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.800", "gray.800")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        align={"center"}
        justify={"center"}
      >
        <Image
          src="/ai-cm-logo-fn.jpg"
          alt="AI Community Manager Logo"
          height="150px"
          objectFit="contain"
          cursor="pointer"
          onClick={() => window.location.href = '/'}
        />
      </Flex>
    </Box>
  )
}
