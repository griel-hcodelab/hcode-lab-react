import { ReactNode } from "react";

type ProfileTitleProps = {
    title: string;
    icon: ReactNode
}

export const ProfileTitle = ({title, icon}: ProfileTitleProps) => {
  return (
    <p className="w3-large"><b>{icon}{title}</b></p>
  )
}
