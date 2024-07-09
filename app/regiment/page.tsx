import RegimentForm from "@/components/Form/RegimentForm";
import CheckUser from "@/HOC/CheckCurrentUser";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Regiment",
  description: "regiment",
};
const Regiment = () => {
  return (
    <CheckUser>
      <div
        style={{ boxShadow: "2px 4px 19.5px 0px rgba(0, 0, 0, 0.25)" }}
        className="max-w-[400px] mx-auto p-[14px] regiment rounded-sm bg-white"
      >
        <div>
          <div className="mb-5 w-[111px] mx-auto">
            <Image
              src="/thinking2.svg"
              alt="thinking"
              width={111}
              height={111}
              layout="responsive"
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:image/jpeg..."
            />
          </div>
          <RegimentForm />
        </div>
      </div>
    </CheckUser>
  );
};

export default Regiment;
