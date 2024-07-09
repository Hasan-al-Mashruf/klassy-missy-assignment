import { IRegiment } from "@/types/types.global";
import { format } from "date-fns";
import { FC } from "react";
const Card: FC<{ item: IRegiment }> = ({ item }) => {
  const formattedDate = format(new Date(item.date), "HH:mm:ss, d MMMM yyyy");

  return (
    <div className="bg-white p-[14px] pb-[29px] card">
      <h4 className="text-black text-[15px] font-normal">{item.name}</h4>
      <p className="text-black text-[10px] font-normal mb-3 mt-1">
        {formattedDate}
      </p>
      <h5 className="text-black text-[14px] font-light">{item?.creator}</h5>
    </div>
  );
};

export default Card;
