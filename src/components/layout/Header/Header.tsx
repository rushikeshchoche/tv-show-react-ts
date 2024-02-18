import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../../type/Path';
import { StyledHeader } from './Header.style';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to={Path.default} className='link'>
          Home
        </Link>
      </nav>
    </StyledHeader>
  );
}
