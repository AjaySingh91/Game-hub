import { Box, Heading } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { GameQuery } from './Layout';

const Error = () => {

    const error = useRouteError();
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (<>
  <Box padding={5}>
  <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />     
  <Heading size="2xl" >Oops</Heading>
  <p>{isRouteErrorResponse(error)? 'this page does not exists' : 'An Unexpected error occurred'}</p>
  </Box>
  </>
  )
}

export default Error