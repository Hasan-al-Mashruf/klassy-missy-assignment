import { useEffect, useRef, useState } from "react";
import { format, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const ReactDayPicker: React.FC<any> = ({
  selectedDate,
  setSelectedDate,
  errors,
  register,
  clearErrors,
}) => {
  const [showData, setShowData] = useState<boolean>(false);
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (e: MouseEvent): void => {
    if (
      dateInputRef.current &&
      !dateInputRef.current.contains(e.target as Node)
    ) {
      setShowData(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleDayClick = (selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    clearErrors("dob");
    setShowData(false);
  };

  const toggleDatePicker = () => {
    setShowData(!showData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors("dob");
  };

  return (
    <div ref={dateInputRef} className="relative">
      <div
        className={`border ${
          errors.dob ? "border-yellow" : "border-borderColor"
        } flex items-center gap-[15px] rounded-sm relative p-[7px]`}
      >
        <img src="./calendar.svg" alt="Calendar icon" />

        <input
          {...register("dob", { required: selectedDate ? false : true })}
          type="text"
          placeholder="Date of Birth"
          value={selectedDate ? format(selectedDate, "MM/dd/yyyy") : ""}
          className="text-sm h-10 font-normal text-black relative w-full"
          style={{ height: "fit-content" }}
          onClick={toggleDatePicker}
          onChange={handleInputChange}
        />
      </div>
      {showData && (
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDayClick}
        />
      )}
    </div>
  );
};

export default ReactDayPicker;
