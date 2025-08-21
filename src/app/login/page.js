"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast"; // optional for notifications


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCredentialsLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  await signIn("credentials", {
    redirect: true, 
    callbackUrl: "/dashboard",
    email,
    password,
  });

  setLoading(false);
};

  const handleGoogleLogin = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Login to NextMart
        </h1>

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-md bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-slate-400">or login with</span>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition font-medium"
          >
            {/* <FcGoogle size={20} /> */}
            Google
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-400 text-center">
          Don not have an account?{" "}
          <a href="/register" className="text-amber-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
