import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../pages/Layout'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

  const {data: genres} = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId);

  const{data: plateforms} = usePlatforms();
  const plateform = plateforms?.results.find(p => p.id === gameQuery.platformId)

  const heading = `${plateform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading