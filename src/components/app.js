import React, { useEffect } from 'react';
import { Router, Location, Redirect  } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Explore from './pages/explore';
import ExploreOpensea from './pages/Opensea/explore';
// import Rangking from './pages/rangking';
import RankingRedux from './pages/RankingRedux';
import Auction from './pages/Auction';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
// import ItemDetail from './pages/ItemDetail';
import ItemDetailRedux from './pages/ItemDetailRedux';
import Author from './pages/Author';
import AuthorOpensea from './pages/Opensea/author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import Register from './pages/register';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import NewsSingle from './pages/newsSingle';
import Create from './pages/create';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Contact from './pages/contact';
import Accordion from './pages/accordion';
import Minter from './pages/Minter';
import auth from '../core/auth';
import Profile from './pages/Profile';
import { useChain, useMoralis } from 'react-moralis';

import { createGlobalStyle } from 'styled-components';




const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}



const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = auth.getToken() !== null;
  
  return (
      isAuth ? <Component {...rest} /> : <Redirect from="" to="/login" noThrow />
  )
};

const App= () => {

  const { isAuthenticated , isWeb3Enabled , isWeb3EnableLoading , enableWeb3 } = useMoralis();
  
  const { switchNetwork, chainId, chain } = useChain();
  useEffect(() => {
      const connectorId = window.localStorage.getItem("connectorId");
      if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading){
          enableWeb3({ provider: connectorId });}
      if (chainId != null && chainId != '0x13881') {
        if (window.confirm("You're on the wrong network! Click OK to switch to Polygon.")) {
                switchNetwork("0x13881")
              } else {
                alert("You're on the wrong network & will result in loss of funds due to failed transaction! Switch to Polygon chain manually in your Metamask Wallet!");
              }
      }  
    }, [isAuthenticated, isWeb3Enabled, chain]);

  console.log("chainId: ", chainId)


  return(
  <div className="wraper">
  <GlobalStyles />
      <Location>{location=><Header location={location}/>}</Location>
      <PosedRouter>
        <ScrollTop path="/">
          <Home exact path="/" />
            {/* <Redirect to="/home" /> */}
          {/* </Home> */}
          <Explore path="/explore" />
          <ExploreOpensea path="/exploreOpensea" />
          <RankingRedux path="/rangking" />
          <Auction path="/Auction" />
          <Helpcenter path="/helpcenter" />
          <Colection path="/colection/:collectionId" />
          <ItemDetailRedux path="/ItemDetail/:nftId" />
          {/* 
            PROTECTED ROUTE :
            you can use this to protect your route, user must login first to access
          */}
          <ProtectedRoute component={Author} path="/Author/:authorId"/>
          <ProtectedRoute component={Profile} path="/Profile/:authorId"/>
          {/* 
          <Author path="/Author/:authorId" /> 
          */}
          <AuthorOpensea path="/AuthorOpensea" />
          <Wallet path="/wallet" />
          <Login path="/login" />
          <Register path="/register" />
          <Price path="/price" />
          <Works path="/works" />
          <News path="/news" />
          <NewsSingle path="/news/:postId" />
          <Create path="/create" />
          <Createoption path="/createOptions" />
          <Activity path="/activity" />
          <Contact path="/contact" />
          <Accordion path="/accordion" />
          <Minter path="/mint" />
          </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
  </div>
)
};
export default App;