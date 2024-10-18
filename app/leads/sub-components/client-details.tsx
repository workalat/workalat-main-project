// import { Box, Button, Modal } from "@mui/material";
// import VerifiedIcon from '@mui/icons-material/Verified';
// import SecurityIcon from '@mui/icons-material/Security';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import MailIcon from '@mui/icons-material/Mail';
// import CloseIcon from '@mui/icons-material/Close';
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
// import { useState } from "react";

// interface Lead {
//     id: number;
//     title: string;
//     shortDescription: string;
//     proposalCost: number;
//     budget: number;
//     techStack: string[];
//     created_at: Date;
//     location: string;
//     client: {
//       id: number;
//       name: string;
//       isVerified: boolean;
//       image: string;
//     };
//   }

// export default function ClientDetails({ open, onClose, job, applied }) {
//     console.log(job)
//     // details
//     const [showPhone, setShowPhone] = useState(false);
//     const [showEmail, setShowEmail] = useState(false);
    
//   return (
//         <>
//             {
//                 (job !== null)
//                 ?
//                 <Modal open={open} className="flex justify-center items-center" onClose={onClose}>
//         <Box className="bg-white p-8 flex flex-col gap-6 rounded-lg w-full max-w-screen-sm mx-2 sm:mx-0">
//             <Box className="flex gap-4">
//                 {/* <img src={job?.client.image} alt="" className="w-16 h-16 rounded-sm" /> */}
//                 <img src={job?.clientPictureLink} alt="" className="w-16 h-16 rounded-sm" />
//                 <Box>
//                 <h1><span className="font-bold capitalize">{job?.clientName}</span>  {(job?.isClientEmailVerify && job?.isClientPhoneNoVerify) ?<VerifiedIcon className="text-blue-400 w-5 h-5" /> : ""} {(job?.kycStatus === "applied") ? <SecurityIcon className="text-secondary w-5 h-5" /> : ""}   </h1>
//                     {/* <h1><span className="font-bold">{job?.client.name}</span> @anibaby <VerifiedIcon className="text-blue-400 w-5 h-5" /> <SecurityIcon className="text-secondary w-5 h-5" /> </h1> */}
//                     <p className="text-sm font-semibold capitalize">Project Title: {job?.serviceTitle} </p>
//                     {/* <p className="text-sm font-semibold">Project Title: {job?.title} {`(${job?.location})`} </p> */}
//                 </Box>
//             </Box>
//             <p>{job?.shortDescription}</p>
//             <Box className="w-full bg-secondary bg-opacity-5 p-2 rounded-md flex divide-x space-x-2">
//                 <Box className="flex gap-2 items-center">
//                     <LocalPhoneIcon className="text-secondary w-5 h-5" />
//                     <input readOnly type={ showPhone ? "text" : "password" } className="border-none outline-none bg-transparent w-auto" value={job?.clientPhoneNo} />
//                     {
//                         showPhone ? (
//                             <VisibilityOffIcon role="button" className="text-main w-5 h-5" onClick={() => setShowPhone(false)} />
//                         ) : (
//                             <VisibilityIcon role="button" className="text-main w-5 h-5" onClick={() => setShowPhone(true)} />
//                         )
//                     }
//                 </Box>
//                 <Box className="flex gap-2 items-center pl-2">
//                     <MailIcon className="text-secondary w-5 h-5" />
//                     <input readOnly type={ showEmail ? "text" : "password" } className="border-none outline-none bg-transparent w-auto" value={job?.clientEmail} />
//                     {
//                         showEmail ? (
//                             <VisibilityOffIcon role="button" className="text-main w-5 h-5" onClick={() => setShowEmail(false)} />
//                         ) : (
//                             <VisibilityIcon role="button" className="text-main w-5 h-5" onClick={() => setShowEmail(true)} />
//                         )
//                     }
//                 </Box>
//             </Box>
//             <Box className="flex justify-center gap-4">
//                 <Button variant="contained" color="primary" onClick={()=>{onClose(); applied(false)}}>
//                     <CloseIcon className="mr-2 w-4 h-4" />
//                     Close
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={()=>{console.log(job?.clientChatId)}}>
//                     <QuestionAnswerIcon className="mr-2 w-4 h-4" />
//                     Chat Now
//                 </Button>
//             </Box>
//         </Box>
//     </Modal>
//                 :
//                     ""
//             }
        
//         </>
//   )
// }




import { Box, Button, Modal } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useState } from "react";

export default function ClientDetails({ open, onClose, job, applied }) {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  if (!job) {
    return null;
  }

  return (
    <Modal open={open} className="flex justify-center items-center" onClose={onClose}>
      <Box className="bg-white p-8 flex flex-col gap-6 rounded-lg w-full max-w-screen-sm mx-2 sm:mx-0">
        <Box className="flex gap-4">
          <img src={job.clientPictureLink || '/default-avatar.png'} alt="" className="w-16 h-16 rounded-sm" />
          <Box>
            <h1>
              <span className="font-bold capitalize">{job.clientName}</span>
              {job.isClientEmailVerify && job.isClientPhoneNoVerify && <VerifiedIcon className="text-blue-400 w-5 h-5" />}
              {job.kycStatus === "applied" && <SecurityIcon className="text-secondary w-5 h-5" />}
            </h1>
            <p className="text-sm font-semibold capitalize">Project Title: {job.serviceTitle}</p>
          </Box>
        </Box>
        <p>{job.serviceDes}</p>
        <Box className="w-full bg-secondary bg-opacity-5 p-2 rounded-md flex divide-x space-x-2">
          <Box className="flex gap-2 items-center">
            <LocalPhoneIcon className="text-secondary w-5 h-5" />
            <input
              readOnly
              type={showPhone ? "text" : "password"}
              className="border-none outline-none bg-transparent w-auto"
              value={job.clientPhoneNo}
            />
            <Button
              onClick={() => setShowPhone(!showPhone)}
              aria-label={showPhone ? "Hide phone number" : "Show phone number"}
            >
              {showPhone ? <VisibilityOffIcon className="text-main w-5 h-5" /> : <VisibilityIcon className="text-main w-5 h-5" />}
            </Button>
          </Box>
          <Box className="flex gap-2 items-center pl-2">
            <MailIcon className="text-secondary w-5 h-5" />
            <input
              readOnly
              type={showEmail ? "text" : "password"}
              className="border-none outline-none bg-transparent w-auto"
              value={job.clientEmail}
            />
            <Button
              onClick={() => setShowEmail(!showEmail)}
              aria-label={showEmail ? "Hide email" : "Show email"}
            >
              {showEmail ? <VisibilityOffIcon className="text-main w-5 h-5" /> : <VisibilityIcon className="text-main w-5 h-5" />}
            </Button>
          </Box>
        </Box>
        <Box className="flex justify-center gap-4">
          <Button variant="contained" color="primary" onClick={() => { onClose(); applied(false); }}>
            <CloseIcon className="mr-2 w-4 h-4" />
            Close
          </Button>
          <Button variant="contained" color="secondary" onClick={() => { console.log(job.clientChatId); }}>
            <QuestionAnswerIcon className="mr-2 w-4 h-4" />
            Chat Now
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}