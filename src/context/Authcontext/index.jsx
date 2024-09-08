// FOR FIREBASE AUTHENTICATION


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import {jwtDecode} from 'jwt-decode'; 
// import { toast } from 'react-toastify';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const apiKey = 'AIzaSyB3daQUn8uzbshbuvd3Rsl0ooT_Hd6HBGs';

//   const handleAuth = async (email, password, endpoint) => {
//     try {
//       const response = await axios.post(
//         `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${apiKey}`,
//         {
//           email,
//           password,
//           returnSecureToken: true,
//         }
//       );

//       const { idToken } = response.data;
//       const decodedToken = jwtDecode(idToken);
//       const uid = decodedToken.user_id;

//       Cookies.set('uid', uid);
//       Cookies.set('access_token', idToken);
//       setUser({ email, uid });

//       toast.success(endpoint === 'signUp' ? 'Signed up successfully' : 'Logged in successfully');
//     } catch (error) {
//       console.error('Authentication failed:', error.response?.data || error);
//       toast.error('Authentication failed');
//       throw error;
//     }
//   };

//   const login = (email, password) => handleAuth(email, password, 'signInWithPassword');

//   const signUp = (email, password) => handleAuth(email, password, 'signUp');

//   const logout = () => {
//     Cookies.remove('access_token');
//     setUser(null);
//   };

//   const isAuthenticated = () => {
//     return !!user;
//   };

//   useEffect(() => {
//     const token = Cookies.get('access_token');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         const uid = decodedToken.user_id;
//         const email = decodedToken.email;
//         setUser({ email, uid });
//       } catch (error) {
//         console.error('Token decoding failed:', error);
//         logout();
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, signUp, logout, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
