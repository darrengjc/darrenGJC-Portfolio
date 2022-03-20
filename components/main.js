import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {

    //Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a div element.
    //The Box component is useful because it helps with 3 common use cases:
    // Create responsive layouts with ease.
    // Provide a shorthand way to pass styles via props (bg instead of backgroundColor).
    // Compose new component and allow for override using the as prop.
    //https://chakra-ui.com/docs/components/layout/box
    //https://chakra-ui.com/docs/styled-system/features/style-props
    //pb, paddingBottom
    //pt, paddingTop

    return <Box as ="main" pb={8}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Darren's Portfolio Site" />
            <meta name="author" content="Darren Goh" />
            <title>Darren GJC - Portfolio</title>
        </head>
        <Container maxW="container.md" pt={14}>
            {children}
            <Footer />
        </Container>
    </Box>
}

export default Main