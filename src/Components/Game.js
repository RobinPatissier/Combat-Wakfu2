import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { resetGame } from "../features/fight/fightSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const victory = useSelector((state) => state.fight.victory);
  const defeat = useSelector((state) => state.fight.defeat);
  const monsterName = useSelector((state) => state.fight.monster.name);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetGame());
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <div className="App">
            <div className="logo">
              <img
                className="logo_wakfu2"
                src="/images/Wakfu2.png"
                alt="Wakfu Logo"
              />
            </div>
            <Monster />
            <section className="container-fluid">
              <PlayerList />
            </section>
          </div>
        </div>
      ),
    },
    {
      path: "/victoire",
      element: (
        <div className="ecran_victoire">
          <video autoPlay muted className="background-video">
            <source src="/videos/Victoire.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>la Confrérie du Tofu a vaincu {monsterName} </h1>
          <nav>
            <Link to="/">
              <button className="btn" onClick={handleReset}>
                Reset Game
              </button>
            </Link>
          </nav>
        </div>
      ),
    },
    {
      path: "/defaite",
      element: (
        <div className="ecran_defaite">
          <video autoPlay muted className="background-video">
            <source src="/videos/Defaite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="text-center text-white pt-5">
            {monsterName} a vaincu la Confrérie du Tofu
          </h1>
          <nav>
            <Link to="/">
              <button className="btn text-center" onClick={handleReset}>
                Reset Game
              </button>
            </Link>
          </nav>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    if (victory) {
      router.navigate("/victoire"); // Rediriger vers la page de victoire lorsque victory est true
    }
  }, [victory, router]);

  useEffect(() => {
    if (defeat) {
      router.navigate("/defaite"); // Rediriger vers la page de defaite lorsque defeat est true
    }
  }, [defeat, monsterName]);

  return <RouterProvider router={router} />;
};


export default App;