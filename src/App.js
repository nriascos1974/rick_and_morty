import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import NoFound from "./components/NoFound/NoFound";
import Login from "./components/Login/Login";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Pages from "./components/Paginas/Pages";
import { connect, useDispatch } from "react-redux";
import { deleteFavorites, getFavorites } from "./redux/actions";
import axios from "axios";
/* cleanFavorites , cleanFavorites*/
export function App({ deleteFavorites}) {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();

  //!*Hooks para capturar la url solicitada por el usuario, en este caso la primera que se pide es la "/" con esta voy a validar para renderizar la NavBar, useLocation devuelve un objeto y este tiene la propiedad pathname
  const { pathname } = useLocation();

  //!*Hooks para para redireccionar rutas
  const navigate = useNavigate();

  //!*Estado para simular validacion de acceso a la aplicacion
  const [access, setAccess] = useState(false);

  //!*Usuario quemado con mi email
  const username = "nriascos@gmail.com";

  //!*Contraseña quemada
  const password = "ABcd12345";

  function onSearch(character) {
    //!* Si presionan el Boton Clean, el parametro Chacter viene vacio y se limpia el estado de Characters
    if (!character) {
      setCharacters([]);
      /* cleanFavorites(); */
      return;
    }

    //!* Se realiza la busqueda del Character que viene como parametro y se pasa a la API

    /* const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "c9c4684eb62f.3cbe7e7fb6376e8e878d"; */

    //fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        //!* Si la API devuelve un Character que no esta agregado lo agrega al arreglo
        if (
          data.name &&
          characters.findIndex((obj) => obj.id === data.id) === -1
        ) {
          setCharacters((oldChars) => [...oldChars, data]);

          //!* Si la API devuelve un Character, se valida que no se repita
        } else if (characters.findIndex((obj) => obj.id === data.id) !== -1) {
          alert(`El Personaje ${data.name} ya se encuentra agregado`);

          //!* Si la API no devuelve un Character
        } else {
          alert(`No hay personaje con ID => ${character}`);
        }
      });
  }

  //!* Funcion para cerrar cada tarjeta
  function onClose(character) {
    const filterCharacter = characters.filter((char) => char.id !== character);
    deleteFavorites(character);
    setCharacters(filterCharacter);
  }

  //!* Funcion que valida si el usuario y contraseña son validos para redireccionar al home
  async function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      setCharacters([]);
      // cleanFavorites(); 
      navigate("/home");
    } else {
      alert("User Name/Password Incorrectos");
    }
    /* try {
      const response = await axios.post("http://localhost:3001",userData)
    } catch (error) {
      console.log(error)
    }
 */

  }

  //*Trae los favoritos que xistan en base de datos desde el servidor
  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  //!*Esto no nos dejará navegar por la aplicación, al menos que ingresemos la información correcta!
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* //!* Si la longitud del pathname es mayor 1 renderizo el NavBar, de lo contrario no se muestra */}
      {pathname.length > 1 && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} onClose={onClose} />
        <Route path="/pages" element={<Pages />} onClose={onClose} />

        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
    /* cleanFavorites: () => dispatch(cleanFavorites()), */
  };
};

export default connect(null, mapDispatchToProps)(App);
