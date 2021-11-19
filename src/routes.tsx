import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

const RouteList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" caseSensitive={true} element={<Home />} />
      <Route path="/cart" caseSensitive={true} element={<Cart />} />
    </Routes>
  );
};

export default RouteList;
