"use client";

import { Profile } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal";
import ProfileSwitchBox from "./ProfileSwitchBox";

interface ProfileSwitchModalProps {
  allProfiles: Profile[];
  isOpen?: boolean;
  onClose: () => void;
}

export default function ProfileSwitchModal({
  allProfiles,
  isOpen,
  onClose,
}: ProfileSwitchModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="
        px-4
        py-4
        space-y-8
      ">
        {allProfiles.map((profile) => (
          <ProfileSwitchBox key={profile.id} data={profile} onClose={onClose}/>
        ))}
      </div>
    </Modal>
  );
}
