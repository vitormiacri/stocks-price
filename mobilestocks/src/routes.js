import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import { Container } from './styles';

import Home from './pages/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
  })
);

export default Routes;
