import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  category: string;
}

const SideLink: React.FC<Props> = ({category}) => {
  return (
        <li><Link to={'/quotes/' + category}>{category}</Link></li>
  );
};

export default SideLink;