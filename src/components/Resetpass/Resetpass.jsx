import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login/LoginBody/LoginBody.css';
import '../Register/RegisterBody/RegisterBody.css';
import Api from '../../api/Api';
import { MdPassword } from "react-icons/md";

export const Resetpassbody = () => {
    const navigate = useNavigate();
    const [pass1, setPass1] = useState();
    const [pass2, setPass2] = useState();
    
    const[showPopup, setPopup] = useState({
        show:false,
        message:'',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.post(
                'user/reset/',
                {
                    password : pass1,
                    confirm_password : pass2,
                },
                {withCredentials:true}
            );

            if (response.status === 200) { 
                setPopup({
                    show: true,
                    message: response.data.message,
                });

                // Optional: clear form
                setPass1("");
                setPass2("");
                
                setTimeout(() => {
                    navigate('/login', {replace:true});
                }, 5000) 
            }

            else {
                setPopup({
                    show: true,
                    message: response.data.detail,
                });
            }
        }

        catch(error) {
            setPopup({
                    show: true,
                    message: error.response.data.detail,
            });
        }
    };
    
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
                <div className='from_container'>
                    <div className='from_avatar_container'>
                        <MdPassword  className='register_avatar'/>
                            <h2>Enter New Password</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='register_form'>
                            <input placeholder='New Password' value={pass1} type='password' onChange={(e) => setPass1(e.target.value)} />

                            <input placeholder='Confirm Password' value={pass2} type='password' onChange={(e) => setPass2(e.target.value)} />

                            <button type='submit'>Reset Password</button>
                        </form>
                        {showPopup.show &&(
                            <div className='pop-up'>
                                <h2>{showPopup.message}</h2>
                                <button className='close_button' onClick={() => setPopup({...showPopup, show:false})}> Close</button> 
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
} 