import React from "react";

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
      />
    </svg>
  );
}
function EmailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="m16.484 11.976l6.151-5.344v10.627zm-7.926.905l2.16 1.875c.339.288.781.462 1.264.462h.017h-.001h.014c.484 0 .926-.175 1.269-.465l-.003.002l2.16-1.875l6.566 5.639H1.995zM1.986 5.365h20.03l-9.621 8.356a.612.612 0 0 1-.38.132h-.014h.001h-.014a.61.61 0 0 1-.381-.133l.001.001zm-.621 1.266l6.15 5.344l-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19H1.859a1.87 1.87 0 0 0-.835.197l.011-.005A1.856 1.856 0 0 0 0 5.855v12.172a1.86 1.86 0 0 0 1.858 1.858h20.283a1.86 1.86 0 0 0 1.858-1.858V5.855c0-.727-.419-1.357-1.029-1.66l-.011-.005z"
      />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const ContactDetail = () => {
  return (
    <section className="py-6 ">
      <div className="max-w-7xl mx-auto space-y-6">       
        <div className="flex md:flex-row flex-col md:items-start items-center justify-evenly gap-6 ">
          <div className="flex flex-col items-center space-y-4 max-w-[280px]">
            <BriefcaseIcon className="w-14 h-14 text-[#FFFFFF] " />
            <h3 className="text-xl font-semibold text-[#FEFE5B] ">
              Contact Number
            </h3>
            <p className="text-foreground  text-center">
              +91 6396361577 ,<br />
              +91 7505146145
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 max-w-[280px]">
            <EmailIcon className="w-14 h-14 text-[#FFFFFF] " />
            <h3 className="text-xl font-semibold text-[#FEFE5B] ">
              Email Address
            </h3>
            <p className="text-foreground">rharshvardhan614@gmail.com</p>
          </div>
          <div className="flex flex-col items-center space-y-4 max-w-[250px]">
            <UsersIcon className="w-14 h-14 text-[#FFFFFF] " />
            <h3 className="text-xl font-semibold text-[#FEFE5B] ">
              Office Location
            </h3>
            <p className="text-foreground  text-center">
              Agra, U.P, India, 282006
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;