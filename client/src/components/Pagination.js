import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  float: left;
  align-items: center;
  gap: 4px;
  margin: 16px 16px 16px -1200px;
`;

const Button = styled.button`
  border: solid 1px hsl(21, 8%, 85%);
  border-radius: 3px;
  padding: 8px;
  margin: 0;
  background: white;
  color: #3b4045;
  font-size: 1rem;
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }

  &[disabled] {
    background: white;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #f48225;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          Next
        </Button>
      </Nav>
    </>
  );
}

export default Pagination;
