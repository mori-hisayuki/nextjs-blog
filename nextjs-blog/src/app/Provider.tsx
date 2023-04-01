"use client"

import { ChakraProvider } from "@chakra-ui/react"

export const Provider = ({children}: {children: React.ReactNode}) => (<ChakraProvider>{children}</ChakraProvider>)

