import React from 'react';
import {quotesType} from "../../types";
import ShowQuotes from "../../componnets/ShowQuotes/ShowQuotes";

interface Props {
  quotes: quotesType[]
}

const Home: React.FC<Props> = ({quotes}) => {
  return (
    <>
      <ShowQuotes key={'showQuotes'} quotes={quotes}/>
    </>
  );
};

export default Home;