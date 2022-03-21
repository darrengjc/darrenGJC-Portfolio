import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container
    maxW="container.md"
    >
      <Box
        borderRadius="full"
        mb={6}
        p={4}
        textAlign="center"
        bg={useColorModeValue('#FFFFE1', '#ABD3DB')}
        
      >
        Hi there, I&apos;m an aspiring developer from Singapore!
      </Box>

      <Box 
      display={{ md: 'flex' }}
      boxShadow='xl' 
      p='4' 
      rounded={'md'} 
      mb='10'>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Darren Goh
          </Heading>
          <p> A Developing Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={3}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Know Me
        </Heading>
        <Paragraph>
          I'm a student from University of London - Goldsmiths, in affiliation with Singapore Institute of Management. Currently, I'm undertaking a
          degree in Computer Science - Machine Learning and Artificial Intelligence. 
          
          <Paragraph>In my polytechnic days, I was a Business Management student specializing in Supply Chain and International Strategies
          but decided to jump industries after a taste of coding. There are two things I love outside of my workspace: my dogs and photography.

          Take a peek:{' '}
            <Link href="https://www.instagram.com/darren_graphy/" isExternal>
              <Link>Instagram</Link>
            </Link>.
          </Paragraph>
          
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
         My Short Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Singapore.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Achieved a Diploma in Business Management - Supply Chain and International Business from Nanyang Polytechnic.
        </BioSection>
        <BioSection>
          <BioYear>Now</BioYear>
          Year 2 , Semester 2 student in Singapore Institute of Management - University of London (GoldSmiths). 
          Undertaking a degree in Computer Science - Machine Learning and Artificial Intelligence.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         Things I ♥
        </Heading>
        <Paragraph>
            Music,{' '}
          <Link href="https://500px.com/p/jhiachin" target="_blank">
            Photography
          </Link>
          , Animals, 
          Discovering More Interests
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me @
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/darrengjc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @darrengjc
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/darren_graphy/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @darren_graphy
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'