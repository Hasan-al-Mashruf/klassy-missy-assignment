import Select from "react-select";
import { DropdownIndicator } from "./DropdownIndicator";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Option } from "@/types/types.global";
import { selectStyle } from "@/lib/selectStyle";

interface PageProps {
  options: Option[];
  value: any;
  setNewValue: any;
  placeHolder: string;
  register: any;
  registerFieldName: string;
  errors: any;
}

const Dropdown: FC<PageProps> = ({
  options,
  value,
  setNewValue,
  placeHolder,
  register,
  registerFieldName,
  errors,
}) => {
  const handleChange = (e: any) => {
    setNewValue(e);
  };
  return (
    <Select
      {...(registerFieldName
        ? register(registerFieldName, { required: value ? false : true })
        : {})}
      placeholder={placeHolder}
      options={options}
      components={{ DropdownIndicator, IndicatorSeparator: () => null }}
      styles={selectStyle({ errors, registerFieldName })}
      defaultValue={!placeHolder && options[0]}
      // conditional object property assignment...
      {...(registerFieldName ? { value } : {})}
      onChange={(e) => handleChange(e as Option[])}
      isMulti={registerFieldName ? true : false}
      controlShouldRenderValue={registerFieldName ? false : true}
      isClearable={false}
    />
  );
};

export default Dropdown;
