import { createContext, useContext, useEffect, useReducer } from "react";
const Base_Url = "http://localhost:60001";

const authContext = createContext();

const initialState = {
  accounts: [],
  currentUser: null,
  isLoading: false,
  error: "",
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "users/loaded":
      return { ...state, isLoading: false, accounts: action.payload };

    case "user/login":
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        isAuthenticated: true,
      };

    // const { input, password } = action.payload;
    // const user = state.accounts.find(
    //   (user) =>
    //     (user.email === input || user.number === input) &&
    //     user.password === password
    // );
    // if (user) {
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //     isAuthenticated: true,
    //   };
    // }
    // return { ...state };

    case "newUser/signUp":
      // const { input, password } = action.payload;
      // const userExist = state.accounts.some(
      //   (user) => user.email === input || user.number === input
      // );

      // if (userExist) {
      //   return { ...state };
      // }

      // const newUser = /\@/.test(input)
      //   ? { email: input, password }
      //   : { phone: input, password };

      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        currentUser: action.payload,
        isAuthenticated: true,
      };

    case "user/logout":
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };

    case "rejected":
      return { ...state, error: action.payload };

    default:
      throw new Error("UNKNOWN ACTION");
  }
}

function AuthProvider({ children }) {
  const [
    { currentUser, accounts, error, isLoading, isAuthenticated },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchAccounts() {
      try {
        const req = await fetch(`${Base_Url}/users`);
        const data = await req.json();
        // dispatch({ type: "users/loaded", payload: data });
        console.log(data);
      } catch {
        dispatch({
          type: "rejected",
          payload: "there is error in fetching data",
        });
      }
    }
    fetchAccounts();
  }, []);

  // async function login(input, password) {
  //   try {
  //     const req = await fetch(`${Base_Url}/users`);
  //     const data = await req.json();
  //     const user = data.find(
  //       (user) =>
  //         (user.email === input || user.number === input) &&
  //         user.password === password
  //     );

  //     dispatch({ type: "user/logged/in", payload: user });
  //   } catch {
  //     throw new Error("there is error in logging accout with data");
  //   }
  // }

  async function login(emailOrNumber, password) {
    try {
      const req = await fetch(`${Base_Url}/users`);
      const data = await req.json();
      console.log(data);

      const user = data.find(
        (user) =>
          (user.email === emailOrNumber.trim() ||
            user.number === emailOrNumber.trim()) &&
          user.password === password
      );
      console.log(user);

      dispatch({ type: "user/login", payload: user });
    } catch {
      dispatch({
        type: "rejected",
        payload: "there is error in logging accout with data",
      });
    }
  }

  async function createAccount(user) {
    try {
      const response = await fetch(`${Base_Url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      dispatch({ type: "newUser/signUp", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "there is error in creating accout with data",
      });
    }
  }

  function logout() {
    dispatch({ type: "user/logout" });
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        accounts,
        error,
        isLoading,
        isAuthenticated,
        login,
        createAccount,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined)
    throw new Error("user context is used outside the provider");
  return context;
};

export { AuthProvider, useAuth };
