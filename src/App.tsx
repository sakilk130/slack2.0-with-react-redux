import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import styled from 'styled-components';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import Login from './components/Login/Login';
import Loader from 'react-loader-spinner';

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="data:image/png;base64,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"
            alt="app logo"
          />
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
