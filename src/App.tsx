import Dither from './components/Dither'
import SocialBox from './assets/Social Box Desptop view everything/7.svg?react';
import Static from './assets/Social Box Desptop view everything/6.svg?react';
import ProfilePhotoBox from './assets/Social Box Desptop view everything/5.svg?react';

const HollowText = ({ children, className = "", size = "text-5xl" }: { children: string, className?: string, size?: string }) => {
  return (
    <div className={`relative ${size} ${className} font-bold leading-none`}>
      {/* Layer 1: The Solid Shadow (Back) */}
      <span className="absolute left-[8px] top-[4px] text-[#2A2A35] select-none z-0">
        {children}
      </span>
      {/* Layer 2: The Hollow Outline (Front) */}
      <span 
        className="relative z-10 text-transparent"
        style={{ WebkitTextStroke: '2.5px #C084FC' }} // Purple outline
      >
        {children}
      </span>
    </div>
  )
}

function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gray-900">

      {/* LAYER 1: Dither Background (Bottom) */}
      <div className='absolute inset-0 z-0'>
        <Dither
          waveColor={[0.5, 0.0, 0.7]}
          disableAnimation={false}
          enableMouseInteraction={false}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* LAYER 2: Filter Layer (Middle) */}
      <div className='absolute left-[5%] top-0 h-screen w-[90%] bg-black z-10 backdrop-blur-sm pointer-events-none'
        style={{ clipPath: 'polygon(4% 0, 92% 0, 94% 100%, 7% 100%)' }}
      >
      </div>

      {/* LAYER 3: Content Box (Top) */}
      <div className='relative z-20 h-full flex flex-col items-center w-[85%] mx-auto text-white overflow-hidden' 
      style={{ clipPath: 'polygon(1.3% 0, 100% 0, 100% 100%, 4.3% 100%)' }}
      >
        <div className='offsetBox w-[94%] ml-auto border-l-3 border-[#a31eff] h-full'>
            <div className='topSplit w-full h-[58%] border-b-[1px] border-white grid grid-cols-2 grid-rows-[43.5%_56.5%]'>
                <div className='grid topLeftText col-span-1 row-span-1 border-[#a31eff]/50 border-b-3 w-[115%] -ml-[15%]'>
                  <div className="relative grid grid-cols-[18%_72%] grid-rows-2 ml-[20%] mt-auto mb-5 text-5xl font-['BrickSans'] gap-y-3 tracking-wide">
                      <div className='grid row-span-2 col-span-1 my-auto '><HollowText size="text-9xl">P</HollowText></div>
                      <div className='grid row-span-1 col-span-1 ml-2 mt-2'>ersonal</div>
                      <div className='grid row-span-1 col-span-1 -ml-2'><HollowText size="text-5xl">Information</HollowText></div>
                      <div className='absolute bg-[#332936] w-[80%] h-[35%] -bottom-2 right-0 z-[-1]'></div>
                  </div>
                </div>
                <div className="relative grid topLeftText col-span-1 row-span-2 text-3xl">
                    <SocialBox className="absolute w-full h-full z-[30] scale-106 mt-10"/>
                    <Static className="absolute w-[40%] h-[62%] z-[50] right-7 top-0" />
                    {/* <ProfilePhotoBox className="relative w-[75%] h-[80%] z-[50]"></ProfilePhotoBox> */}
                </div>
                <div className='grid topLeftText col-span-1 row-span-1 '>s</div>
            </div>
        </div>
      </div>

    </main>
  )
}

export default App