import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Link,
  Stack,
} from "@chakra-ui/react"

export default function TermsPage() {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.800")} color="white">
      <Container maxW="4xl" py={8}>
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" mb={4}>
            Términos de Servicio
          </Heading>

          <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={8}>
            <Link href="#condiciones" color="green.400" _hover={{ color: "green.300" }}>
              Condiciones del Servicio
            </Link>
            <Link href="#datos" color="green.400" _hover={{ color: "green.300" }}>
              Eliminación de Datos
            </Link>
          </Stack>

          <Box>
            <Heading as="h2" size="lg" mb={3}>
              1. Descripción del Servicio
            </Heading>
            <Text mb={4}>
              AI Community Manager proporciona un servicio de gestión automatizada de redes sociales
              mediante inteligencia artificial. El servicio incluye respuestas automáticas a mensajes,
              gestión de comentarios y monitoreo de menciones.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={3}>
              2. Uso del Servicio
            </Heading>
            <UnorderedList spacing={2} stylePosition="inside" pl={4}>
              <ListItem>
                El cliente debe proporcionar acceso a las cuentas de redes sociales que desea gestionar.
              </ListItem>
              <ListItem>
                El cliente es responsable de mantener la seguridad de sus credenciales de acceso.
              </ListItem>
              <ListItem>
                El servicio se proporciona &quot;tal cual&quot; y puede estar sujeto a modificaciones o mejoras.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={3}>
              3. Privacidad y Datos
            </Heading>
            <Text mb={4}>
              Nos comprometemos a proteger la privacidad de nuestros usuarios. La información recopilada
              se utiliza únicamente para mejorar el servicio y no se comparte con terceros sin
              consentimiento explícito.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={3}>
              4. Limitación de Responsabilidad
            </Heading>
            <Text mb={4}>
              AI Community Manager no se hace responsable de pérdidas o daños derivados del uso del
              servicio. El cliente acepta que el uso de IA puede ocasionalmente generar respuestas
              imperfectas y se compromete a supervisar el servicio según sea necesario.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={3}>
              5. Cancelación del Servicio
            </Heading>
            <Text mb={4}>
              El cliente puede cancelar el servicio en cualquier momento. La cancelación será efectiva
              al final del período de facturación actual. No se realizan reembolsos por períodos
              parciales.
            </Text>
          </Box>

          <Box id="condiciones">
            <Heading as="h2" size="lg" mb={3}>
              6. Condiciones del Servicio
            </Heading>
            <UnorderedList spacing={2} stylePosition="inside" pl={4}>
              <ListItem>
                El servicio se factura mensualmente y por adelantado.
              </ListItem>
              <ListItem>
                Se requiere un período mínimo de contratación de 2 meses.
              </ListItem>
              <ListItem>
                El cliente puede solicitar ajustes en la configuración del servicio en cualquier momento.
              </ListItem>
              <ListItem>
                Nos reservamos el derecho de modificar estas condiciones con previo aviso de 30 días.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box id="datos">
            <Heading as="h2" size="lg" mb={3}>
              7. Eliminación de Datos
            </Heading>
            <Text mb={4}>
              Al finalizar el servicio, el cliente puede solicitar la eliminación completa de sus datos.
              Este proceso incluye:
            </Text>
            <UnorderedList spacing={2} stylePosition="inside" pl={4}>
              <ListItem>
                Eliminación de todas las credenciales de acceso almacenadas.
              </ListItem>
              <ListItem>
                Borrado de los registros de interacciones y configuraciones personalizadas.
              </ListItem>
              <ListItem>
                Eliminación de cualquier dato de entrenamiento específico de la marca.
              </ListItem>
              <ListItem>
                Confirmación por escrito de la eliminación completa de los datos.
              </ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 