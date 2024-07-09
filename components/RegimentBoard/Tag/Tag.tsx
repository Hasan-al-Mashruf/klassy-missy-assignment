import { Option } from "@/types/types.global";
import { FC } from "react";

interface PageProps {
  value: Option[];
  terms: string;
  handleTags: any;
}
const Tag: FC<PageProps> = ({ value, handleTags, terms }) => {
  console.log({ value });
  return (
    <>
      {value.length > 0 && (
        <div className="flex flex-wrap gap-x-[14px] gap-y-2 mt-[22px]">
          {value?.map((data, index) => {
            return (
              <div
                className="flex items-center bg-red-100 text-red-700 px-[10px] py-[7px] rounded bg-[#FFF0F0] w-fit gap-2"
                key={index}
              >
                <h3 className="text-[#920000] text-[13px]">{data.label}</h3>
                <button
                  className="ml-2"
                  onClick={() => handleTags(data.value, terms)}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.89545 5L9.73835 2.1571C10.0872 1.80824 10.0872 1.24261 9.73835 0.893466L9.10653 0.261648C8.75767 -0.0872159 8.19205 -0.0872159 7.8429 0.261648L5 3.10455L2.1571 0.261648C1.80824 -0.0872159 1.24261 -0.0872159 0.893466 0.261648L0.261648 0.893466C-0.0872159 1.24233 -0.0872159 1.80795 0.261648 2.1571L3.10455 5L0.261648 7.8429C-0.0872159 8.19176 -0.0872159 8.75739 0.261648 9.10653L0.893466 9.73835C1.24233 10.0872 1.80824 10.0872 2.1571 9.73835L5 6.89545L7.8429 9.73835C8.19176 10.0872 8.75767 10.0872 9.10653 9.73835L9.73835 9.10653C10.0872 8.75767 10.0872 8.19205 9.73835 7.8429L6.89545 5Z"
                      fill="#FF0000"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Tag;
