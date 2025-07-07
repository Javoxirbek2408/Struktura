import { Button } from '@/components/button';
import { CATEGORY } from '@/constants';
import { useGetData } from '@/hooks/fetch-data';
import { addToCart } from '@/redux/slices/authSlice';
import { formatPrice } from '@/utils';
import {
  ArrowBigLeft,
  ArrowBigRight,
  LucideLoader,
} from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { data: categoryData, isLoading } = useGetData(CATEGORY, page);

  //cardga qushish
  const handleToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };
  console.log(page);

  return (
    <div className="py-10">
      {isLoading ? (
        <div className="text-4xl font-bold flex justify-center mt-24 ">
          <LucideLoader size={180} color="gray" />
        </div>
      ) : (
        <div className="container">
          <div className="grid grid-cols-3 gap-20">
            {categoryData?.map((item) => (
              <div
                key={item.id}
                className="bg-white pb-4 w-[350px] shadow-md rounded-md border border-gray-200 group"
              >
                <div className="h-[180px] w-full overflow-hidden">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 duration-300 transition-transform"
                  />
                </div>
                <div className="flex flex-col px-4 my-1">
                  <h3 className="mb-3">{item.name}</h3>
                  <p className="line-clamp-2 ">{item.description}</p>
                  <div className="flex items-center justify-between mt-5">
                    <strong>{formatPrice(item.price)}</strong>
                    <span>{item.inStock} шт</span>
                  </div>

                  <div className="mt-10 flex justify-between">
                    <Button onClick={() => handleToCart(item)}>
                      Add To Cart
                    </Button>
                    <Button onClick={() => {}}>
                      <HeartIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* pagedan gapjga utis */}
          </div>
          <div className="flex justify-center mt-6 gap-10">
            <button
              className="cursor-pointer px-4 py-2 bg-black text-white rounded-md font-bold text-xl"
              onClick={() => setPage(page - 1)}
            >
              <ArrowBigLeft />
            </button>
            <button
              className="cursor-pointer   px-4 py-2 bg-black text-white rounded-md font-bold text-xl"
              onClick={() => setPage(page + 1)}
            >
              <ArrowBigRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
