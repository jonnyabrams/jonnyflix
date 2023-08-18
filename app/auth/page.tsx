"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Input from "../../components/Input";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [authType, setAuthType] = useState("login");

  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  let error = searchParams.get("error");

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/profiles");
    }
  }, [session.status, router]);

  const toggleAuthType = useCallback(() => {
    setAuthType((currentAuthType) =>
      currentAuthType === "login" ? "signup" : "login"
    );
  }, []);

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const onRegisterSuccess = () => {
    toast("Success! Now please log in");
    clearInputs();
    setIsError(false);
    setAuthType("login");
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 ? onRegisterSuccess() : setIsError(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
    });
  };

  const iconContainerStyles =
    "w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition";

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="JonnyFlix"
            width={165}
            height={12}
          />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {authType === "login" ? "Sign In" : "Create an Account"}
            </h2>
            <div className="flex flex-col gap-4">
              {authType === "signup" && (
                <Input
                  label="Username"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                type="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                value={email}
              />
              <Input
                label="Password"
                type="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                value={password}
              />
            </div>
            <button
              onClick={authType === "login" ? handleLogin : handleRegister}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {authType === "login" ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className={iconContainerStyles}
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className={iconContainerStyles}
              >
                <FaGithub size={30} />
              </div>
            </div>
            <div className="text-neutral-500 mt-12">
              {authType === "login" ? "New to Jonnyflix?" : "Already a member?"}{" "}
              <span
                onClick={toggleAuthType}
                className="text-white ml-1 cursor-pointer hover:underline"
              >
                {authType === "login" ? "Sign up now" : "Log in"}
              </span>
              .
            </div>
            {isError && (
              <div className="pt-10">
                <span className="text-white text-[12px] font-light">
                  * Something went wrong
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
