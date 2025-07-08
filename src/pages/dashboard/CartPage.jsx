// import { Button } from x'@/components/button';
import Cart from '@/components/CardPage/Cart';
import {
  addToCart,
  decrementMinus,
  folowProduct,
  incrementPlus,
} from '@/redux/slices/authSlice';

import { ConfirmModal } from '@/components/modal';
import { formatPrice } from '@/utils';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlldeleteM from '@/components/deleteAll/AlldeleteM';
import { toast } from 'react-toastify';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.all.cart);
  const [open, setIsOpen] = useState(false);
  const [opend, setIsOpend] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggleOpen = () => setIsOpen(!open);


  const toggleOpend = () => setIsOpend(!opend);

  const handleOpen = (product) => {
    setSelected(product);
    toggleOpen();
  };

  const handleToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };

  const handlFollow = (product) => {
    dispatch(folowProduct(product));
    toast.success(`${product.name} Added to Follow`);
  };
  return (
    <>
      {!cart.length ? (
        <div className="!h-[calc(100vh- 104px)] w-full mt-30 flex items-center justify-center">
          <img className='w-[400px]' src="https://static.vecteezy.com/system/resources/previews/005/006/007/non_2x/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" />
        </div>
      ) : (
        <div className="py-10 container space-y-10">
          <AlldeleteM open={opend} toggleOpen={toggleOpend} />
          <div className="grid grid-cols-3 gap-4">
            {cart?.map((item) => (
              <Cart
                key={item.id}
                img={item?.image}
                name={item.name}
                price={formatPrice(item.price)}
                inStock={item.inStock}
                description={item.description}
                onAddToCart={() => handleToCart(item)}
                onMInus={() => dispatch(decrementMinus(item.id))}
                onPlus={() => dispatch(incrementPlus(item.id))}
                quantity={item.quantity}
                onFollow={() => handlFollow(item)}
                onDelete={() => handleOpen(item)}
              />
            ))}
          </div>
          <ConfirmModal open={open} toggleOpen={toggleOpen} item={selected} />
        </div>
      )}
    </>
  );
};

export default CartPage;
