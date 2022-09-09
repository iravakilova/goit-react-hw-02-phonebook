import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Phonebook />
      </>
    );
  }
}
