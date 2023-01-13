import { useState, React } from 'react'
import { createUserDocFromAuth, createAuthUserEmailPassword} from '../../utils/firebase/firebase.utils';
import FormInput from '../formInput/formInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './sign-up-form-styles.scss'
import ButtonComponent from '../Button/button-component';

const SignUpForm = () => {
    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    //== context for storing user state ==//
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    //form field change event handler
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const formSubmit = async (event) => {
      event.preventDefault();
      if(password !== confirmPassword) {
        alert("Passwords do not match");
        return
      }

      try {
      const {user} = await createAuthUserEmailPassword(email, password);
      const response = await createUserDocFromAuth(user, {displayName});
      toast.success('Account created successfully!');
      
      resetFormFields();
      
      }catch(error){
        if(error.code === "auth/email-already-in-use"){
            alert("Email already exists!")
        }
      }
    }
    
    return (
        <div className='sign-up-container'>
            <h2 >Don't have an account?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={formSubmit}>
            
            <FormInput 
                label="Display Name"
                type="text"
                placeholder=''
                required
                name='displayName'
                value={displayName}
                onChange={handleChange}
                minLength="3"
            />

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

            <FormInput
                label="Confirm Password"
                type="password"
                placeholder=''
                required
                minLength="6" 
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
            />
            <ButtonComponent type="submit" buttonType="google">Sign up</ButtonComponent>
            {/* <button type='submit'> Sign Up</button> */}
        </form>
        <ToastContainer />
    </div>
  )
}

export default SignUpForm