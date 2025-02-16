"use client"
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react"

import WithSubnavigation from "@/components/Navbar"
import SmallWithSocial from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body style={{ margin: 0, padding: 0 }}>
        <ChakraProvider>
          <ColorModeScript initialColorMode="dark" />
          <Box bg="gray.800" minH="100vh" margin={0} padding={0}>
            <WithSubnavigation />
            {children}
            <SmallWithSocial />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  )
}
