import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CongratulationPageOne = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-softBlue'>
      <div class="container mx-auto px-5 ">
        <img src="assets/image.png" alt=""/>
<div class="flex flex-col items-center justify-center space-y-4 mt-10">
<img src="assets/congratulation-image.png" alt=""/>
<div class="flex flex-col space-y-6 max-w-xl pb-32">
  <h2 className='text-4xl text-center font-bold'>CONGRATULATIONS!!</h2>
  <p>Thank you for registering to be a trainee in Kings Health Care Practitioners Limited. you are now one step away to being a certified medical practitioner. Kindly make payment to begin classes immediately.</p>
  <Link to="/congratulations-two">
  <img className='md:w-[200px] ml-20' src="assets/paynow.png" alt="" />
  </Link>
  
</div>
</div>
    

      </div>
    </div>
    
  )
}

export default CongratulationPageOne