import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import request from '@/services';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login: LoginFn } = useContext(AuthContext);

  const navigate = useNavigate();
  const userData = {
    username,
    password,
  };
  const login = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await request.post(
        'https://dummyjson.com/auth/login',
        userData
      );
      LoginFn(response.data.accessToken);
      setIsLoading(false);
      if (response.data.accessToken) {
        return navigate('/');
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || 'xato malumot kiritilgan';
      toast(message);
    }
  };
  return (
    <div className={'flex flex-col gap-6'}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={login}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">User Name</Label>
                <Input
                  onChange={({ target }) => setUsername(target.value)}
                  id="name"
                  type="text"
                  placeholder="jonh"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  onChange={({ target }) => setPassword(target.value)}
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
