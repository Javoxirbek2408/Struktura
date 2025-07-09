// import { Button } from x'@/components/button';
import Cart from '@/components/CardPage/Cart';
import {
  addToCart,
  clearWishlist,
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

const FollovPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((w) => w.all.followedProducts);
  const [open, setIsOpen] = useState(false); //delete
  const [opend, setIsOpend] = useState(false); //all delete
  const [selected, setSelectedd] = useState(null); //delete
  const toggleOpen = () => setIsOpen(!open); //delete

  const toggleOpend = () => setIsOpend(!opend); //all delete

  const handleOpen = (product) => {
    setSelectedd(product);

    toggleOpen();
  };

  const handleToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };

  const [followed, setFollowed] = useState([]);

  const handleFollow = (product) => {
    dispatch(folowProduct(product));
    toast.success(`${product.name} added to cart`)
  };

  const handleAllDelete = () => {
    dispatch(clearWishlist());
    toggleOpen();
    toast.success("Muvaffaqiyatli o'chirildi");
  };

  return (
    <>
      {!wishlist?.length ? (
        <div className="!h-[calc(100vh- 104px)] w-full mt-30 flex items-center justify-center">
          <img
            className="w-[400px]"
            src="https://img.freepik.com/premium-vector/empty-wishlist-illustration-perfect-user-interface-uiux-projects_854078-2156.jpg"
            alt=""
          />
        </div>
      ) : (
        <div className="py-10 container space-y-10">
          <AlldeleteM
            open={opend}
            toggleOpen={toggleOpend}
            aaldete={handleAllDelete}
          />
          <div className="grid grid-cols-3 gap-4">
            {wishlist?.map((item) => (
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
                onFollow={() => handleFollow(item)}
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

export default FollovPage;

// import {
//   addToCart,
//   decrementMinus,
//   incrementPlus,
// } from '@/redux/slices/authSlice';

// import { ConfirmModal } from '@/components/modal';
// import { formatPrice } from '@/utils';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Cart from '@/components/CardPage/Cart';
// import { toast } from 'react-toastify';
// import AlldeleteM from '@/components/deleteAll/AlldeleteM';
// const FollovPage = () => {
//   const dispatch = useDispatch();
//   const wishlist = useSelector((w) => w.all.wishlist);
//   const [open, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const toggleOpen = () => setIsOpen(!open);
//   const [opend, setIsOpend] = useState(false);
//   const toggleOpend = () => setIsOpend(!opend);

//   const handleOpen = (product) => {
//     setSelected(product);
//     toggleOpen();
//   };

//   const handleToCart = (product) => {
//     dispatch(addToCart(product));
//     toast.success(`${product.name} added to cart`);
//   };

//   const handlFollow = (product) => {
//     dispatch(folowProduct(product));
//     toast.success(`${product.name} Added to Follow`);
//   };

//   return (
//     <div>
//       <AlldeleteM open={opend} toggleOpen={toggleOpend} />
//       <div className="py-10 container flex flex-wrap gap-4">
//         {wishlist?.map((item) => (
//           <Cart
//             key={item.id}
//             img={item?.image}
//             name={item.name}
//             price={formatPrice(item.price)}
//             inStock={item.inStock}
//             description={item.description}
//             onAddToCart={() => handleToCart(item)}
//             onMInus={() => dispatch(decrementMinus(item))}
//             onPlus={() => dispatch(incrementPlus(item))}
//             quantity={item.quantity}
//             onFollow={() => handlFollow(item)}
//             onDelete={() => handleOpen(item)}
//           />
//         ))}
//         <ConfirmModal open={open} toggleOpen={toggleOpen} item={selected} />
//       </div>
//     </div>
//   );
// };

// export default ;
