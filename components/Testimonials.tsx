import { ReactNode } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react"

const Testimonial = ({ children }: { children: ReactNode }) => {
  return (
    <Box flex={1} maxW={{ base: "full", md: "33%" }}>
      {children}
    </Box>
  )
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      height="70%"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  number

}: {
  number: string
  title: string
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Box
        width="40px"
        height="40px"
        borderRadius="full"
        bg="green.400"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize="xl"
        fontWeight="bold"
        mb={2}
      >
        {number}
      </Box>
      <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>

      </Text>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} pt={8} pb={5} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Trabaja con nosotros</Heading>
          <Text>En 3 simples pasos te explicamos cómo contratar nuestro servicio</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          align="stretch"
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Reunión de 30 minutos</TestimonialHeading>
              <TestimonialText>
                En una reunión de 30 minutos te explicamos cómo funciona nuestro servicio
                y te damos una demostración en vivo gratuita. 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              number="1"
              title="Paso 1"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Entrenamiento de la IA</TestimonialHeading>
              <TestimonialText>
                En otro encuentro de 30 minutos aprendemos sobre tu marca, tono de voz
                información relevante, de contacto, y todo lo que debería saber tu Community Manager AI.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              number="2"
              title="Paso 2"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Inicio del servicio</TestimonialHeading>
              <TestimonialText>
                Una vez entrenada la IA con tu contexto, se conecta a tus redes sociales y 
                comienza a operarlas en automático, logrando responder a mensajes, comentarios y 
                todas las demás interacciones que requiera tu marca.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              number="3"
              title="Paso 3"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
