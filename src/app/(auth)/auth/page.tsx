"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/actions/auth";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";



export default function Auth() {
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const isValid = await auth(token);
      if (isValid) {
        router.push('/');
        setErrorMessage('');
      } else {
        setErrorMessage('Token 错误！请检查');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
        console.error('token不正确');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const enterLogin = async (e: { key: string; }) => {
    if (e.key === 'Enter') {
      await handleLogin();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Asahi</h1>
      <div className="relative w-64">
        <Input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          onKeyDown={enterLogin}
          className="w-full border border-gray-400 rounded-lg p-2 pl-2 pr-8 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Token"
        />
        {/*TODO:后续修改，错误提示*/}
        {errorMessage && <div className="text-red-400 text-sm mt-2">{errorMessage}</div> && false}
        <Button onClick={handleLogin} variant="outline" size="icon"
                className="absolute top-0 right-0 h-full bg-transparent border-gray-400 hover:bg-gray-400 text-gray-500 font-bold px-2 rounded-r-lg flex items-center justify-center"
        >
          <ChevronRight />
        </Button>

      </div>
    </div>
  );
}
