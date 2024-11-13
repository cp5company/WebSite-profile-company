"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { NavData } from "./type/typdata";
const DropdownMenuRadiochanglang: React.FC<{ navData: NavData }> = ({
  navData,
}) => {
  const router = useRouter();
  const localeActive = useLocale();

  const handleChangeLang = (value: string) => {
    router.replace(`/${value}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{navData.changelag}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={localeActive}
          onValueChange={handleChangeLang}
        >
          <DropdownMenuRadioItem value="en">{navData.en}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ar">{navData.ar}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuRadiochanglang;
