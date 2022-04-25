import { Fragment } from "react";
import { ContentDetail } from "../ContentDetail";
import { Heading } from "../Heading";

const Content = () => {
    return (
        <>
            <div className="w3-twothird">

                <div className="w3-container w3-card w3-white w3-margin-bottom">

                    <Heading title="Work Experience" icon={
                        <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    } />

                    <ContentDetail title="Front End Developer / w3schools.com" date={
                        <Fragment>
                            {'Jan 2015 -'}{' '}
                            <span className="w3-tag w3-teal w3-round">Current</span>
                        </Fragment>
                    } description="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste." />

                    <ContentDetail title="Web Developer / something.com" date='Mar 2012 - Dec 2014' description="Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste." />

                    <ContentDetail title="Graphic Designer / designsomething.com" date='Jun 2010 - Mar 2012' description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. " />

                </div>

                <div className="w3-container w3-card w3-white">
                    <Heading title="Education" icon={
                        <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    } />

                    <ContentDetail title="W3Schools.com" date='Forever' description="Web Development! All I need to know in one place" />

                    <ContentDetail title="London Business School" date='2013 - 2015' description="Master Degree" />

                    <ContentDetail title="School of Coding" date='2010 - 2013' description="Bachelor Degree" />

                </div>


            </div>
        </>
    );
}

export default Content;