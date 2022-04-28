import { ReactNode, useEffect, useState } from "react";

type ToastProps = {
    type?: 'success' | 'danger';
    open?: boolean;
    children: ReactNode,
    onClose?: Function;
}

export const Toast: React.FC<ToastProps> = ({
    type = 'success', open = true, children, onClose
}) => {

    const [isOpen, setIsOpened] = useState(open);

    const close = ()=>{

        if (typeof onClose === 'function') {
            onClose();
        }
        setIsOpened(false);
    }

    useEffect(()=>setIsOpened(open),[open]);

    return (
        <div className={["toast", type, isOpen ? 'open' : ''].join(' ')}>
            
            {children}

            <button type="button" className="close" onClick={()=>close()}>
                <span>&times;</span>
            </button>
        </div>
    )
}
