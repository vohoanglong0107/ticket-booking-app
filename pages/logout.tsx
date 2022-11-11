import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import { useState, useEffect } from "react";

const LogOutPage: NextPageWithLayout = () => {
  const { logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    logout();
    router.push("/signin");
  }, [logout, router]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogOutPage;
