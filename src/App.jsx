import { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { Navbar } from "./components/Navbar";
import { Loading } from "./components/Loading";

import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./context/AuthContext";

import { GlobalStyles } from "./styles/global";

export default function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <>
      {loadingUser ? (
        <Loading />
      ) : (
        <AuthProvider value={{ user }}>
          <BrowserRouter>
            <Navbar />
            <AppRoutes user={user}/>
          </BrowserRouter>
        </AuthProvider>
      )}
      <GlobalStyles />
    </>
  );
}
