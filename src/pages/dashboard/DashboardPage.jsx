import { Button } from '@/components/button';
import Cart from '@/components/CardPage/Cart';
import { Input } from '@/components/ui/input';
import { CATEGORY } from '@/constants';
import { useGetData } from '@/hooks/fetch-data';
import { addToCart, folowProduct } from '@/redux/slices/authSlice';
import { formatPrice } from '@/utils';
import {
  ArrowBigLeft,
  ArrowBigRight,
  // HeartIcon,
  LucideLoader,
  Search,
} from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data: categoryData, isLoading } = useGetData(CATEGORY, page);

  // cardga qushish
  const handleToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };
  console.log(page);

  const handlFollow = (product) => {
    dispatch(folowProduct(product));
    toast.success(`${product.name} Added to Follow`);
  };
  const redLike = () => {
    // const redd
  };

  const filteredData = categoryData?.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10">
      {isLoading ? (
        <div className="text-4xl font-bold flex justify-center mt-24 ">
          <LucideLoader size={180} color="gray" />
        </div>
      ) : (
        <div className="container">
          <div className="relative">
            <label htmlFor="search">
              <Search className="absolute left-[320px] top-1.5" />
            </label>
            <Input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className={'bg-gray-500 w-[300px] '}
            />
          </div>

          <div className="grid grid-cols-3 gap-20">
            {filteredData?.map((item) => (
              <Cart
                key={item.id}
                img={item?.image}
                name={item.name}
                price={formatPrice(item.price)}
                inStock={item.inStock}
                description={item.description}
                quantity={item.quantity}
                onAddToCart={() => handleToCart(item)}
                onFollow={() => handlFollow(item)}
              />
            ))}

            {/* pagedan gapjga utis */}
          </div>
          <div className="flex justify-center mt-6 gap-10">
            <button
              disabled={page <= 0}
              className={`px-4 py-2 rounded-md font-bold text-xl ${
                page <= 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black text-white'
              }`}
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
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
