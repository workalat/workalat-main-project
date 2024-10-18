import { Box, Button } from "@mui/material";
import Image from "next/image";
import ArrowForward from "@mui/icons-material/ArrowForward";

import currentBalanceIcon from "@/public/icons/current_balance.svg";

export default function CurrentBalance({data, payGoValue, change}) {
  {console.log(payGoValue)}
  return (
    <Box className="bg-main rounded-md flex justify-between items-center p-4 py-8 flex-wrap gap-y-8">
        <Box className="flex gap-4">
            <Image src={currentBalanceIcon} alt="Current balance" />
            <Box className="text-white">
                <p>Your Balance</p>
                <p className="font-bold text-2xl">{data} Points</p>
            </Box>
        </Box>
        {

        }
        <Button variant="contained" onClick={change} >
           {(payGoValue || payGoValue === true ) ? "Deactivate Pay As You Go" : "Activate Pay As You Go"}  
            <ArrowForward className="w-5 ml-2" />
        </Button>
    </Box>
  )
}
