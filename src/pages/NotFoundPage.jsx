import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/button/Button";

export const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center flex flex-col justify-center items-center gap-4">
          <h1 className="text-[48px] font-bold text-primary-text">404</h1>
          <p className="text-gray-600 text-lg mb-4">
            Oops! The page you are looking for could not be found.
          </p>
          <Link to="/">
            <Button size="lg">Go back to home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
