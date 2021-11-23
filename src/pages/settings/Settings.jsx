import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

 function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className='' src="./images/5.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input className='settingsPPInput' type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Sakthi' />
                    <label>Email</label>
                    <input type="email" placeholder='girish@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings;
