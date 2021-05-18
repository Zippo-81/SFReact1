import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import FaqPage from "./components/FaqPage/FaqPage";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
            <Header/>
              <main className="main">
                  <Route render={() => <AboutPage />} path="/about"/>
                  <Route render={() => <FaqPage />} path="/faq"/>
              </main>
            <Footer/>
          </div>
      </BrowserRouter>
  );
};

export default App;
