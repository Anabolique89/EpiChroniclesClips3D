import React from 'react'


const About = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Hey history fans! Welcome to our 
        <span className='blue-gradient_text font-semibold drop-shadow'> reverie... </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Step into the past and witness history like never before.
On Epic Chronicles Clips, we bring you breathtaking edits from the greatest historical sagas, series, and movies—capturing the most intense, cinematic moments in all their glory.

</p>
<p>
  But we don’t stop there. Our long-form documentaries dive deep into the world of medieval history—exploring battles, legends, and the lives of iconic figures. From the fierce 
Viking Age to tales of kings, warriors, and forgotten empires, we combine historical accuracy with cinematic storytelling to transport you to another 
time.
</p>
      </div>
      {/* <div className='py-10 flex flex-col'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>Movies & Series</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className='py-16'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>
        ⚔ What You’ll Find  Our YouTube Channel
        </h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Epic edits from historical shows and films <br></br>

Viking sagas and medieval legends<br></br>

Dramatic retellings of history’s greatest events<br></br>

Captivating documentaries full of battles, myths, and intrigue. <br></br><br></br>

If you live for history, legends, and epic storytelling—subscribe and join our journey through the chronicles of the past.</p>
 
        </div>
    
      </div>
      <div>
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Here you can get our
        <span className='blue-gradient_text font-semibold drop-shadow'> merch... </span>
      </h1>
      <button className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>SHOP</button>
      </div>
    </section>
  )
}

export default About