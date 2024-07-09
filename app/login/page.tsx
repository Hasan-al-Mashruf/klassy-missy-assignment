import LoginForm from "@/components/Form/LoginForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login to Klassy Missy",
  description: "Login here",
};
const page = () => {
  return (
    <div
      style={{ boxShadow: "2px 4px 19.5px 0px rgba(0, 0, 0, 0.25)" }}
      className="max-w-[400px] mx-auto p-[14px] regiment rounded-sm bg-white"
    >
      <div className="text-center mx-auto mb-5">
        <div className="mb-5">
          <h4 className="text-[#404040] text-[15px] font-semibold mb-1">
            Let’s get started!
          </h4>
          <p className="text-[#404040] text-[10px] font-normal">
            It’ll take 2-3 minutes to understand <br /> you and your skin
            concern.{" "}
          </p>
        </div>
        <div className="w-[111px] mx-auto">
          <Image
            src="/thinking1.svg"
            alt="thinking"
            width={111}
            height={111}
            layout="responsive"
            placeholder="blur"
            loading="lazy"
            blurDataURL="data:image/jpeg..."
          />
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default page;
