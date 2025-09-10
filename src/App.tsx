import "./App.css";
import { A, Route, Router, type RouteSectionProps } from "@solidjs/router";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Root(props: RouteSectionProps) {
  return (
    <div>
      <A href="/">Home</A>
      <A href="/about">About</A>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Router root={Root}>
      <Route path="/" component={Home} />
      <Route path="/about" component={() => <div>About</div>} />
    </Router>
  );
}

export default App;
