import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './Styles/GlobalStyles';

import Landing from './Pages/Landing';
import SkillsTree from './Pages/SkillsTree';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/SkillsTree" component={SkillsTree} />
        {/* <Route path="/About" component={About}/> */}
        {/* <Route path="/Projects" component={Projects}/> */}
      </Switch>
    </>
  );
}

export default App;