import { components } from "react-select";
export const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/downChevron.svg" alt="Custom Indicator" />
    </components.DropdownIndicator>
  );
};
