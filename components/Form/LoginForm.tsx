"use client";
import { v4 as uuidv4 } from "uuid";
import Dropdown from "@/components/Dropdown/Dropdown";
import { loginNewUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { genderSData, selectConcernSData } from "@/staticData/data";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

// using dynamic import for performance and CSR
const ReactDayPicker = dynamic(
  () => import("@/components/DayPicker/DayPicker"),
  {
    ssr: false,
  }
);

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<any>({ shouldFocusError: false });
  const dispatch = useAppDispatch();
  const router = useRouter();

  // component states.....
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [gender, setGender] = useState({ value: "", label: "" });
  const [concern, setConcern] = useState({ value: "", label: "" });

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (selectedDate && gender && concern) {
      dispatch(
        loginNewUser({
          uuid: uuidv4(),
          name: data?.name,
          gender: gender?.value,
          concern: concern?.value,
          dob: selectedDate,
        })
      );
    }
    // clears all error if exist
    clearErrors();
    router.push("/regiment");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>What do you like to be called? *</label>
        <input
          {...register("name", { required: true, minLength: 5 })}
          type="text"
          className={`w-full border ${
            errors.name ? "border-yellow" : "border-borderColor"
          } rounded-sm py-[7px] px-[10px] mt-[9px]`}
          placeholder="Enter your valid name"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-[14px] mt-[14px]">
        <div>
          <label>I’m *</label>
          <Dropdown
            options={genderSData}
            value={gender}
            setNewValue={setGender}
            placeHolder=""
            registerFieldName=""
            register=""
            errors=""
          />
        </div>
        <div>
          <label>Seeking for *</label>
          <Dropdown
            options={selectConcernSData}
            value={concern}
            setNewValue={setConcern}
            placeHolder=""
            registerFieldName=""
            register=""
            errors=""
          />
        </div>
        <div>
          <label>Wish me on *</label>
          <ReactDayPicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            errors={errors}
            register={register}
            clearErrors={clearErrors}
          />
          <div className="mt-1">
            <p className="text-[8px] text-yellow">
              Who knows maybe a surprise waiting for you...
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-[20px]">
        <button
          type="submit"
          className="bg-black rounded-sm text-sm font-medium capitalize text-white py-1 px-[18px]"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
