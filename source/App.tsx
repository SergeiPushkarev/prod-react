import "./styles/index.scss";
import {Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { Suspense, useContext, useState } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/ClassNames";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <Suspense fallback={<div>...Load</div>}>
          <Routes>
              <Route path={"/"} element={<MainPageLazy/>}/>
              <Route path={"/about"} element={<AboutPageLazy/>}/>
          </Routes>
        </Suspense>
    </div>
  )
} 

export default App