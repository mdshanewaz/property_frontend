import './LoginBody.css';
import '../../Register/RegisterBody/RegisterBody.css'
import { useState } from 'react';
import Api from '../../../api/Api';
import { useNavigate, Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { useAuthContext } from '../../../context/Auth/AuthProvider';

export const LoginBody = () => {
    const navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const[showPopup, setPopup] = useState({
        show:false,
        message:'',
    });

    const {login} = useAuthContext();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await Api.post(
                'user/token/',
                {
                    username:username, 
                    password:password,
                }, 
                {withCredentials:true}
            );

            if (response.data.login == true) { 


                setPopup({
                    show: true,
                    message: response.data.message,
                });

                // Optional: clear form
                setUsername("")
                setPassword("")

                setTimeout(() => {
                    login();
                    navigate('/', {replace:true});
                }, 3000)
                
            }
        }
        catch (error) {
            // alert(error.response.data.error);
            setPopup({
                    show: true,
                    message: error.response.data.error,
                });
            console.log(error.response.data.error);
        }
    };

    return (
        <>
            <div className='container'>
                <div className='from_container'>
                    <div className='from_avatar_container'>
                        <RxAvatar  className='register_avatar'/>
                            <h2>Let's Login</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='register_form'>
                            <input placeholder='Username' value={username} type='text' onChange={(e) => setUsername(e.target.value)} />
                            <input placeholder='Password' value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit'>Login</button>
                        </form>
                        {showPopup.show &&(
                            <div className='pop-up'>
                                <h2>{showPopup.message}</h2>
                                <button className='close_button' onClick={() => setPopup({...showPopup, show:false})}> Close</button> 
                            </div>
                        )}
                    </div>
                    <div className='login_account'>
                        <p>New to Luxora Estate? <Link to='/register'>Sign Up</Link></p>
                        <p>Fogot Password? <Link to='/email'>Reset Password</Link></p>  
                    </div>
                </div>
            </div>
        </>
    );
}