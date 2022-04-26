import Link from "next/link"

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
}

export const Footer = ({ buttons }: FooterProps) => {
    return (
        <footer className="fixed">
            {buttons?.map(({ href, type, className, disabled, onClick, value }, index) => {

                if (href === undefined) {
                    <button key={index} type={type} className={className} disabled={disabled} onClick={onClick}>{value}</button>
                } else {
                    return (
                        <Link key={index} href={href}>
                            <a className={className}>{value}</a>
                        </Link>
                    )
                }


            })}


        </footer>
    )
}
