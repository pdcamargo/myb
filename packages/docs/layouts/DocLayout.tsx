import React from 'react';
import MyBriefProvider from '@mybrief/design-system';
import styled from 'styled-components';
import Menu from '../components/Menu';

const Container = styled.div`
  --navbar-height: 50px;
  --offset-top: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 300px 1fr;

  > * {
    padding: 0 12px;
  }

  > header {
    grid-area: header;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    height: var(--navbar-height);
  }

  > aside {
    grid-area: aside;
    position: sticky;
    top: calc(var(--offset-top) + var(--navbar-height));
    height: calc(
      100vh - var(--navbar-height) - var(--offset-top) * 2
    );

    .menu {
      --thumb-color: rgba(0, 0, 0, 0.2);
      --track-color: rgba(0, 0, 0, 0.05);
      overflow-y: auto;
      height: calc(
        100vh - var(--navbar-height) - var(--offset-top) * 2
      );
      scrollbar-width: thin;
      scrollbar-color: var(--thumb-color) var(--track-color);

      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: var(--track-color);
      }
      &::-webkit-scrollbar-thumb {
        background: var(--thumb-color);
      }
    }
  }

  > article {
    grid-area: content;
    padding: var(--offset-top);
    box-shadow: inset 10px 0 15px -2px rgb(240, 240, 240);
  }
`;

const DocLayout: React.FC = ({ children }) => (
  <MyBriefProvider>
    <Container>
      <header>header</header>
      <aside>
        <div className="menu">
          <Menu />
        </div>
      </aside>
      <article>{children}</article>
    </Container>
  </MyBriefProvider>
);

export default DocLayout;
