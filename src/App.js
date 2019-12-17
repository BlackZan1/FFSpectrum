import React from 'react';
import HeaderContainer from './Components/Header/HeaderContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import IntroContainer from './Components/Intro/IntroContainer';
import WrapperContainer from './Components/Wrapper/WrapperContainer';
import GamePageContainer from './Components/GamePage/GamePageContainer';
import UserPageContainer from './Components/UserPage/UserPageContainer';
import CollectionContainer from './Components/Collection/CollectionContainer';
import CardPageContainer from './Components/CardPage/CardPageContainer';
import MonsterPageContainer from './Components/MonsterPage/MonsterPageContainer';

const App = () => {
  return <BrowserRouter>
    <div className="Spectrum">
      <HeaderContainer />

      <Route path='//' render={() => (
        <>
          <IntroContainer />
          <WrapperContainer />
        </>
      )} />

      <Route path='/game/:gameId?' render={() => <GamePageContainer />} />
      <Route path='/userPage' render={() => <UserPageContainer />} />
      <Route path='/collection/:charType?' render={() => <CollectionContainer />} />
      <Route path='/characters/:cardName?' render={() => <CardPageContainer />} />
      <Route path='/monsters/:cardName?' render={() => <MonsterPageContainer />} />

    </div>
  </BrowserRouter>
}

export default App;
