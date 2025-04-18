import React from "react";

import { signIn } from "@/auth";
import { providerData } from "@/data/auth/providers";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/common/Cards/CoCard/CoCard";
import CoText from "@/components/common/CoText/CoText";

const Page = () => {
  return (
    <div className={"flex justify-center"}>
      <CoCard>
        <div className={"flex flex-col gap-4 p-4"}>
          <CoText className="text-xl md:text-3xl" text={"Sign In"} textProps={{ target: "Auth" }} />

          <div className={"flex flex-col gap-3"}>
            {providerData.map((item) => {
              return (
                <form
                  key={item.provider}
                  action={async () => {
                    "use server";

                    await signIn(item.provider, { redirectTo: "/" });
                  }}>
                  <CoButton
                    type={"submit"}
                    text={"Continue with"}
                    textProps={{
                      provider: item.providerMessage,
                      target: "Auth",
                    }}
                    icon={item.icon}
                  />
                </form>
              );
            })}
          </div>
        </div>
      </CoCard>
    </div>
  );
};

export default Page;
