"use client";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { concernSData, selectConcernSData } from "@/staticData/data";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Tag from "../RegimentBoard/Tag/Tag";
import { addToBoard } from "@/redux/features/regiment/regimentSlice";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const RegimentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<any>({
    shouldFocusError: false,
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  // redux states....
  const { user } = useAppSelector((state) => state?.user);

  // component states.....
  const [selectConcernData, setSelectConcernData] = useState([]);
  const [concernData, setConcernData] = useState([]);

  const onSubmit: SubmitHandler<any> = async (data) => {
    const shortUuid = uuidv4().split("-")[0];
    console.log({ shortUuid });
    if (selectConcernData && concernData && user && user.name) {
      dispatch(
        addToBoard({
          uuid: shortUuid,
          name: `Regimen: RGM${shortUuid}`,
          date: new Date().toISOString(),
          status: "incoming",
          creator: user?.name,
        })
      );
    }
    clearErrors();
    router.push("/");
    router.refresh();
  };
  const handleTags = (value: any[], terms: string) => {
    if (terms == "concernData") {
      setConcernData(concernData?.filter((data: any) => data.value !== value));
      return;
    }
    setSelectConcernData(
      selectConcernData?.filter((data: any) => data.value !== value)
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex justify-between items-center mb-[9px] flex-wrap gap-1">
          <label>What’s your concern?</label>
          <span className="text-[#929292] text-[10px] pr-5">
            (You can select multiple concern )
          </span>
        </div>
        <Dropdown
          options={selectConcernSData}
          value={selectConcernData}
          setNewValue={setSelectConcernData}
          placeHolder="Select your concern or search by keyword"
          register={register}
          errors={errors}
          registerFieldName={"selectConcernData"}
        />
        <Tag
          value={selectConcernData}
          handleTags={handleTags}
          terms="selectConcernData"
        />
      </div>
      <div>
        <div className="mb-[9px] mt-[22px]">
          <label htmlFor="">
            Do you have any eye area concerns, {user?.name} ?
          </label>
        </div>
        <div className="flex gap-[18px] justify-between">
          <div className="flex-1">
            <Dropdown
              options={concernSData}
              value={concernData}
              setNewValue={setConcernData}
              placeHolder="Select eye area concerns"
              register={register}
              registerFieldName={"concernData"}
              errors={errors}
            />
          </div>
          <button className="border border-[#ECECEC] bg-white rounded-sm w-[30px] h-[30px] flex items-center justify-center">
            <img src="/light.svg" alt="" />
          </button>
        </div>
        <Tag value={concernData} handleTags={handleTags} terms="concernData" />
      </div>
      <div className="flex flex-col gap-[9px] mt-[22px]">
        <label>What’s your concern? *</label>
        <textarea
          {...register("message", { required: true, minLength: 5 })}
          placeholder="Please write details about your skin concerns and mention A to Z skin problem’s"
          className={`w-full border ${
            errors.message ? "border-yellow" : "border-borderColor"
          } rounded-sm py-[7px] px-[10px]`}
          rows={4}
          cols={50}
        ></textarea>
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <Link
          href="/login"
          className="border border-[#B7B7B7] bg-white rounded-sm px-[6px] py-0 flex items-center justify-center"
        >
          <img src="/back.svg" alt="" />
        </Link>
        <button
          type="submit"
          className="bg-black rounded-sm text-sm font-medium capitalize text-white py-1 px-[18px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegimentForm;
