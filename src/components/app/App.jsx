import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import LanguagePage from '../languages/LanguagePage';
import LanguageDetails from '../details/LanguageDetails';
import LanguageAddPage from '../language-add/LanguageAddPage';
export default function App() {
  return (
    
    <Switch>
      <Route exact={true} path={'/add'} component={LanguageAddPage} />
      <Route exact={true} path={'/:id'} component={LanguageDetails} />
      <Route exact={true} path={'/'} component={LanguagePage} />
    </Switch>
  );
}
