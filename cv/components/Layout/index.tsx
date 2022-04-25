import Content from "../Content";
import Footer from "../Footer";
import Panel from "../Panel";


const Layout = () => {
    return (
        <>
            <div className="w3-light-grey">

                <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>

                    <div className="w3-row-padding">

                        <Panel />

                        <Content />

                    </div>

                </div>

                <Footer />

            </div>
        </>
    );
}

export default Layout;