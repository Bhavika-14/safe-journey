import React,{ useState } from 'react'
import Register from './register'
import Email from './email'
import Verification from './verification'
import Password from './password'
import Profile from './profile'
import CompleteSignup from './completeSignup'

const Signup = ({setDashboard,user,setUser}) => {
  
  const [showRegister,setShowRegister]=useState(true)
  const [showEmail,setShowEmail]=useState(false)
  const [showVerification,setShowVerification]=useState(false)
  const [showPassword,setShowPassword]=useState(false)
  const [showProfile,setShowProfile]=useState(false)
  const [showCompleteSignup,setShowCompleteSignup]=useState(false)

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [dob,setdob]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [image,setImage]=useState(null)

  return (
    <div>
      {showRegister && <Register setShowRegister={setShowRegister} setShowEmail={setShowEmail} firstName={firstName} lastName={lastName} dob={dob} setFirstName={setFirstName} setLastName={setLastName} setdob={setdob} />}
      {showEmail && <Email setShowEmail={setShowEmail} setShowVerification={setShowVerification} email={email} setEmail={setEmail} />}
      {showVerification && <Verification setShowVerification={setShowVerification} setShowPassword={setShowPassword} />}
      {showPassword && <Password setShowPassword={setShowPassword} setShowProfile={setShowProfile} password={password} setPassword={setPassword} email={email} />}
      {showProfile && <Profile setShowProfile={setShowProfile} setShowCompleteSignup={setShowCompleteSignup} image={image} setImage={setImage} />}
      {showCompleteSignup && <CompleteSignup setShowCompleteSignup={setShowCompleteSignup} image={image} user={user} setDashboard={setDashboard} firstName={firstName} lastName={lastName} dob={dob} email={email} password={password} setUser={setUser} />}

      
    </div>
  )
}

export default Signup