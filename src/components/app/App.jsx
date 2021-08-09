import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import LanguagePage from '../languages/LanguagePage';
import LanguageDetails from '../details/LanguageDetails';
import LanguageAddPage from '../language-add/LanguageAddPage';
import LanguageEditPage from '../language-edit/LanguageEditPage';
import Header from '../header/Header';
import './App.css';
export default function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Switch>
          <Route exact={true} path={'/add'} component={LanguageAddPage} />
          <Route exact={true} path={'/edit/:id'} component={LanguageEditPage} />
          <Route exact={true} path={'/:id'} component={LanguageDetails} />
          <Route exact={true} path={'/'} component={LanguagePage} />
        </Switch>
      </main>
    </div>
  );
}
