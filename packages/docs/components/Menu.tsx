import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  h3 {
    font-weight: bold;
    margin: 0 0 10px 0;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: #111;
  margin: 10px 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #0c0c0c;
  }

  &:first-child {
    margin-top: 0;
  }

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #666666;
    margin-right: 6px;
  }
`;

const urls = [
  {
    title: 'Documentation',
    links: [
      {
        path: '/getting-started',
        text: 'Getting Started',
      },
      {
        path: '/changelog',
        text: 'Changelog',
      },
      {
        path: '/faq',
        text: 'FAQ',
      },
      {
        path: '/deployment',
        text: 'Deployment',
      },
    ],
  },
  {
    title: 'Theme',
    links: [
      {
        path: '/colors',
        text: 'Colors',
      },
    ],
  },
];

const Menu: React.FC = () => (
  <MenuContainer>
    {urls.map((url) => (
      <React.Fragment key={url.title}>
        <h3>{url.title}</h3>
        <div>
          {url.links.map((link) => (
            <MenuItem
              as="a"
              href={link.path}
              key={link.path}
            >
              {link.text}
            </MenuItem>
          ))}
        </div>
      </React.Fragment>
    ))}
  </MenuContainer>
);

export default Menu;
