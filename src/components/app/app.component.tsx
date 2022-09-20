import React from 'react';
import Header from "../header/header.component";
import './app.component.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "../common/styles";
import HomePage from "../../pages/home/home.page";
import About from "../../pages/about/about.page";
import {ApolloProvider} from "@apollo/client";
import client from "../common/apollo-client";
const App:React.FC = () => {
    return (
        <ApolloProvider client={client} >
            <Router>
                <Header/>
                <Routes>
                    <Route path='/about' element={ <About/>}/>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;
