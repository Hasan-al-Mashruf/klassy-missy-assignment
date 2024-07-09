import {
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  StylesConfig,
} from "react-select";
import { Option } from "@/types/types.global";

interface SelectStyleProps {
  errors: any;
  registerFieldName: string;
}

export const selectStyle = ({
  errors,
  registerFieldName,
}: SelectStyleProps): StylesConfig<Option> => ({
  dropdownIndicator: (
    base: CSSObjectWithLabel,
    state: DropdownIndicatorProps<Option, boolean, GroupBase<Option>>
  ) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : undefined,
    padding: 0,
  }),
  control: (base, { isFocused }) => ({
    ...base,
    border: `1px solid ${errors[registerFieldName] ? "#FF8A00" : "#ECECEC"}`,
    borderRadius: "2px",
    boxShadow: "none",
    background: "#fff",
    fontSize: "13px",
    color: "#404040",
    fontWeight: "400",
    minHeight: 30,
    paddingLeft: 8,
    paddingRight: 8,
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    fontSize: "13px",
    color: "#404040",
    fontWeight: "400",
    backgroundColor: isFocused ? "#F3F3F3" : "#fff",
    zIndex: 1,
    cursor: isSelected ? "not-allowed" : "default",
    borderRadius: isFocused ? 40 : 0,
  }),
  menu: (base) => ({
    ...base,
    padding: 10,
    borderRadius: "3px",
    background: "#fff",
    boxShadow: "1px 1px 8.2px 1px rgba(0, 0, 0, 0.15)",
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
});
