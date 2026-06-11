import { LoginBanner } from '../../components/Login/LoginBanner/LoginBanner';
import { LoginBody } from '../../components/Login/LoginBody/LoginBody';
import { Title } from '../../components/Title/Title';

export const Login = () => {

    Title (" | Login");

    return(
        <>
            <LoginBanner />
            <LoginBody />  
        </>
    );
}