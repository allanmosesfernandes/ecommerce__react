import { useState, useContext } from 'react'
import { createUserDocFromAuth, signInAuthUserEmailPassword, signInWithGooglePopUp} from '../../utils/firebase/firebase.utils';
import FormInput from '../formInput/formInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonComponent from '../Button/button-component';
import "./sign-in-form-styles.scss";

import { UserContext } from '../../contexts/userContext';
const SignInForm = () => {

    //=== Default Form Fields for use state==//

    const defaultFormFields = {
        email: "",
        password: "",
    }
    let userEmail = ""
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const { setCurrentUser } = useContext(UserContext)

    //== Sign In Using Google Pop-up ==//
    
    const logGooglePopUpUser = async () => {
        try {
                const {user} = await signInWithGooglePopUp();
                await createUserDocFromAuth(user);
                //display name for Google Popup instead of email
                userEmail = user.displayName;
                toast.dismiss();
                toast.success(`Welcome back ${userEmail}`)
            } 
        catch (error) {
            alert(`error: ${error}`)
        }
    }

    //== form field change event handler ==//

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    //== Reset form fields ==//

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    //== Form Submit for Email & Password ==//

    const handleSubmit = async (event) => {
    event.preventDefault();

        try{
            const response = await signInAuthUserEmailPassword(email, password);
            if(response) {
                const {user} = response;
                const {email} = user;
                setCurrentUser(user);
                resetFormFields();
                toast.success(`Welcome ${email} `)
            };
        }
        catch(error){
        let errorMessage = "";
        console.log(error.message)
        switch(error.code) {
      
            case "auth/user-not-found":
                errorMessage = "We're sorry, but we couldn't find an account associated with that email address. Please double-check the email you entered and try again, or create a new account";
                break;

            case "auth/wrong-password":
                errorMessage = "We're sorry, but the password you entered is incorrect. Please double-check your password and try again";
                break;

            case "auth/account-exists-with-different-credential":
                errorMessage = "An account already exists with this email. Please sign in with that account or link the social account with that email address.";
                break;

            default:
                errorMessage = "There was a problem creating your account. Please try again later";
        }
        toast.error(errorMessage);
    }

}

    return (
        <div className='sign-up-container'>

            <h2>Already have an account?</h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            
            <FormInput
                label="Email"
                type="email"
                placeholder=''
                required
                name='email'
                value={email}
                onChange={handleChange}
            />

           <FormInput
                label="Password" 
                type="password"
                placeholder=''
                required
                minLength="6" 
                name="password"
                value={password}
                onChange={handleChange}

            />
            <div className="buttons-container">
                <ButtonComponent type="submit" buttonType="inverted">Sign In </ButtonComponent>
                <ButtonComponent type="button" onClick={logGooglePopUpUser} buttonType="google">Google Sign In </ButtonComponent>
            </div>

        </form>
    </div>
  )
}

export default SignInForm