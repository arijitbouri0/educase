import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

interface UserData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  isAgency: string;
}

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="max-w-[500px] h-screen w-full mx-auto border border-gray-300 shadow-md bg-[#f7f9fc] flex flex-col">
      <h2 className="text-lg font-semibold w-full border-b border-gray-300 bg-white p-3">
        Account Settings
      </h2>
      <div className="flex items-start gap-4 p-3 mt-2">
        <div className="relative w-16 h-16">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#6c25ff] rounded-full p-1 text-white">
            <FaCamera size={14} />
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-bold text-sm">{userData?.fullName || "N/A"}</p>
          <p className="text-sm text-gray-600">{userData?.email || "N/A"}</p>
        </div>
      </div>
      <p className="text-gray-600 border-b border-dashed border-gray-300 text-md font-semibold p-3">
         Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      </p>
    </div>
  );
};

export default Profile;
