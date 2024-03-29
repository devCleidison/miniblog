import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

// import { db } from "../services/firebase";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) return;
  };

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    if(!data.displayName || !data.email || !data.password) {
      setLoading(false);
      setError("You need to provide necessary information");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (err) {
      let systemErrorMessage;

      if (err.message.includes("Password")) {
        systemErrorMessage = "Password needs to be at least 6 characters long";
      } else if (err.message.includes("email-already")) {
        systemErrorMessage = "Email already exists";
      } else {
        systemErrorMessage = "Something went wrong, please try again later";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    if(!data.email || !data.password) {
      setLoading(false);
      setError("Email and password are required.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (err) {
      let systemErrorMessage;

      if (err.message.includes("user-not-found")) {
        systemErrorMessage = "User not found";
      } else if (err.message.includes("wrong-password")) {
        systemErrorMessage = "Wrong password";
      } else {
        systemErrorMessage = "Something went wrong, please try again later";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    setError,
    loading,
    logout,
    login
  };
};
