import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />

            <div className="row">
                <Menu />
                {children}
                
            </div>

            <Footer />
        </>
    );
}

export default Layout;