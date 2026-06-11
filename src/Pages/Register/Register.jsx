import registerImage from '../../assets/register.jpg';
import { Title } from '../../components/Title/Title';
import { RegisterBanner } from '../../components/Register/RegisterBanner/RegisterBanner';
import { RegisterBody } from '../../components/Register/RegisterBody/RegisterBody';

export default function Register() {

    Title (" | Register");

    return (
        <>
            < RegisterBanner
                bgImage={registerImage}
                title= "Create An Account"
                subTitle= "Sign Up to Luxora Estates and Start Your Property Journey" 
            />
            < RegisterBody />
        </>
    );
}