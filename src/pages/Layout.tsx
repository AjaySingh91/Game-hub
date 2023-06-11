import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';

export interface GameQuery { 
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
  }

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (<>
    <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />     
    <Outlet />
  </>
  )
}

export default Layout