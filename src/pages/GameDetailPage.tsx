import React from 'react'
import { Game } from '../hooks/useGames'
import { Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const GameDetailPage = () => {

const {slug} = useParams();

  return (
    <Heading size="2xl"></Heading>
  )
}

export default GameDetailPage