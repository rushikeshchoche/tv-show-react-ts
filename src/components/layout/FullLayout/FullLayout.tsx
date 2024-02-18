import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Content, ContentContainer, FullLayoutContainer, HeaderContainer } from './FullLayout.style';

export const FullLayout: React.FC = () => {
  return (
    <FullLayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <Content>
          <Outlet />
        </Content>
      </ContentContainer>
      <Footer />
    </FullLayoutContainer>
  );
}
