import './Otp.css';
import '../Login/LoginBody/LoginBody.css'
import '../Register/RegisterBody/RegisterBody.css';
import Api from '../../api/Api';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdPassword } from "react-icons/md";

export const Otpbody = () => {
    const navigate = useNavigate();

    const[otp, setOtp] = useState();
    const[showPopup, setPopup] = useState({
        show:false,
        message:'',
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.post(
                "user/otp/",
                {
                    otp_code: otp
                },
                {withCredentials: true}
            );

            if(response.status === 200) {
                setPopup({
                    show: true,
                    message: response.data.message,
                });

                setOtp("");

                setTimeout(() => {
                    navigate('/login', {replace:true});
            }, 5000)
            }

            else{
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
    } 

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
                <div className='container'>
                    <div className='from_container'>
                        <div className='from_avatar_container'>
                            <MdPassword  className='register_avatar'/>
                            <h2>Enter the correct OTP sent to your Email</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className='register_form'>
                                <input placeholder='OTP' value={otp} type='text' onChange={(e) => setOtp(e.target.value)} />
                                <button type='submit'>Submit</button>
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
