import { FaEnvelope } from "react-icons/fa";
import '../Login/LoginBody/LoginBody.css';
import '../Register/RegisterBody/RegisterBody.css';
import { useState } from "react";
import Api from "../../api/Api";
import { useNavigate } from "react-router-dom";


export const Email = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const[showPopup, setPopup] = useState({
        show:false,
        message:'',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.post(
                "user/mail/",
                {
                    email : email
                },
                {withCredentials:true}
            );

            if (response.status === 201) {
                setPopup({
                    show: true,
                    message: response.data.message,
                });

                setEmail("");

                setTimeout(() => {
                    navigate('/pass/otp', {replace:true});
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
                        <FaEnvelope className='register_avatar' />
                            <h2>Enter Your Email</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='register_form'>
                            <input placeholder='Enter Your Email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
                            <button type='submit'>Sent</button>
                        </form>
                        {showPopup.show && (
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