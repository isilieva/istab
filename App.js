import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { BoardsRouter } from './router/homepage';
import { IsTab } from './context'

export default function App() {
  const [user, setuser] = useState(null);
  const [taches, settaches] = useState([]);
  return (
    <IsTab.Provider value={{ user, setuser, taches, settaches }} >
      <NavigationContainer>
        {(user) ? <TodoRouter></TodoRouter> : <BoardsRouter></BoardsRouter>}

      </NavigationContainer>
    </IsTab.Provider>
  );
}
