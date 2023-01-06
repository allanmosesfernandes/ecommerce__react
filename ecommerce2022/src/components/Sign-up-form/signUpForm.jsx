import React from 'react'

const SignUpForm = () => {
  return (
    <div>
        <form action="">
            <label>Display Name</label>
            <input 
                type="text"
                placeholder=''
                required

            />
            <label>Email</label>
            <input 
                type="email"
                placeholder=''
                required

            />
            <label>Password</label>
g
            <label>Confirm Password</label>
            <input 
                type="password"
                placeholder=''
                required
                minlength="8" 
                title="Password must be at least 8 characters long"

            />
            <button type='submit'> Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm