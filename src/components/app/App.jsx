import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import LanguagePage from '../languages/LanguagePage';
import LanguageDetails from '../details/LanguageDetails';
import LanguageEdit from '../common/LanguageEdit';
export default function App() {
  return (
    <LanguageEdit/>
    // <Switch>
    //   <Route exact={true} path={'/:id'} component={LanguageDetails} />
    //   <Route exact={true} path={'/'} component={LanguagePage} />
    // </Switch>
  );
}
