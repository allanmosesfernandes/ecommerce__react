import { useState, React } from 'react'
import { createUserDocFromAuth, createAuthUserEmailPassword, signInAuthUserEmailPassword, signInWithGooglePopUp} from '../../utils/firebase/firebase.utils';
import FormInput from '../formInput/formInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonComponent from '../Button/button-component';

const SignInForm = () => {
    //===Default Form Fields for use state==//
    const defaultFormFields = {
        email: "",
        password: "",
    }
    let userEmail = ""
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    //==Sign In Using Google Pop-up ==//
    
    const logGooglePopUpUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef  = await createUserDocFromAuth(user);
        //display name for Google Popup instead of email
        userEmail = user.displayName;
        toast.success(`Welcome back ${userEmail}`)
    }

    //==form field change event handler ==//
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const formSubmit = async (event) => {
    event.preventDefault();
    
        try {
        const response = await signInAuthUserEmailPassword(email, password);
        const {user} = response;
        userEmail = user.email.split("@")[0];
        console.log(userEmail);
        toast.success(`Welcome back ${(userEmail)} !`);
        resetFormFields();
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Email already exists!")
            }
        }
    }
    
    return (
        <div className='sign-up-container'>
            <h2 >Already have an account?</h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={formSubmit}>
            
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

            <ButtonComponent type="submit" buttonType="inverted">Sign In </ButtonComponent>
            <ButtonComponent type="button" onClick={logGooglePopUpUser} buttonType="google">Google Sign In </ButtonComponent>
        </form>
        <ToastContainer />
    </div>
  )
}

export default SignInForm