import { ReactNode } from "react";

type HeadingProps = {
    title: string;
    icon: ReactNode
}


export const Heading = ({title, icon}: HeadingProps) => {
  return (
    <h2 className="w3-text-grey w3-padding-16">{icon}{title}</h2>
  )
}
