import { Fragment } from "react";

type ProfileSkillProps = {
    title: string;
    value: number;
    simple?: boolean;
}

export const ProfileSkill = ({ title, value, simple = false }: ProfileSkillProps) => {
    return (
        <>
            <p>{title}</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={
                    {
                        width: parseInt(String(value)) + '%',
                        height: simple ? '24px' : '18px'
                    }
                }>
                    {!simple && <Fragment>{value}%</Fragment>}
                </div>
            </div>
        </>
    )
}
