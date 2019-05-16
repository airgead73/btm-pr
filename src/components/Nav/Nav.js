import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = props => {
  const links = [
    {name: 'home', url: '/', exact: true},
    {name: 'about', url: '/about', exact: false},
    {name: 'work', url: '/work', exact: true},
    {name: 'contact', url: '/contact', exact: false}
  ];

  const linksComponents = links.map((link, index) => {
    return (
      <li key={index}><NavLink to={link.url} activeClassName={'activeNavLink'} exact={link.exact}>{link.name}</NavLink></li>
    )
  })
  return (
    <ul>
      {linksComponents}
    </ul>
  );
};

export default Nav;