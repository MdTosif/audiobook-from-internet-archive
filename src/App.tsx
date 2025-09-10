import { Route, Router, type RouteSectionProps } from "@solidjs/router";
import Home from "./pages/home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AudioPlaylist from "./components/audio-playlist/AudioPlaylist";

function Root(props: RouteSectionProps) {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router root={Root}>
      <Route path="/" component={Home} />
      <Route path="/audiobook/:bookId" component={AudioPlaylist} />
    </Router>
  );
}

export default App;
