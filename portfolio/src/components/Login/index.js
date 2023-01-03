import { signInWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <div className="dashboard" style={{ top: '50%', left: '50%' }}>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login
