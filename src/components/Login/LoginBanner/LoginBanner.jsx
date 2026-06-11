import './LoginBanner.css';
import LoginImage from '../../../assets/login.jpg';
import { RegisterBanner } from '../../Register/RegisterBanner/RegisterBanner';

export const LoginBanner = () => {
    return(
        <>
            < RegisterBanner
                bgImage={LoginImage}
                title= "Login to Luxora Estates"
                subTitle= "Access Your Account" 
            />
        </>
    )
}