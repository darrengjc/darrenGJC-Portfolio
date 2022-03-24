import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const RoomSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const RoomContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-room"
    m="auto"
    mt={['20px', '20px', '100px']}
    mb={['-80px', '-180px', '-180px']}
    w={[450, 700, 800]}
    h={[450, 700, 800]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <RoomContainer>
      <RoomSpinner />
    </RoomContainer>
  )
}

export default Loader