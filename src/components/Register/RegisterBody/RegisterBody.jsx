import './RegisterBody.css';
import '../../Login/LoginBody/LoginBody.css'
import Api from '../../../api/Api';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

export const RegisterBody = () => {
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const[showPopup, setPopup] = useState({
        show:false,
        message:'',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.post(
                "/user/register/", 
                formData,
                {withCredentials:true}
            );

            setPopup({
                    show: true,
                    message: response.data.message,
            });

            setFormData({
                username: '',
                email: '',
                password: ''
            })

            setTimeout(() => {
                navigate('/otp', {replace:true});
            }, 5000);
        }
        catch (error) {
            if (error.response) {
                const data = error.response.data;

                const errorMessage =
                    data.message ||
                    data.error ||
                    // data.detail ||
                    Object.values(data)[0]?.[0] ||
                    "Registration failed";

                // console.log(error.response.data.message || "Registration failed.");
                console.log(errorMessage)

                setPopup({
                    show: true,
                    message: errorMessage,
                })

            } else {
                setPopup({
                    show: true,
                    message : 'All fields must be filled!'
                })
            }
        }
    };

    return (
        <>
            <div className='container'>
                <div className='from_container'>
                    <div className='from_avatar_container'>
                        <RxAvatar  className='register_avatar'/>
                        <h2>Let's Register</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='register_form'>
                            <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
                            <input type='text' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                            <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                            <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
                            <button type='submit'>Register</button>
                        </form>
                        {showPopup.show &&(
                            <div className='pop-up'>
                                <h2>{showPopup.message}</h2>
                                <button className='close_button' onClick={() => setPopup({...showPopup, show:false})}> Close</button> 
                            </div>
                        )}
                    </div>
                    <div className='login_account'>
                        <p>Already have an account? <Link to='/login'>Login</Link></p> 
                    </div>
                </div>
            </div>
        </>
    );
} 