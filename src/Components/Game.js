import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const victory = useSelector((state) => state.fight.victory);
  const defeat = useSelector((state) => state.fight.defeat);
  const monsterName = useSelector((state) => state.fight.monster.name);

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
          <nav>
            <Link to="/victoire">victoire</Link>
            <Link to="/defaite">defaite</Link>
          </nav>
        </div>
      ),
    },
    {
      path: "/victoire",
      element: (
        <div className="ecran_victoire ml3">
          <h1 class="ml3">{monsterName} a vaincu la Confrérie du Tofu</h1>
          <img src="../../images/nox.gif"></img>
          <nav>
            <Link to="/">Accueil</Link>
          </nav>
        </div>
      ),
    },
    {
      path: "/defaite",
      element: (
        <div>
          <h1 class="ml3">{monsterName} a vaincu la Confrérie du Tofu</h1>
          <nav>
            <Link to="/victoire">Accueil</Link>
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
      console.log("defaite");
    }
  }, [defeat, monsterName]);

  return <RouterProvider router={router} />;
};


export default App;