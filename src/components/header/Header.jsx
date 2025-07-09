import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../button';
import { logout } from '@/redux/slices/authSlice';

export const Header = () => {
  const cart = useSelector((s) => s.all.cart);
  const followedProducts = useSelector((s) => s.all.followedProducts);
  const auth = useSelector((s) => s.all.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoLogin = () => {
    if (auth) {
      dispatch(logout());
      window.location.reload();
    } else {
      navigate('/auth/login');
    }
  };
  
  return (
    <header className="bg-body-color text-white py-7 ">
      <div className="container flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">
          U7
        </Link>

        <div className="flex items-center gap-10">
          <Button
            onClick={handleGoLogin}
            className={`text-2xl px-7 font-bold ${
              auth ? 'bg-red-600' : 'bg-amber-500'
            } text-white  $`}
          >
            {auth ? 'Logout' : 'Login'}
          </Button>
          <Link
            to={auth ? '/cart' : '/auth/login'}
            className={`text-2xl px-7 font-bold  bg-amber-500 text-white rounded-md  py-2 flex items-center gap-1 $`}
          >
            Cart
            {cart.length !== 0 && (
              <span className="text-red-600">({cart.length})</span>
            )}
          </Link>
          <Link
            to={auth ? '/follow' : '/auth/login'}
            className={`text-2xl px-7 font-bold  bg-amber-500 text-white rounded-md  py-2 flex items-center gap-1 $`}
          >
            Follow
            {followedProducts?.length !== 0 && (
              <span className="text-red-600">({followedProducts?.length})</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
