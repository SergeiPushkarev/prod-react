import "app/styles/index.scss";
import { classNames } from "shared/lib/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <NavBar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
    </div>
  )
} 

export default App