"use client";

import { signIn } from "next-auth/react";

import { providerData } from "@/data/auth/providers";
import { useTranslations } from "next-intl";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/common/Cards/CoCard/CoCard";

const Page = () => {
  const t = useTranslations("Auth");

  return (
    <div className={"flex justify-center"}>
      <CoCard>
        <div className={"flex flex-col gap-4 p-4"}>
          <span className="text-xl md:text-3xl">{t("Sign In")}</span>

          <div className={"flex flex-col gap-3"}>
            {providerData.map((item) => {
              return (
                <CoButton
                  key={item.provider}
                  type={"button"}
                  text={"Continue with"}
                  textProps={{
                    provider: item.providerMessage,
                    target: "Auth",
                  }}
                  onClick={async () => {
                    await signIn(item.provider, { redirectTo: "/" });
                  }}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </CoCard>
    </div>
  );
};

export default Page;
