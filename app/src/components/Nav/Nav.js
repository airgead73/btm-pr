import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  const mainLinks = [
    {name: 'home', url: '/', exact: true},
    {name: 'about', url: '/about', exact: false},
    {name: 'work', url: '/work', exact: true},
    {name: 'contact', url: '/contact', exact: false},
    {name: 'terms', url: '/terms', exact: false}
  ];

  const linksComponents = mainLinks.map((link, index) => {
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