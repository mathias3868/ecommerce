import { createContext, useContext, useEffect, useReducer } from "react";
const Base_Url = "http://localhost:60001";

const authContext = createContext();

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  accounts: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "accounts/loaded":
      return { ...state, isLoading: false, accounts: action.payload };

    case "user/logged/in":
      const { input, password } = action.payload;
      const user = state.accounts.find(
        (user) =>
          (user.email === input || user.number === input) &&
          user.password === password
      );
      if (user) {
        return {
          ...state,
          currentUser: user,
          error: "",
          isAuthenticated: true,
        };
      }
      return { ...state, error: action.payload };

    case "newUser/signUp":
      const { input, password } = action.payload;
      const userExist = state.accounts.some(
        (user) => user.email === input || user.number === input
      );

      if (userExist) {
        return { ...state, error: action.payload };
      }

      const newUser = /\@/.test(input)
        ? { email: input, password }
        : { phone: input, password };

      return {
        ...state,
        accounts: [...state.accounts, newUser],
        error: action.payload,
        isAuthenticated: true,
      };

    case "user/logout":
      return {
        ...state,
        currentUser: null,
        error: action.paload,
        isAuthenticated: false,
      };

    case "rejected":
      return { ...state, error: action.payload };

    default:
      throw new Error("UNKNOWN ACTION");
  }
}

function AuthProvider({ children }) {
  const [{ currentUser, accounts, error, isAuthenticated }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchAccounts() {
      try {
        const req = await fetch(`${Base_Url}/users`);
        const data = await req.json();
        dispatch({ type: "users/loaded", payload: data });
        console.log(data);
      } catch {
        dispatch({
          type: "rejectec",
          payload: "there is error in fectching datas",
        });
      }
    }
    fetchAccounts();
  }, []);

  async function login(input, password) {
    try {
      const req = await fetch(`${Base_Url}/users`);
      const data = await req.json();
      data.email === input ||
        (data.number === input && data.password === password);
      dispatch({ type: "user/logged/in" });
    } catch {}
  }

  async function CreateAccount(newAccount) {
    try {
      const res = await fetch(`${Base_Url}/users/`, {
        method: "POST",
        body: JSON.stringify(newAccount),
        headers: {
          "Cotent-Type": "Application/JSON",
        },
      });
      const data = await res.json();
      // console.log(data);
      dispatch({ type: "newUser/signUp", payload: data });
    } catch {}
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        accounts,
        error,
        isAuthenticated,
        login,
        CreateAccount,
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
