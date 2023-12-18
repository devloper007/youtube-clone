import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },{
      path: '/watch',
      element: <Watch />
    }
  ]
}]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
