import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOtodecks from '../public/images/works/otodecks.png'
import thumbAngrybox from '../public/images/works/angryBox.png'
import thumbAsteroidGame from '../public/images/works/asteroidGame.png'
import thumbWaveGrid from '../public/images/works/wavegrid.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="otodecks" title="OtoDecks" thumbnail={thumbOtodecks}>
            A Simple DJ Application - Mix and Play multiple audio tracks.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="angrybox"
            title="AngryBox"
            thumbnail={thumbAngrybox}
          >
            Simple Angry Bird Clone but Boxes.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="asteroidgame"
            title="Asteroid Simple"
            thumbnail={thumbAsteroidGame}
          >
            Simple version of an Asteroid Game with some twists.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="wavegrid" thumbnail={thumbWaveGrid} title="WaveGrid">
            Interactive Display - Mouse controls a display art.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
 
    
      {/* <Section delay={0.2}> *Collaboration section
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'