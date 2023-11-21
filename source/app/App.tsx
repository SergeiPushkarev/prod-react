import "app/styles/index.scss";
import { classNames } from "shared/lib/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <NavBar/>
        <AppRouter/>
        <button onClick={toggleTheme}> Toggle Theme</button>
    </div>
  )
} 

export default App