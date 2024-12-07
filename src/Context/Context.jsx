import { createContext, useState, useEffect, useContext, useReducer } from "react";

const dentStates = createContext();
const isFavs = JSON.parse(localStorage.getItem('favs')) || [];

const Context = ({ children }) => {
  const [error, setError] = useState(null);

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return { ...state, users: action.payload };
      case "ADD_FAV": {
        const isDuplicate = state.favs.some(fav => fav.id === action.payload.id);
        return isDuplicate
          ? state
          : { ...state, favs: [...state.favs, action.payload] };
      }
      case "REMOVE_FAV":
        return {
          ...state,
          favs: state.favs.filter(fav => fav.id !== action.payload)
        };
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
      default:
        throw new Error(`Action type ${action.type} is not handled`);
    }
  };
  
  

  const initialState = {
    favs: isFavs,
    users: [],
    theme: "light",
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        dispatch({ type: "GET_USERS", payload: data });
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchUsers();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <dentStates.Provider value={{ state, dispatch }}>
      {error ? <p>Error: {error}</p> : children}
    </dentStates.Provider>
  );
  
};

export default Context;

export const useDentStates = () => useContext(dentStates);
