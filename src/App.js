import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGTP3,
  Header,
} from "./containers/index";
import { Cta, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <div className="test gradient2__bg"></div>
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
