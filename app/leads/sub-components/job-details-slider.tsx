"use client";
import {
  Box,
  Button,
  Drawer,
  LinearProgress,
  Skeleton,
  Tooltip,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import Markdown from "markdown-to-jsx";
import ArrowForward from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import Link from "next/link";

import coin2Icon from "@/public/icons/coin2.svg";
import {  useSearchParams } from "next/navigation";
import { useUserContext } from "@/context/user_context";
import { useSnackbar } from "@/context/snackbar_context";

interface Job {
  id: number;
  title: string;
  description: string;
  budget: number;
  techStack: string[];
  created_at: Date;
  location: string;
  applications: number;
  totalApplications: number;
  proposalCost: number;
  client: {
    id: number;
    name: string;
    isVerified: boolean;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    isPaymentVerified: boolean;
    isIdentityVerified: boolean;
    image: string;
  };
}

export default function JobDetailsSlider({
  open,
  onClose,
  jobId,
}: {
  open: boolean;
  onClose: () => void;
  jobId: number;
}) {
  // loading
  const [loading, setLoading] = useState(true);
  let [projectData, setProjectData] = useState({});
  // job details
  const [job, setJob] = useState<Job | null>(null);

  const { generateSnackbar } = useSnackbar();

  let { showSingleLead } = useUserContext();
    let projectId = useSearchParams().get("job");
    let apply = useSearchParams().get("apply");


  useEffect(() => {
    // simulate loading job details
    if(projectId !== null){
      async function getJobData(){
        try{
          // console.log(apply.get("apply"));
          setLoading(true);
          let res = await showSingleLead({projectId : projectId});
          if(res.status !== 400 || res.data?.status === "success"){
            setProjectData(res.data?.data);
            console.log(res.data?.data);
            setLoading(false);
          }
          else{
            // generateSnackbar("Some Error Occure, please try again", "error");
          }
        } 
        catch(e){
          // console.log(e);
        }
      }
      getJobData();

    }


  }, [projectId]);

  return (
    <Drawer
      open={open}
      anchor="right"
      PaperProps={{
        className: "w-full max-w-screen-md p-8 text-main space-y-4",
      }}
      onClose={onClose}
    >
      {loading ? (
        <div className="flex flex-col gap-1">
          <Skeleton className="w-full h-8 my-0" />
          <Skeleton className="w-full h-8 my-0" />
          <Skeleton className="w-full h-8 my-0" />
          <Skeleton className="w-1/2 h-8 my-0" />
        </div>
      ) : (
        <>
          <ClientDetails job={projectData} />
          <Box className="flex justify-between">
            <h2 className="font-bold text-lg">Project Details</h2>
            <Box className="flex items-center flex-wrap justify-end gap-2 text-right sm:text-left text-xs sm:text-sm">
              <LinearProgress
                variant="determinate"
                value={(-5+ projectData.maxBid)}
                className="w-24 h-2 rounded-full"
                classes={{
                  bar: "bg-secondary rounded-full",
                  root: "bg-[#E0E0E0]",
                }}
              />
              {(-5+ projectData.maxBid)}<br className="block sm:hidden"/> professionals have
              bided
            </Box>
          </Box>
          <Box className="flex flex-col">
            <h2 className="font-bold capitalize">Project Title:</h2>
            <p className="capitalize">{projectData.serviceTitle}</p>
          </Box>
          <Markdown className="[&>h1]:font-bold [&>h2]:font-bold [&>h2]:mt-3 [&>h3]:font-bold [&>h3]:mt-2 [&>li]:ml-2 capitalize">{`${projectData?.serviceDes}`}</Markdown>
          {
            projectData?.projectQuestions?.map((val,i)=>{
              return (
                <Box key={i}>
                  <h2 className="font-bold capitalize">{val.questionTitle}</h2>
                  <p>{val.answer}</p>
                </Box>
              )
              
            })
          }
           <Box >
                  <h2 className="font-bold capitalize">How Frequent I need the Service?</h2>
                  <p className="capitalize">{projectData.serviceFrequency}</p>
                </Box>
          <Box>
            <h2 className="font-bold">Budget: </h2>${projectData?.projectPriceTitle}
          </Box>
          {/* <Box>
            <h2 className="font-bold">Skills Required: </h2>
            <Box className="divide-x-1 divide-main">
              {job?.techStack.map((tech) => (
                <span key={tech} className="px-2">
                  {tech}
                </span>
              ))}
            </Box>
          </Box> */}
          <Box className="flex gap-6 flex-wrap-reverse">
            <Link href={`/leads?job=${projectData?._id}&apply=true`} className="flex-grow sm:flex-grow-0">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="font-bold !py-4 w-full sm:w-auto"
              >
                Contact client
                <ArrowForward className="ml-2" />
              </Button>
            </Link>
            <h2 className="flex gap-2 items-center">
              <img src={coin2Icon.src} alt="" className="w-6" />
              {projectData?.pointsNeeded} points is reqiured to contact this client
            </h2>
          </Box>
        </>
      )}
    </Drawer>
  );
}

const ClientDetails = ({ job }: { job: Job | null }) => {
  return (
    <Box className="flex justify-between flex-wrap sm:flex-nowrap gap-y-4">
      <Box className="flex gap-4 items-start w-full">
        <img src={job?.clientPictureLink} alt="" className="w-14 h-14 rounded-md object-cover" />
        <Box className="flex gap-4 items-start ">
          <h3 className="text-lg font-semibold flex flex-col gap-0 justify-center">
            {job?.clientName}
            <span className="text-sm font-medium">{job.serviceLocationPostal}   {(job.serviceLocationTown) ?(`| ${job.serviceLocationTown}`) :""}</span>
          </h3>
          <Box className="flex items-center gap-1 px-2 rounded-full mt-1 bg-[rgba(4,132,47,0.2)]">
            <CheckBoxIcon className="text-green-600 w-4 h-4" />
            <p className="text-sm text-center">
              {(job?.isEmailVerify && job?.isPhoneVerify) ? "Verified" : "Unverified"}
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="">
        <h2 className="text-main font-semibold">Verifications</h2>
        <Box className="flex gap-4">
          {(job?.kycStatus === "approved") && (
            <VerifiedCell
              isVerified={job?.kycStatus === "approved" ?true : false}
              Icon={
                <PersonOutlineOutlinedIcon className="text-[rgba(4,132,47,1)]" />
              }
              name="identity"
            />
          )}
          {job?.isClientPhoneNoVerify&& (
            <VerifiedCell
              isVerified={job?.isClientPhoneNoVerify}
              Icon={
                <LocalPhoneOutlinedIcon className="text-[rgba(4,132,47,1)]" />
              }
              name="phone"
            />
          )}
          {job?.isClientEmailVerify&& (
            <VerifiedCell
              isVerified={job?.isClientEmailVerify}
              Icon={<EmailOutlinedIcon className="text-[rgba(4,132,47,1)]" />}
              name="email"
            />
          )}
          {job?.isPaymentVerify && (
            <VerifiedCell
              isVerified={job?.isPaymentVerify}
              Icon={
                <CreditCardOutlinedIcon className="text-[rgba(4,132,47,1)]" />
              }
              name="payment"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

const VerifiedCell = ({
  isVerified,
  Icon,
  name,
}: {
  isVerified: boolean | undefined;
  Icon: ReactNode;
  name: "email" | "payment" | "identity" | "phone";
}) => {
  return (
    <Tooltip
      arrow
      title={
        <span className="!font-mono capitalize flex items-center gap-2 !text-sm">
          {Icon}
          {name} {isVerified ? "Verified" : "Unverified"}
          <DoneIcon className="text-green-600 w-4 h-4 -mt-0.5" />
        </span>
      }
      classes={{
        tooltip: "bg-[rgb(237,237,237)] text-main",
        arrow: "text-[rgb(237,237,237)]",
      }}
    >
      <Box className={`flex justify-center items-center gap-1 cursor-pointer`}>
        {Icon}
      </Box>
    </Tooltip>
  );
};

const description = `
## Project Overview

We will be developing a modern e-commerce website aimed at providing a seamless shopping experience for users interested in fashion apparel. The website will feature a user-friendly interface, secure payment gateways, and robust backend management to handle inventory, orders, and customer interactions efficiently.

## Project Objectives

### 1. Design and User Interface

- Create a visually appealing and responsive design that enhances user experience across devices.
- Implement intuitive navigation and search functionalities to help users find products easily.
- Ensure accessibility standards are met for inclusivity.

### 2. E-commerce Functionality

- Develop a secure user authentication and authorization system.
- Implement a shopping cart and checkout process with multiple payment options (credit card, PayPal, etc.).
- Enable order tracking and status updates for customers.

### 3. Backend Management

- Set up an admin dashboard to manage products, categories, and inventory.
- Implement tools for order management, shipping, and returns handling.
- Integrate analytics to monitor site traffic, sales performance, and customer behavior.

### 4. Performance and Scalability

- Optimize website performance for fast loading times and smooth navigation.
- Ensure scalability to handle increased traffic and transactions during peak periods.
- Conduct thorough testing to identify and resolve any performance bottlenecks.

### 5. Security

- Implement SSL certification and secure HTTPS protocols.
- Apply best practices for data encryption, user privacy, and protection against cyber threats.
- Regularly update and maintain security measures to safeguard customer information.

## Budget Estimate

- The estimated budget for the project is $XX,XXX, inclusive of development, testing, deployment, and initial support.

## Conclusion

The development of this e-commerce website aims to provide a cutting-edge platform for online retail, focusing on user experience, security, and scalability. By leveraging modern technologies and best practices, we aim to deliver a robust solution that meets both business and customer expectations.
`;
