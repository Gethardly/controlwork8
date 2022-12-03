import React, {useCallback, useEffect, useState} from 'react';
import NavBar from "./componnets/NavBar/NavBar";
import SideLinks from "./componnets/SideLinks/SideLinks";
import {Route, Routes, useLocation} from "react-router-dom";
import ShowQuotes from "./componnets/ShowQuotes/ShowQuotes";
import Home from "./containers/Home/Home";
import axiosApi from "./axiosApi";
import {quotesList, quotesType} from "./types";
import NewQuote from "./containers/NewQuote/NewQuote";

function App() {
  const [qoutes, setQuotes] = useState<quotesType[]>([]);
  const location = useLocation();

  const getQoutes = useCallback(async () => {
    const quotesResponse = await axiosApi.get<quotesList>('/quotes.json');
    const quotes = Object.keys(quotesResponse.data).map(key => {
      const qoute: quotesType = quotesResponse.data[key];
      qoute.id = key;
      return qoute;
    })
    setQuotes(quotes);

  }, []);

  useEffect(() => {
    try {
      getQoutes().catch(console.error);
    } finally {

    }
  }, [location,getQoutes]);
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="d-flex ms-2 mt-4">
        <SideLinks quotes={qoutes}/>
        <Routes>
          <Route path="/" element={<Home quotes={qoutes}/>}/>

          <Route path="/quotes/:category" element={<ShowQuotes/>}/>

          <Route path='/add-post' element={<NewQuote/>}/>

          <Route path="/delete" element={<h2>You deleted the post</h2>}/>

          <Route path="*" element={<h1>Page not found :(</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
