import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import arrowRightIcon from "@/public/icons/arrow_right.svg";
import doneIcon from "@/public/icons/done.svg";

const Done = () => {
  const router = useRouter();

  const finish = () => {
    localStorage.removeItem("stepFormData");
    localStorage.removeItem("activeStep");
    // alert(
    //   "Your project has been posted successfully, we are linking you to the qualified professional."
    // );
    router.push("/client/my-projects");
  };

  return (
    <>
      <Image src={doneIcon} alt="Done" className="w-8 h-8 sm:w-auto sm:h-auto" />
      <h1 className="text-2xl font-bold text-center">Done</h1>
      <p className="mb-2 -mt-4 text-center max-w-[350px]">
        Your project has been posted successfully, we are linking you to the
        qualified professional.
      </p>
      <div className="flex justify-center items-center">
        <Button
          variant="contained"
          className="h-[50px] w-[240px] rounded-sm flex gap-2"
					onClick={finish}
        >
          <span className="font-bold">View project status</span>
          <Image src={arrowRightIcon} alt="Arrow right" />
        </Button>
      </div>
    </>
  );
};

export default Done;
