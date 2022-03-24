import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelRoomLoader from '../voxel-room-loader'

const LazyVoxelRoom = dynamic(() => import('../voxel-room'), {
  ssr: false,
  loading: () => <VoxelRoomLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Darren's Portfolio" />
        <meta name="author" content="Darren Goh" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Darren Goh's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Darren Goh - My Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={18}>
        <LazyVoxelRoom />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main