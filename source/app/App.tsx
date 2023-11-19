import "app/styles/index.scss";
import {Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "helpers/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <Suspense fallback={<div>...Load</div>}>
          <Routes>
              <Route path={"/"} element={<MainPage/>}/>
              <Route path={"/about"} element={<AboutPage/>}/>
          </Routes>
        </Suspense>
    </div>
  )
} 

export default App