import { ReactNode } from "react";

type ContentDetailProps = {
    title: string;
    date: string | ReactNode;
    description: string;
}

export const ContentDetail = ({title, date, description}: ContentDetailProps) => {
    return (
        <div className="w3-container">
            <h5 className="w3-opacity"><b>{title}</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{date}</h6>
            <p>{description}</p>
            <hr />
        </div>
    )
}
