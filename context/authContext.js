import { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";
import cookie from 'js-cookie'
const initialState = {
  user: null,
};

if (cookie.get("jwtToken")) {
  const decodedToken = jwtDecode(cookie.get("jwtToken"));
  if (decodedToken.exp * 1000 < Date.now()) {
    cookie.remove("jwtToken");
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return { ...state };
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    cookie.set("jwtToken", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    cookie.remove("jwtToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
