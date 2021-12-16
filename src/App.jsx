
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

//pages
import { LandingPage } from "./paginas/LandingPage";
import { Page0 } from "./paginas/Page0";
import { Page1 } from "./paginas/Page1";
import { Page2 } from "./paginas/Page2";
import { Page3 } from "./paginas/Page3";
import { Page4 } from "./paginas/Page4";

//plantillas
import { Plantilla1 } from "./plantillas/Plantilla1"



//inicializacion apollo

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div>
        <ApolloProvider client={client}>

        <Router>
        <Routes> 
         
          <Route path="/" element = {<Plantilla1/>}>
          <Route path="/" element = {<LandingPage/>}/>
          <Route path="Page0" element = {<Page0/>}/>
          <Route path="Page1" element = {<Page1/>}/>
          <Route path="Page2" element = {<Page2/>}/>
          <Route path="Page3" element = {<Page3/>}/>
          <Route path="Page4" element = {<Page4/>}/>
          
        </Route>

        </Routes>
      </Router>

      </ApolloProvider>
  


    </div>
  );
}

export default App;
