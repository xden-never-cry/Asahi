"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Login() {
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (token.trim()!== '') {
      try {
        router.push('/');
      } catch (error) {
        console.error('登录出错', error);
      }
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
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          onKeyDown={enterLogin}
          className="w-full border border-gray-300 rounded-lg p-2 pl-2 pr-8 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder=""
        />
        <button
          onClick={handleLogin}
          className="absolute top-0 right-0 h-full bg-transparent hover:bg-gray-400 text-gray-500 font-bold px-2 rounded-r-lg flex items-center justify-center"
        >
          <span className="text-sm">&rarr;</span>
        </button>
      </div>
    </div>
  );
}