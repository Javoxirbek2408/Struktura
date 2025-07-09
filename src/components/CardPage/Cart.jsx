import { Button } from '@/components/button';
// import { formatPrice } from '@/utils';
import { HeartIcon } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = ({
  img,
  name,
  description,
  price,
  inStock,
  onAddToCart,
  onFollow,
  onDelete,
  onMInus,
  onPlus,
  quantity,
  item,
  iswished
}) => {
  const location = useLocation();
  const [liked, setLiked] = useState(false);


  // const handleClick = () => {
  //   const newLiked = !liked;
  //   setLiked(newLiked);
  //   onFollow(item);
  // };

  const handlFollow = (product) => {
    const newLiked = !liked;
    setLiked(newLiked);
    onFollow(item);
  };

  return (
    <div className="py-10">
      <div className="bg-white pb-4 w-[350px] shadow-md rounded-md border border-gray-200 group">
        <div className="h-[180px] w-full overflow-hidden">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 duration-300 transition-transform"
          />
        </div>
        <div className="flex flex-col px-4 my-1">
          <h3 className="mb-3">{name}</h3>
          <p className="line-clamp-2 ">{description}</p>
          <div className="flex items-center justify-between mt-5">
            <strong>{price}</strong>
            <span>{inStock} шт</span>
          </div>
          {location.pathname == '/cart' && (
            <div className="flex mt-3 items-center gap-4">
              <Button onClick={onMInus}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1pbnVzLWljb24gbHVjaWRlLW1pbnVzIj48cGF0aCBkPSJNNSAxMmgxNCIvPjwvc3ZnPg=="
                  alt=""
                />
              </Button>
              {quantity}
              <Button onClick={onPlus}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMtaWNvbiBsdWNpZGUtcGx1cyI+PHBhdGggZD0iTTUgMTJoMTQiLz48cGF0aCBkPSJNMTIgNXYxNCIvPjwvc3ZnPg=="
                  alt=""
                />
              </Button>
            </div>
          )}

          <div className="mt-10 flex justify-between">
            {location.pathname !== '/cart' && (
              <Button
                className={'bg-gray-300'}
                onClick={() => onAddToCart(item)}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWJhc2tldC1pY29uIGx1Y2lkZS1zaG9wcGluZy1iYXNrZXQiPjxwYXRoIGQ9Im0xNSAxMS0xIDkiLz48cGF0aCBkPSJtMTkgMTEtNC03Ii8+PHBhdGggZD0iTTIgMTFoMjAiLz48cGF0aCBkPSJtMy41IDExIDEuNiA3LjRhMiAyIDAgMCAwIDIgMS42aDkuOGEyIDIgMCAwIDAgMi0xLjZsMS43LTcuNCIvPjxwYXRoIGQ9Ik00LjUgMTUuNWgxNSIvPjxwYXRoIGQ9Im01IDExIDQtNyIvPjxwYXRoIGQ9Im05IDExIDEgOSIvPjwvc3ZnPg=="
                  alt=""
                />
              </Button>
            )}
            {location.pathname !== '/' && (
              <Button className={'bg-gray-300'} onClick={() => onDelete(item)}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLWljb24gbHVjaWRlLXRyYXNoIj48cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2Ii8+PHBhdGggZD0iTTMgNmgxOCIvPjxwYXRoIGQ9Ik04IDZWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyIi8+PC9zdmc+"
                  alt=""
                />
              </Button>
            )}
            {location.pathname !== '/follow' && (
              <Button className={'bg-gray-300'} onClick={handlFollow}>
                <HeartIcon
                  className={iswished ? 'text-red-500 fill-red-500' : ''}
                />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
