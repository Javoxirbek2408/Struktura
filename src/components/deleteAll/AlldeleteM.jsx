import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { clearCart } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button } from '../button';

const AlldeleteM = ({ open, toggleOpen ,aaldete  }) => {
  const dispatch = useDispatch();



  return (
    <AlertDialog open={open} onOpenChange={toggleOpen}>
      <AlertDialogTrigger className="bg-amber-500 p-3 rounded-md">Hammasini o'chirirsh</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ishonchingiz komilmi?</AlertDialogTitle>
          <AlertDialogDescription>
            Ushbu amalni bekor qilib bo‘lmaydi. Bu mahsulot butunlay
            o‘chiriladi.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            onClick={toggleOpen}
            className="mr-2 px-3 py-1    bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
          >
            Bekor qilish
          </Button>
          <Button
            className="bg-red-600  text-white rounded-md px-4 py-2 font-bold hover:bg-red-700 transition"
            onClick={aaldete}
          >
            Ha, o'chir
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlldeleteM;
