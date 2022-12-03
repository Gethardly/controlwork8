import React from 'react';
import {Link} from "react-router-dom";
import {quotesType} from "../../types";
import SideLink from "./SideLink";

interface Props {
  quotes: quotesType[];
}

const SideLinks: React.FC<Props> = ({quotes}) => {
  return (
    <div>
      <ul>
        <li><Link to="/">All</Link></li>
      {quotes.map(quote => (
        <SideLink key={Math.random()} category={quote.category}/>
      ))}
      </ul>
    </div>
  );
};

export default SideLinks;