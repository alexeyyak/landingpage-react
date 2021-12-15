import React from 'react';
import Button from '../Button';

import './Header.scss';

import logo1 from '../../assets/img/Logo.svg';

export default function Header() {
  const Menu = [
    { id: 1, cName: 'nav-link', url: '#', title: 'about' },
    { id: 2, cName: 'nav-link', url: '#', title: 'gallery' },
    { id: 3, cName: 'nav-link', url: '#', title: 'pricing' },
    { id: 4, cName: 'nav-link', url: '#', title: 'faq' },
    { id: 5, cName: 'nav-link', url: '#', title: 'benefits' },
  ];

  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <img className='nav__logo' src={logo1} alt='' />
          <ul>
            {Menu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.cName}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          <div className='nav__btns'>
            <Button cName='btn-xs-transparent' name='sign up' />
            <Button cName='btn-xs' name='sign up' />
          </div>
        </nav>
      </header>
    </>
  );
}
