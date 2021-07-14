import React,{ useState} from 'react'

const Login = () => {
    const [ user,setUser] = useState({
        email:'',
        password:'',
    });

    const { email, password } = user;
    const onChange = e => setUser({ ...user, [e.target.name] :e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        console.log('Login Successfully');
    }

    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Login</span></h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} placeholder='Enter Email' onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} placeholder='Enter Password' onChange={onChange}/>
                </div>
                <input type="submit" value="Login" onSubmit={onSubmit} className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}
export default Login;