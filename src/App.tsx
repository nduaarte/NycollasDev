import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import GlobalStyles from './Styles/GlobalStyles';
import { store } from './redux/index'

import Landing from './Pages/Landing';
import SkillsTree from './Pages/SkillsTree';
import About from './Pages/About';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/SkillsTree" component={SkillsTree} />
        <Route path="/About" component={About}/>
        {/* <Route path="/Projects" component={Projects}/> */}
      </Switch>
    </Provider>
  );
}

export default App;