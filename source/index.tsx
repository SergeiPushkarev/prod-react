/* eslint-disable react/no-deprecated */
import {render} from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import "app/styles/index.scss";
import "app/styles/font/font.scss";
import { StoreProvider } from 'app/providers/StoreProvider';

render (
  <ErrorBoundary>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App/>
        </ThemeProvider> 
      </BrowserRouter>
    </StoreProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)