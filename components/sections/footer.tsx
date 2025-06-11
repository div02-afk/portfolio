"use client";
import userData from "@/config/userData";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const Footer = () => {
  const { email } = userData.personalInfo;
  const { date, time } = userData.lastUpdated;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row w-full justify-between gap-2 md:gap-1 items-start md:items-center">
          <p className="text-xs font-normal text-muted-foreground">
            Last updated by Lokendra on {date}, {time}
          </p>
          <div className="md:flex-grow hidden border-b border-dashed border-border" />
          <div className="flex justify-center items-center">
            <Button
              className="scale-[75%] size-6"
              variant="ghost"
              size="icon"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="text-muted-foreground" />
              ) : (
                <Copy className="text-muted-foreground" />
              )}
            </Button>

            <p className="text-xs font-normal text-muted-foreground text-right">
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;