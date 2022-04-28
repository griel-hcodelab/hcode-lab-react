import Link from "next/link";
import { toBack } from "../../utils/toBack";

type FooterButton = {
    href?: string;
    type?: 'submit' | 'button' | 'reset';
    value: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

type FooterProps = {
    buttons?: FooterButton[];
};



const Footer = ({
    buttons = [
        {
            value: "Continuar",
            type: "submit",
        },
        {
            value: "Voltar",
            onClick: toBack,
            type: "button"
        }
    ],
}: FooterProps) => {

    return (
        <footer className="fixed">
            {buttons?.map(({ href, type, className, disabled, value, onClick }, index) => {

                if (href === undefined) {
                    return (
                        <button
                            key={index}
                            type={type}
                            className={className}
                            disabled={disabled}
                            onClick={onClick}
                        >{value}</button>
                    )
                } else {
                    return (
                        <Link href={href} key={index}>
                            <a className={className}>{value}</a>
                        </Link>
                    )
                }

            })}
            
        </footer>
    )

}

export default Footer;