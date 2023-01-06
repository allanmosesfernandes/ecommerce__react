import { useState, React } from 'react'

const SignUpForm = () => {

    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    return (
        <div>
            <form action="">
            <label>Display Name</label>
            <input 
                type="text"
                placeholder=''
                required
                name='displayName'
                value={displayName}
            />

            <label>Email</label>
            <input 
                type="email"
                placeholder=''
                required
                name='email'
                value={email}
            />

            <label>Password</label>
            <input 
                type="password"
                placeholder=''
                required
                minlength="6" 
                name="password"
                value={password}

            />
            
            <label>Confirm Password</label>
            <input 
                type="password"
                placeholder=''
                required
                minlength="6" 
                name="confirmPassword"
                value={confirmPassword}
            />
            <button type='submit'> Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm