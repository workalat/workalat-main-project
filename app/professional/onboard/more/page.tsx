"use client";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Close from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MoreInfoPage() {
  // router
  const router = useRouter();

  // more leads
  const [moreLeads, setMoreLeads] = useState<string[]>([]);
  const extraServiceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMoreLeads(["Ironing Services"]);
  }, []);

  const addMoreServices = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newService = extraServiceRef.current?.value;

    if (newService) {
      setMoreLeads([...moreLeads, newService]);
      extraServiceRef.current!.value = "";
    }
  };

  return (
    <Box className="w-full h-full flex justify-center items-start">
      <Box className="w-full max-w-4xl p-6">
        <h1 className="font-bold text-2xl lg:text-3xl text-center">
          Maximise your leads
        </h1>
        <p className="lg:text-xl text-black text-opacity-70 text-center">
          Add other services you can provide
        </p>
        <Box className="p-4 py-8 md:p-8 xl:p-16 border shadow-md rounded-md bg-white w-full mt-6 space-y-12">
          <Box>
            <p className="mb-2">You&apos;ve signed up for</p>
            <Box className="bg-gray-200 rounded-md px-4 py-2 w-max">
              Dry cleaning & laundry service
            </Box>
          </Box>
          <Box>
            <p className="text-black text-opacity-50 font-semibold mb-2">
              We will also share you leads from
            </p>
            <form
              className="mt-6 border border-gray-300 hover:border-secondary [&:has(input:focus)]:border-secondary rounded-md flex justify-between p-2"
              onSubmit={addMoreServices}
            >
              <input
                ref={extraServiceRef}
                type="text"
                placeholder="Add more services"
                className="rounded-md py-2 px-4 md:text-lg focus:outline-none w-full"
              />
              <Box className="flex gap-4 flex-wrap">
                {moreLeads.map((lead, index) => (
                  <Box
                    key={index}
                    className="bg-main text-white rounded-md px-4 py-2 w-max"
                  >
                    {lead}
                    <Close role="button" className="ml-2" />
                  </Box>
                ))}
              </Box>
            </form>
          </Box>
          {/* <Box className="p-4 bg-gray-200 flex justify-between rounded-md">
            <Box>
                <h2 className="font-semibold">331</h2>
                <p>Current available leads</p>
            </Box>
          </Box> */}
          <div className="w-full flex justify-end">
            <Button
              variant="contained"
              size="large"
              className="font-semibold"
              onClick={() => router.push("/leads")}
            >
              See leads
              <ArrowForward className="w-5 ml-2" />
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
