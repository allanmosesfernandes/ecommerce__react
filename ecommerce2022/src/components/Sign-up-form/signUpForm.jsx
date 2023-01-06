import { useState, React } from 'react'
import { createUserDocFromAuth, createAuthUserEmailPassword} from '../../utils/firebase/firebase.utils';
const SignUpForm = () => {

    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    //form field change event handler
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});
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
      console.log(response)
      }catch(error){
        console.log(error.message);
      }

    }
    
    return (
        <div>
            <form onSubmit={formSubmit}>
            <label>Display Name</label>
            <input 
                type="text"
                placeholder=''
                required
                name='displayName'
                value={displayName}
                onChange={handleChange}
                minLength="3"
            />

            <label>Email</label>
            <input 
                type="email"
                placeholder=''
                required
                name='email'
                value={email}
                onChange={handleChange}
            />

            <label>Password</label>
            <input 
                type="password"
                placeholder=''
                required
                minLength="6" 
                name="password"
                value={password}
                onChange={handleChange}

            />

            <label>Confirm Password</label>
            <input 
                type="password"
                placeholder=''
                required
                minLength="6" 
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
            />
            <button type='submit'> Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm