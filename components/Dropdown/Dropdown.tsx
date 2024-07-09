import Select from "react-select";
import { DropdownIndicator } from "./DropdownIndicator";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Option } from "@/types/types.global";
import { selectStyle } from "@/lib/selectStyle";
import { useAppSelector } from "@/redux/hooks/hooks";

interface PageProps {
  options: Option[];
  value: any;
  setNewValue: any;
  placeHolder: string;
  register: any;
  registerFieldName: string;
  errors: any;
  clearErrors: any;
}

const Dropdown: FC<PageProps> = ({
  options,
  value,
  setNewValue,
  placeHolder,
  register,
  registerFieldName,
  errors,
  clearErrors,
}) => {
  const handleChange = (e: any) => {
    if (register) {
      clearErrors(registerFieldName);
    }
    setNewValue(e);
  };
  // redux states....
  const { userFormData } = useAppSelector((state) => state?.user);

  console.log({
    options,
  });
  return (
    <Select
      {...(register ? register(registerFieldName, { required: true }) : {})}
      placeholder={placeHolder}
      options={options}
      components={{ DropdownIndicator, IndicatorSeparator: () => null }}
      styles={selectStyle({ errors, registerFieldName })}
      defaultValue={
        !placeHolder && registerFieldName === "concern"
          ? userFormData?.concern ?? options[0]
          : registerFieldName === "gender"
          ? userFormData?.gender ?? options[0]
          : options[0]
      }
      // conditional object property assignment...
      {...(register ? { value } : {})}
      onChange={(e) => handleChange(e as Option[])}
      isMulti={register ? true : false}
      controlShouldRenderValue={register ? false : true}
      isClearable={false}
      isSearchable={true}
    />
  );
};

export default Dropdown;
