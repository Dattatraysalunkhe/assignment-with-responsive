import React from 'react'
import Frame1315 from '../assets/nav/Frame1315.png'
import LOGO from '../assets/nav/LOGO.png'
import Hamburger from '../assets/nav/Hamburger.png'
import DesignSystemVer3 from '../assets/nav/DesignSystemVer3.png'
import Group1241 from '../assets/img1/Group1241.png'
import Group1246 from '../assets/img1/Group1246.png'
import Group962 from '../assets/img1/Group962.png'
import Maskgroup from '../assets/img1/Maskgroup.png'
function Home() {

 

  return (
    <main className='relative bg-[#040404] h-[7800px] text-white'>
      <nav className='flex max-w-[1920px] mx-auto p-4 items-center justify-between gap-[90px] h-[132px] border-gray-700 border-b-2'>
        <div className=' mobile:max-laptop:hidden'>
          <img src={Frame1315} alt="" />
        </div>
        <div className=' laptop:hidden'>
          <img src={LOGO} alt="" />
        </div>
        <div className='hidden laptop:flex p-1 rounded-[100px] bg-gray-800 '>

          <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
            <button className=''>The Company</button>
          </div>

          <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
            <button className=''>Our Services</button>
          </div>

          <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
            <button className=''>Our Expertise</button>
          </div>

          <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
            <button className=''>Client Work</button>
          </div>
        </div>

        <div className='laptop:hidden'>
          <img src={Hamburger} alt="" />
        </div>


        <div className=' hidden tablet:flex rounded-[100px] border-2 text-white w-[145px] h-[56px] gap-[8px] items-center'>
          <div className='text-center items-center px-[32px] py-[10px] h-'>
            <button>Engage Us</button>
          </div>
        </div>

      </nav>
      {/*  */}

      {/*design system for scale  */}


      <div className=' max-w-[1920px] h-[196px] laptop:gap-[40px] mx-auto flex flex-col text-white  mt-[100px] justify-between '>
        <div className='laptop:h-[84px]  items-center'>
          <h1 className='w-full text-[36px] tablet:text-[40px] desktop:text-[74px] font-normal text-center'>Design System for scale</h1>
        </div>
        <div className='  laptop:h-[72px] items-center'>
          <p className=' w-full text-[18px] tablet:text-[24px] font-light text-center' >
            Add consistency to the scaling up of User Experience with an organized <br></br>
            assembly of guidelines, components and documentation
          </p>
        </div>
      </div>


      {/*  */}


      {/* images */}

      <div className='max-w-[1920px] h-[488px] desktop:h-[750px] mx-auto mt-[100px]' >
        <img className='h-[488px] object-cover desktop:h-[750px] laptop:w-full desktop:w-full  ' src={DesignSystemVer3} alt="" />
      </div>

      {/*  */}

      {/* desgin system */}
      <div className='bg-[#ffffff] h-[4153px] screen:h-[3890px] text-black'>

        <div className='max-w-[1920px] mx-auto pt-[100px]  '>
          <div className='w-full h-[126px]  laptop:h-[140px]  desktop:h-[120px] screen:h-[750px] p-4 items-center '>
            <h1 className='font-normal text-[32px] leading-[42px] text-left
             tablet:font-normal tablet:text-[36px] tablet:leading-[46px] tablet:text-center
             laptop:font-normal laptop:text-[36px] laptop:leading-[48px] laptop:text-center
             screen:font-normal screen:text-[80px] screen:leading-[72px] screen:text-center

             ' >A design system for website & apps is <br></br> critical to resolve:</h1>
          </div>
        </div>
        {/* our prooven metrology */}
        <div className='max-w-[1920px] h-[688] tablet:h-[300px] laptop:h-[360px] desktop:h-[448px] screen:h-[496px] mx-auto pt-[100px] '>
          <div className='w-full flex flex-col   h-[688px] laptop:h-[360px] desktop:h-[448px] screen:h-[496px] desktop:justify-between  '>
            <div className='w-full flex flex-wrap  h-[408px] gap-[24px]  p-[48px] laptop:flex-wrap  laptop:justify-between  laptop:items-center    desktop:flex-row desktop:gap-[40px]  
            '>

              <div className='w-[321px] h-[60px] border-b-black desktop:h-[100px]  laptop:border-r-2 '>
                <h1>/01</h1>
                <div className='w-[342px] h-[60px] mt-[30px] desktop:h-[64px]'>
                  <p className='font-light text-[20px] leading-[36px]'>
                    Inconsistent user experience.
                  </p>
                </div>
              </div>

              <div className='w-[321px] h-[60px] desktop:h-[100px] laptop:border-r-2  '>
                <h1>/02</h1>
                <div className='w-[342px] h-[60px] mt-[30px] desktop:h-[64px]'>
                  <p className='font-light text-[20px] leading-[36px]'>
                    Design-led delays in go-to-market.
                  </p>
                </div>
              </div>

              <div className='w-[321px] h-[60px] desktop:h-[100px]  laptop:border-r-2  '>
                <h1>/03</h1>
                <div className='w-[342px] h-[60px] mt-[30px] desktop:h-[64px]'>
                  <p className='font-light text-[20px] leading-[36px]'>
                    Disjointed digital brand image.
                  </p>
                </div>
              </div>

              <div className='w-[321px] h-[60px] desktop:h-[100px] laptop:border-r-2 '>
                <h1>/04</h1>
                <div className='w-[342px] h-[60px] mt-[30px] desktop:h-[64px]'>
                  <p className='font-light text-[20px] leading-[36px]'>
                    Disconnected dev-design sprints.
                  </p>
                </div>
              </div>




            </div>


            <div className='w-full items-center desktop:items-center  '>
              {/* second partu */}
              <div className=' w-full flex h-[224px] flex-col gap-[32px]  pt-[30px]    '>
                <div className='justify-center '>
                  <h1 className='font-normal text-[24px] leading-[34px] desktop:text-[36px] screen::text-[36px] text-center tracking-[-5%]' >Our proven methodology for Design Systems.</h1>
                </div>
                <div className=''>
                  <p className='text-center font-light text-[18px] leading-[36px]'>Redesigning a design system is a densely strategised process
                    that involves careful planning, collaboration, and iterative refinement.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/*  */}

        {/*image slider  */}
        <div className='max-w-[1920] mx-auto tablet:mt:[400px] laptop:mt-[200px]  '>

          <div className='w-full pl-[24px] tablet:h-[449px]  laptop:h-[546px] desktop:h-[602px] screen:h-[754px]'>

            <div className=' h-[355px] flex gap-[20px] '>
                 
                 <div className='w-[280px] h-[355px] tablet:w-[310px] tablet:h-[393px]
                 laptop:w-[380px] laptop:h-[482px]
                 desktop:w-[412px]  desktop:h-[522px]
                 screen:w-[516px] screen:h-[654px]
                '>
                   <img src={Group1241} alt="" />
                 </div>

                 <div className='w-[280px] h-[280px] tablet:w-[310px] tablet:h-[310px]
                 laptop:w-[380px] laptop:h-[380px]
                 desktop:w-[412px]  desktop:h-[412px]
                 screen:w-[516px] screen:h-[516px]
                 '>
                    <img src={Group1246} alt="" />
                 </div>
                 <div className='w-[280px] h-[280px] tablet:w-[310px] tablet:h-[310px]
                 laptop:w-[310px] laptop:h-[152px]
                 desktop:w-[412px]  desktop:h-[412px]
                 screen:w-[516px] screen:h-[516px]
                 '>
                    <img src={Maskgroup} alt="" />
                 </div>
  
            </div>
            <div className=''>
              <img className=' pl-[80%] pt-36' src={Group962} alt="" />
            </div>
            

          </div>

        </div>
        {/* */}
        {/*  */}

        

      </div>



    </main>
  )
}

export default Home
