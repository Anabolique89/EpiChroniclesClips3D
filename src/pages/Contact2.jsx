import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { OrbitControls } from '@react-three/drei';
import { VikingBoat } from "../models/VikingBoat";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
// import { Chest } from "../models/Chest";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})

const [isLoading, setIsLoading] = useState(false);
const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // showAlert({show: true, text: 'I did not receive your message', type:'danger'})
  };

   const handleFocus = () => setCurrentAnimation('walk');
    const handleBlur = () => setCurrentAnimation('idle');


//  FORM HANDLING SEND DATA   

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setCurrentAnimation('run');

//SEND THE DATA
      emailjs.send(
        // 'service_12gjd3b',
        // 'template_3twsioe'
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "EpicChroniclesClips",
          from_email: form.email,
          to_email: 'flottekiki@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
   .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });
     setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          setCurrentAnimation("idle");
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
   <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
  {alert.show && <Alert {...alert} />}
  {/* <Alert text="test"/> */}
<div className='flex-1 min-w-[50%] flex flex-col'>
  <h1 className=' sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
Get In Touch
  </h1>
<form  ref={formRef}
className='w-full flex flex-col gap-7 mt-14'
onSubmit={handleSubmit}
>
<label className='text-black-800 font-semibold'>
  Name
  <input 
  type='text'
  name='name'
  className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
  placeholder='John Doe'
  required
  value={form.name}
  onChange = {handleChange} 
  onFocus={handleFocus}
  onBlur={handleBlur}
  />
</label>
<label className='text-black-800 font-semibold'>
  Email
  <input 
  type='email'
  name='email'
  className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
  placeholder='John@email.com'
  required
  value={form.email}
  onChange = {handleChange} 
  onFocus={handleFocus}
  onBlur={handleBlur}
  />
</label>
<label className='text-black-800 font-semibold'>
  Your Message
  <textarea
  name='message'
  className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
  rows={4}
  placeholder='Let us know how we can help!'
  required
  value={form.message}
  onChange = {handleChange} 
  onFocus={handleFocus}
  onBlur={handleBlur}
  />
</label>
<button
type='submit'
className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
disabled={isLoading}
onFocus={handleFocus}
onBlur={handleBlur}
>
  {isLoading ? 'Sending...' : 'Send Message'}
</button>

</form>
</div>
<div className="lg:w-1/2 w-full lg:h-auto md:h-[750px] h-[450px] mt-8">

<Canvas 
camera={{ position: [0, 2, 10], fov: 45 }}>
   <ambientLight 
   intensity={0.5} />
  <directionalLight 
  position={[10, 10, 5]} 
  intensity={1.5} 
  castShadow />
   <hemisphereLight
    skyColor={'#ffffff'}
    groundColor={'#444444'}
    intensity={4}
    position={[0, 50, 0]}
  />
<Suspense fallback={<Loader />}>
  <VikingBoat
  currentAnimation={currentAnimation}
 scale={[0.01, 0.01, 0.01]}
  rotation={[0, Math.PI, 0]}
  position={[-0.5, -1, 1]}
  />
  <OrbitControls />
</Suspense>

</Canvas>
</div>
   </section>
  )
}

export default Contact