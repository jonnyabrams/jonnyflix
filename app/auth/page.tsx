"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import axios from "axios";

import Input from "../components/Input";
import { toast } from "react-hot-toast";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authType, setAuthType] = useState("login");

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

  const register = useCallback(() => {
    try {
      axios.post("/api/auth/register", {
        email,
        name,
        password,
      });
      toast("Success! Now please log in");
      clearInputs();
      setAuthType("login");
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password]);

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
              onClick={register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {authType === "login" ? "Sign In" : "Sign Up"}
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
