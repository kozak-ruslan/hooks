import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseRedux from "./redux/store/store";


const StateComponent = lazy(() => import("./examples/State"));
const Home = lazy(() => import("./examples/Home"));
const EffectComponent = lazy(() => import("./examples/Effect"));
const RefComponent = lazy(() => import("./examples/Ref"));
const MemoComponent = lazy(() => import("./examples/Memo"));
const CollBackComponent = lazy(() => import("./examples/Collback"));
const ContextComponent = lazy(() => import("./examples/Context"));
const Users = lazy(() => import("./page/Users"));
const Memo = lazy(() => import("./page/Memo"));

function App() {
  return (
    <div className="app">
      <header className="app-header">Hooks React</header>
      <Router>
        <div className="main">
          <nav className="sidebar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/state">useState</Link>
              </li>
              <li>
                <Link to="/effect">useEffect</Link>
              </li>
              <li>
                <Link to="/ref">useRef</Link>
              </li>
              <li>
                <Link to="/memo">useMemo</Link>
              </li>
              <li>
                <Link to="/collback">useCollback</Link>
              </li>
              <li>
                <Link to="/context">useContext</Link>
              </li>
              <li>
                <Link to="/users">users</Link>
              </li>
              <li>
                <Link to="/memoPage">memo-page</Link>
              </li>
            </ul>
          </nav>
          <UseRedux>
            <Suspense fallback={<div>Завантаження...</div>}>
              <Switch>
                <Route path="/state" component={StateComponent}></Route>
                <Route path="/effect">
                  <EffectComponent />
                </Route>
                <Route path="/ref">
                  <RefComponent />
                </Route>
                <Route path="/memo">
                  <MemoComponent />
                </Route>
                <Route path="/collback">
                  <CollBackComponent />
                </Route>
                <Route path="/context">
                  <ContextComponent />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/memoPage">
                  <Memo />
                </Route>
                
                <Route path="/" component={Home}></Route>
              </Switch>
            </Suspense>
          </UseRedux>
        </div>
      </Router>
    </div>
  );
}

export default App;
