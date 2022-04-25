import { ProfileDetail } from "../ProfileDetail";
import { ProfileSkill } from "../ProfileSkill";
import { ProfileTitle } from "../ProfileTitle";

const Panel = () => {
    return (
        <>
            <div className="w3-third">

                <div className="w3-white w3-text-grey w3-card-4">
                    <div className="w3-display-container">
                        <img src="https://i.pravatar.cc/300" style={{ width: '100%' }} alt="Avatar" />
                        <div className="w3-display-bottomleft w3-container w3-text-black">
                            <h2>Jane Doe</h2>
                        </div>
                    </div>
                    <div className="w3-container">
                        <ProfileDetail title="Design" icon={
                            <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        } />
                        
                        <ProfileDetail title="London, UK" icon={
                            <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        } />
                        
                        <ProfileDetail title="ex@mail.com" icon={
                           <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        } />
                        
                        <ProfileDetail title="1224435534" icon={
                           <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        } />

                        <hr />

                        <ProfileTitle title="Skills" icon={
                            <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                        } />

                        <ProfileSkill title="Adobe Photoshop" value={90} />
                        <ProfileSkill title="Photography" value={80} />
                        <ProfileSkill title="Illustrator" value={75} />
                        <ProfileSkill title="Media" value={50} />

                        <br />

                        <ProfileTitle title="Languages" icon={
                            <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                        } />

                        <ProfileSkill title="English" value={100} simple={true} />
                        <ProfileSkill title="Spanish" value={55} simple={true} />
                        <ProfileSkill title="German" value={25} simple={true} />

                        <br />
                    </div>
                </div><br />


            </div>
        </>
    );
}

export default Panel;