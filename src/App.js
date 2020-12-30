import React, { Component } from 'react';
import './App.css';
import Header from '../src/layout/header/header';
import Middle from './layout/middle/middle';
import Features from './layout/featureSection/featur';
import Test from './layout/featureSection/test';
import Tours from './layout/toursSection/toursSection';
import Story from './layout/storySection/story';
import Book from './layout/bookSection/book';
import Footer from './layout/footerSection/footer';
import Navigation from './layout/navigation/navigation';
import Popup from './layout/popup/popup';

class App extends Component {
  render() {
    return (
      <div className="App" lang="en">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap" rel="stylesheet"
                ></link>
        <Navigation/>
        <Header/>
        <Middle/>
        <Features/>
        <Test/>
        <Tours/>
        <Story/>
        <Book/>
        <Footer/>
        <Popup/>
      </div>
    );
  }
}

export default App;
