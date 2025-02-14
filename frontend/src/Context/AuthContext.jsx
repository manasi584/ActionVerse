import { createContext, useContext, useReducer } from "react";

//  create context
const AuthContext = createContext();

const FAKE_USER = {
  name: "user1",
  email: "user1@test.com",
  password: "123456",
  avatar: "https://i.pravatar.cc/100?",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      console.log(isAuthenticated);
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function signup(email, password, name) {
    const nwwuser = { name: name, email: email, password: password };
    dispatch({ type: "signup", payload: nwwuser });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
