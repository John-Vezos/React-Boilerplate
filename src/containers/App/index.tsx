import { DefaultRootState, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import NotificationContainer from '@src/containers/Notification';
import TestPage from '@src/containers/TestPage/Loadable';

import Header from '@components/Header';

import GlobalStyle from '@styles/global-styles';
import styled, { ThemeProvider, theme } from '@styles/styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  padding-inline: 16px;
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 19000px;
`;

const App = () => {
  const isLightTheme: boolean = useSelector(
    (state: DefaultRootState) => state.ui.isLightTheme,
  );
  return (
    <ThemeProvider theme={isLightTheme ? theme.lightTheme : theme.darkTheme}>
      <AppWrapper>
        <AppWrapper>
          <NotificationContainer />
          <Header />
          <Routes>
            <Route path="/" element={<TestPage />} />
          </Routes>
          <GlobalStyle />
        </AppWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};
export default App;
