import { ReactNode } from "react";

type ProfileDetailProps = {
    title: string;
    icon: ReactNode
}


export const ProfileDetail = ({title, icon}: ProfileDetailProps) => {
  return (
    <p>{icon}{title}</p>
  )
}
