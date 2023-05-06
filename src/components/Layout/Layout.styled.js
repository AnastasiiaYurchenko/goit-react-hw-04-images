import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  margin: 0 auto;
  /* padding: 0 16px; */
  padding-bottom: 24px;

  /* height: 100vh; */
  //   // display: 'flex',
  /* justify-content: center; */
  //   align-items: center,
  /* font-size: 14px; */
  //   color: #010101,
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
