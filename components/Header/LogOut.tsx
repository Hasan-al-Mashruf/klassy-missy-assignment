"use client";
import { removeLoginUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

const LogOut = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  console.log({ user });
  return (
    <>
      {user && user?.isautheticated && (
        <>
          <button
            className="bg-black rounded-sm text-sm font-medium capitalize text-white py-3 px-[18px] "
            onClick={() => dispatch(removeLoginUser())}
          >
            Log Out
          </button>
        </>
      )}
    </>
  );
};

export default LogOut;
