// lib/checkUser.ts
"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckUser = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector((state) => state.user.user);
  const router = useRouter();

  useEffect(() => {
    if (!user || Object.keys(user).length <= 0) {
      router.push("/login");
    }
  }, [user, router]);
  // how to wriet equals to ior greater =than

  if (!user || Object.keys(user).length <= 0) {
    return null;
  }
  console.log({ user });
  return <>{children}</>;
};

export default CheckUser;
