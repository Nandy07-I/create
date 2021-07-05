import React from 'react';
import '../App.css';

function Login(props) {
    return (<div>
        <div class='log'>
            
            <div class='data'>
             <h1 class='h1'>Login</h1>
            <div class='ud'>
            <label class='txt' type='text'>Phone Number</label>
            <input autoComplete='phone' placeholder='+91'></input>
            <label class='txt'>Password</label>
            <input  placeholder='password*' type='password'></input>
            <button class='btn'>Login with OTP</button>
            <hr class='hr'/>
            <p class='par'>Create a new account if you do not have one. 
            You will be asked to verify your phone number at the time of creation. By
            creating an account you agree to our <span class='span'>Privacy policy</span>
               and<span class='span'>Trems And Condition</span>
            <button type="button" class="bt-2">Create an Account</button></p>
            </div>
            </div>
           </div>

<div class='foot-1'>
<p>2020 &copy; Yours Tomorrow</p>
<p>Drafted by <span class='span'>Logritha Technologies</span></p>
</div>
</div>
        
    );
}

export default Login;