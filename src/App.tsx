import { ToastContainer } from 'react-toastify';
import RouteList from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {
  return (
    <CartProvider>
      <GlobalStyles />
      <Header />
      <RouteList />
      <ToastContainer autoClose={3000} />
    </CartProvider>
  );
};

export default App;
