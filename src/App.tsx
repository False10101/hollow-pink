import Dither from './components/Dither'
import SocialBox from './assets/Social Box Desptop view everything/7.svg?react';
import Static from './assets/Social Box Desptop view everything/6.svg?react';
import ProfilePhotoBox from './assets/Social Box Desptop view everything/5.svg?react';
import ProfilePicture from './assets/Social Box Desptop view everything/3.png';
import Barcode from './assets/Social Box Desptop view everything/4.svg?react';
import TabletAndMobileViewSocialBox from './assets/Social Box Desptop view everything/Mobile View Social Box.svg?react';

import GmailIcon from './assets/Social Icon/1.svg?react';
import LinkedInIcon from './assets/Social Icon/2.svg?react';
import GithubIcon from './assets/Social Icon/3.svg?react';
import InstagramIcon from './assets/Social Icon/4.svg?react';

import Gameboy from './assets/Game Boy/Game boy desktop view.svg?react';
import MobileGameboy from './assets/Game Boy/mobile view game boy.svg?react';
import GameboyArrow from './assets/Game Boy/Gameboy arrow.svg?react';
import GameboyGrayButton from './assets/Game Boy/Game boy gray button.svg?react';
import ArrowGlow from './assets/Game Boy/Arrow glow.svg?react';

import CSSLogo from './assets/Front End/css-svgrepo-com.svg?react';
import HTMLLogo from './assets/Front End/html-svgrepo-com.svg?react';
import NextJSLogo from './assets/Front End/nextjs-fill-svgrepo-com.svg?react';
import NodeJSLogo from './assets/Front End/node-js-svgrepo-com.svg?react';
import ReactLogo from './assets/Front End/react-svgrepo-com.svg?react';
import TailwindCssLogo from './assets/Front End/tailwind-svgrepo-com.svg?react';
import TypeScriptLogo from './assets/Front End/typescript-16-svgrepo-com.svg?react';
import ViteLogo from './assets/Front End/vite icon.svg?react';

import ExpressLogo from './assets/Backend/express-svgrepo-com.svg?react';
import FastApilogo from './assets/Backend/fastapi-svgrepo-com (1).svg?react';
import LaravelLogo from './assets/Backend/laravel-svgrepo-com.svg?react';
import MySQLLogo from './assets/Backend/mysql-svgrepo-com.svg?react';
import PHPlogo from './assets/Backend/php01-svgrepo-com.svg?react';
import PostgreLogo from './assets/Backend/postgresql-logo-svgrepo-com.svg?react';
import PrismaLogo from './assets/Backend/prisma-svgrepo-com.svg?react';

import AWSLogo from './assets/Tools/aws-svgrepo-com.svg?react';
import DockerLogo from './assets/Tools/docker-svgrepo-com.svg?react';
import GitLogo from './assets/Tools/git-svgrepo-com.svg?react';
import LinuxLogo from './assets/Tools/linux-svgrepo-com.svg?react';
import NginxLogo from './assets/Tools/nginx-svgrepo-com.svg?react';



import MyResume from './assets/resume/Min Paing Hein CV.pdf';
import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

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

  const maxIndex = 2;

  const [gameboyIndex, setGameboyIndex] = useState<number>(0);

  const addIndex = (index: number) => {
    index++;

    if (index >= 3) {
      return index - 3;
    }

    return index;
  }

  const subtractIndex = (index: number) => {
    index--;

    if (index < 0) {
      return maxIndex;
    }

    return index;
  }

  const isDesktop = useMediaQuery('(min-width: 1280px)');

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
      <div className='absolute xl:left-[5%] top-0 h-screen w-full xl:w-[90%] bg-black/70 xl:bg-black/70 z-10 backdrop-blur-sm pointer-events-none xl:[clip-path:polygon(4%_0,92%_0,94%_100%,7%_100%)]'
      >
      </div>

      {/* LAYER 3: Content Box (Top) */}
      <div className='relative z-20 h-full flex flex-col items-center w-[95%] xl:w-[85%] mx-auto text-white overflow-hidden xl:[clip-path:polygon(1.3%_0,100%_0,100%_100%,4.3%_100%)]' >
        <div className='offsetBox w-full xl:w-[94%] ml-auto xl:border-l-3 border-[#a31eff] h-full'>
          <div className='topSplit w-full h-[40%] xl:h-[56%] grid grid-cols-[60%_40%] xl:grid-cols-[43%_56%] grid-rows-[35%_65%] md:grid-rows-[40%_60%]'>

            {/* Left Text Column */}
            <div className='grid topLeftText col-span-2 xl:col-span-1  row-span-1 border-[#a31eff]/50 border-b-3 w-[115%] xl:-ml-[15%]'>
              <div className="relative grid grid-cols-[12%_80%] xl:grid-cols-[18%_72%] grid-rows-2 ml-3 xl:ml-[15%] mt-auto mb-2 md:mb-5 text-3xl md:text-5xl font-['BrickSans'] gap-y-1 md:gap-y-3 tracking-wide">
                <div className='grid row-span-2 col-span-1 my-auto '><HollowText size="text-7xl md:text-9xl">P</HollowText></div>
                <div className='grid row-span-1 col-span-1 ml-2 mt-2'>ersonal</div>
                <div className='grid row-span-1 col-span-1 md:-ml-2'><HollowText size="text-3xl md:text-5xl ">Information</HollowText></div>
                <div className='absolute bg-[#332936] w-[55%] md:w-[50%] xl:w-[80%] h-[35%] bottom-0 md:-bottom-2 left-[15%] xl:right-0 z-[-1]'></div>
              </div>
            </div>



            {isDesktop && (
              <div className="relative hidden xl:grid col-span-1 row-span-2 text-3xl">

                {/* 1. Background Social Box - Using % for position */}
                <SocialBox className="absolute w-full h-[80%] z-[30] bottom-0 right-0 scale-106" />

                {/* 2. Static Element - Changed 'top-28'/'right-5' to % */}
                <Static className="absolute w-[45%] h-[8%] z-[50] right-[1.5%] top-[25%]" />

                {/* 3. THE FIX: A Wrapper Div for Frame + Photo */}
                {/* We position THIS div using percentages. The frame and photo live inside. */}
                <div className="absolute z-[40] w-[75%] h-[60%] top-[32%] -left-[8%]">

                  {/* The SVG Frame: Fills the wrapper */}
                  <ProfilePhotoBox className="absolute inset-0 w-full h-full z-20 pointer-events-none" />

                  <Barcode className="absolute -top-[35%] scale-40 w-[90%] h-full" />

                  {/* The Image: Fills the wrapper (behind the frame) */}
                  {/* object-cover ensures it fills the shape without stretching */}
                  <img
                    src={ProfilePicture}
                    className="absolute z-30 object-cover"
                    style={{
                      // Anchor to bottom so they stay aligned at the feet/bottom edge
                      bottom: '0',
                      // Center horizontally relative to the frame
                      left: '50%',
                      transform: 'translateX(-50%)',
                      // WIDTH: Adjust this to fill the frame width (e.g. 95% or 100%)
                      width: '100%',
                      // HEIGHT: Make this >100% to protrude out the top!
                      // 120% means it sticks out the top by 20% of the frame's height.
                      height: '125%'
                    }}
                  />
                </div>

                <div className='social-text-box  absolute z-[50] flex flex-col top-[33%] right-[7%] w-[42%] h-[58%] px-4 text-base'>

                  {/* Header */}
                  <span className='font-neoneon text-[#e4bcff] text-3xl tracking-[.25em] border-b-[1.5px] border-[#e4bcff] pb-2 drop-shadow-[0_0_8px_rgba(228,188,255,0.6)]'>
                    Socials:
                  </span>

                  {/* 1. GMAIL (mailto link) */}
                  <a
                    href="mailto:minph7102004@gmail.com"
                    className='flex mt-4 items-center group cursor-pointer'
                  >
                    <GmailIcon className="w-7 h-7 shrink-0 fill-[#e4bcff] drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-transform group-hover:scale-110" />
                    <span className='font-pixelify text-white ml-3 text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                      minph7102004@gmail.com
                    </span>
                  </a>

                  {/* 2. GITHUB */}
                  <a
                    href="https://github.com/False10101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex mt-3 items-center group cursor-pointer'
                  >
                    <GithubIcon className="w-7 h-7 shrink-0 fill-[#e4bcff] drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-transform group-hover:scale-110" />
                    <span className='font-pixelify text-white ml-3 text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                      https://github.com/False10101
                    </span>
                  </a>

                  {/* 3. LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/min-paing-hein-676465245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex mt-3 items-center group cursor-pointer'
                  >
                    <LinkedInIcon className="w-7 h-7 shrink-0 fill-[#e4bcff] drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-transform group-hover:scale-110" />
                    <span className='font-pixelify text-white ml-3 text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                      https://www.linkedin.com/in/min-paing-hein-676465245/
                    </span>
                  </a>

                  {/* 4. INSTAGRAM */}
                  <a
                    href="https://instagram.com/minpaingheinn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex mt-3 items-center group cursor-pointer'
                  >
                    <InstagramIcon className="w-7 h-7 shrink-0 fill-[#e4bcff] drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-transform group-hover:scale-110" />
                    <span className='font-pixelify text-white ml-3 text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                      https://instagram.com/minpaingheinn
                    </span>
                  </a>

                  {/* 5. DOWNLOAD BUTTON - Pushed to bottom with mt-auto */}
                  <a
                    href={MyResume}
                    download="Min_Paing_Hein_CV.pdf"
                    className='mt-auto w-full'
                  >
                    <button className='w-full rounded-sm border-[1.5px] border-[#e4bcff] text-[#e4bcff] font-pixelify uppercase tracking-widest text-lg hover:bg-[#e4bcff] hover:text-[#1a1a1a] hover:drop-shadow-[0_0_15px_rgba(228,188,255,0.6)] transition-all duration-300 group flex items-center justify-center gap-3'>

                      <DownloadIcon className="w-4 h-4 drop-shadow-[0_0_2px_rgba(228,188,255,0.8)] group-hover:drop-shadow-none transition-transform group-hover:scale-110" />

                      <span className="drop-shadow-[0_0_2px_rgba(228,188,255,0.8)] group-hover:drop-shadow-none text-base">
                        Download CV
                      </span>
                    </button>
                  </a>

                </div>

              </div>

            )}

            <div className='grid topLeftText col-span-1 row-span-1 grid-cols-[35%_65%] mt-7 md:mt-10 text-sm md:text-xl items-start'>

              {/* --- ROW 1: NAME (Both sides glow) --- */}
              {/* Left Column Item */}
              <div className='font-tiny5 uppercase tracking-widest pl-3 md:pl-16 text-[#e4bcff] pr-10 h-full drop-shadow-[0_0_3px_rgba(228,188,255,0.8)]'>
                Name:
              </div>
              {/* Right Column Item */}
              <div className='font-tiny5 tracking-widest uppercase md:pl-4 text-[#e4bcff] drop-shadow-[0_0_3px_rgba(228,188,255,0.8)]'>
                Min Paing Hein
              </div>

              {/* --- ROW 2: YEAR (Only left glows) --- */}
              <div className='font-tiny5 uppercase tracking-widest pl-3 md:pl-16 text-[#e4bcff] pr-10 h-full drop-shadow-[0_0_3px_rgba(228,188,255,0.8)]'>
                Year:
              </div>
              <div className='font-pixelify font-normal tracking-tight md:pl-4 text-sm md:text-lg'>
                Third Year
              </div>

              {/* --- ROW 3: MAJOR (Only left glows) --- */}
              <div className='font-tiny5 uppercase tracking-widest pl-3 md:pl-16 text-[#e4bcff] pr-10 h-full drop-shadow-[0_0_3px_rgba(228,188,255,0.8)]'>
                Major:
              </div>
              <div className='font-pixelify font-normal tracking-tight md:pl-4 text-sm md:text-lg'>
                Computer Science
              </div>

              {/* --- ROW 4: Type (Only left glows) --- */}
              <div className='font-tiny5 uppercase tracking-widest pl-3 md:pl-16 text-[#e4bcff] pr-10 h-full drop-shadow-[0_0_3px_rgba(228,188,255,0.8)]'>
                Type:
              </div>
              <div className='font-pixelify font-normal tracking-tight md:pl-4 text-sm md:text-lg'>
                FullStack Developer
              </div>

              {/* --- ROW 5: SCHOOL (Only left glows) --- */}
              <div className='font-tiny5 uppercase tracking-widest pl-3 md:pl-16 text-[#e4bcff] pr-10 h-full drop-shadow-[0_0_3px_rgba(228,188,255,0.8)]'>
                School:
              </div>
              <div className='font-pixelify font-normal tracking-tight md:pl-4 text-xs md:text-lg'>
                King Mongkut University of Technology Thonburi (KMUTT)
              </div>

            </div>

            {!isDesktop && (
              <div className='grid w-full p-3 h-full relative xl:hidden col-span-1 overflow-none'>
                
                {/* 1. IMAGE WRAPPER: Kept h-full (Restored original size) */}
                <div className="absolute z-[40] w-full h-full top-0 right-0">

                  {/* FRAME: Moved UP to top-[5%] (was 30%). Kept original dimensions. */}
                  <ProfilePhotoBox preserveAspectRatio="none" className="absolute top-[15%] md:top-[5%] -left-[35%] md:-left-[15%] w-[170%] md:w-[130%] h-[70%] md:h-[80%] z-20 pointer-events-none" />

                  <Barcode className="absolute hidden md:block -top-[30%] scale-40 w-[90%] h-full z-10" />

                  {/* IMAGE: Lifted bottom to '20%' to follow the frame upwards. Kept original dimensions. */}
                  <img
                    src={ProfilePicture}
                    className="absolute z-30 object-cover h-[80%] md:h-[100%]"
                    style={{
                      bottom: '15%', // Lifted up to match the frame
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                </div>

                {/* 2. DOWNLOAD BUTTON: Placed at absolute bottom */}
                <a
                  href={MyResume}
                  download="Min_Paing_Hein_CV.pdf"
                  className='absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] animate-pulse z-50'
                >
                  <button className='w-full rounded-sm border-[1.5px] border-[#e4bcff] text-[#e4bcff] font-pixelify uppercase tracking-widest text-[10px] md:text-sm py-1 hover:bg-[#e4bcff] hover:text-[#1a1a1a] hover:drop-shadow-[0_0_15px_rgba(228,188,255,0.6)] transition-all duration-300 group flex items-center justify-center gap-2'>
                    
                    <DownloadIcon className="w-3 h-3 md:w-4 md:h-4 drop-shadow-[0_0_2px_rgba(228,188,255,0.8)] group-hover:drop-shadow-none transition-transform group-hover:scale-110" />
                    
                    <span className="drop-shadow-[0_0_2px_rgba(228,188,255,0.8)] group-hover:drop-shadow-none whitespace-nowrap">
                      Download CV
                    </span>
                  </button>
                </a>

              </div>
            )}
          </div>

          <div className='hidden relative bottomSplitDESKTOP w-[91%] xl:flex flex-col h-[44%] ml-[1%] mr-auto'>
            <Gameboy preserveAspectRatio="none" className="w-full absolute h-[75%] left-0 top-[7%]" />
            {/* --- UPDATED: LEFT CONTROLS (PROJECT NAVIGATION) --- */}
            <div className='absolute top-[14%] left-[0%] w-[18%] h-[60%]'>

              {/* HEADER */}
              <div className='absolute top-[10%] left-[55%] -translate-x-1/2 w-[120%] text-center'>
                <span className='font-tiny5 text-[#e4bcff] text-xs tracking-widest uppercase animate-pulse drop-shadow-[0_0_5px_rgba(228,188,255,0.8)]'>
                  ▼ Select Project
                </span>
              </div>

              {/* 1. UP Arrow: EIDOLON (Fixed: Centered Horizontally, Lowered Vertically) */}
              <a href="/eidolon" className='group absolute w-8 h-8 border-[#a0ff88] rounded-full border-[1.5px] top-[48%] right-[37%] cursor-pointer bg-[#a0ff88]/10 hover:bg-[#a0ff88]/30 transition-all shadow-[0_0_10px_rgba(160,255,136,0.2)]'>
                <GameboyArrow className="absolute animate-pulse top-[15%] left-[18%] w-5 h-5 mx-auto [&_*]:fill-[#a0ff88] [&_*]:stroke-[#a0ff88]" />

                {/* LABEL */}
                <div className='absolute -top-7 animate-bounce left-1/2 -translate-x-1/2 flex flex-col items-center'>
                  <span className='text-[10px] font-pixelify tracking-widest text-[#a0ff88] bg-black/60 px-1.5 rounded border border-[#a0ff88]/30 whitespace-nowrap drop-shadow-md'>
                    EIDOLON
                  </span>
                </div>
              </a>

              {/* 2. LEFT Arrow: SYZYGY (Fixed: Vertically Aligned with Right Arrow) */}
              <a href="/syzygy" className='group absolute w-8 h-8 border-[#fffa88] rounded-full border-[1.5px] top-[62%] right-[54%] cursor-pointer bg-[#fffa88]/10 hover:bg-[#fffa88]/30 transition-all shadow-[0_0_10px_rgba(255,250,136,0.2)]'>
                <div className="-rotate-90 w-full animate-pulse  h-full relative">
                  <GameboyArrow className="absolute top-[15%] left-[17%] w-5 h-5 mx-auto [&_*]:fill-[#fffa88] [&_*]:stroke-[#fffa88]" />
                </div>

                {/* LABEL */}
                <div className='absolute top-[170%] animate-bounce -translate-y-1/2 -left-[100%] flex items-center justify-end w-16 pr-1'>
                  <span className='text-[10px] font-pixelify tracking-widest text-[#fffa88] bg-black/60 px-1.5 rounded border border-[#fffa88]/30 whitespace-nowrap drop-shadow-md'>
                    SYZYGY
                  </span>
                </div>
              </a>

              {/* 3. RIGHT Arrow: PRIMA (Fixed: Vertically Aligned with Left Arrow) */}
              <a href="/prima" className='group absolute w-8 h-8 border-[#88a9ff] rounded-full border-[1.5px] top-[62%] right-[20%] cursor-pointer bg-[#88a9ff]/10 hover:bg-[#88a9ff]/30 transition-all shadow-[0_0_10px_rgba(136,169,255,0.2)]'>
                <div className="rotate-90 w-full animate-pulse  h-full relative">
                  <GameboyArrow className="absolute top-[15%] left-[17%] w-5 h-5 mx-auto [&_*]:fill-[#88a9ff] [&_*]:stroke-[#88a9ff]" />
                </div>

                {/* LABEL */}
                <div className='absolute top-[170%] animate-bounce -translate-y-1/2 -right-[80%] flex items-center w-14 pl-1'>
                  <span className='text-[10px] font-pixelify tracking-widest text-[#88a9ff] bg-black/60 px-1.5 rounded border border-[#88a9ff]/30 whitespace-nowrap drop-shadow-md'>
                    PRIMA
                  </span>
                </div>
              </a>

              {/* 4. DOWN Arrow: Navigation Hint (Fixed: Centered Horizontally) */}
              <div className='absolute w-8 h-8 border-[#ff8888]/30 rounded-full border-[1.5px] top-[76%] right-[37%] rotate-[180deg] opacity-50 pointer-events-none'>
                <GameboyArrow className="absolute top-[15%] left-[17%] w-5 h-5 mx-auto [&_*]:fill-[#ff8888] [&_*]:stroke-[#ff8888]" />
              </div>
            </div>
            <div className='absolute top-[14%] flex left-[18%] w-[64%] border-[#302433] bg-black/50 backdrop-blur-xl border-20 rounded-sm h-[60%]'>
              {
                gameboyIndex === 0 &&

                <div className='flex w-full h-full'>
                  <ArrowGlow onClick={() => { setGameboyIndex(subtractIndex(gameboyIndex)) }} className="w-[10%] h-[40%] my-auto cursor-pointer" />
                  <div className='flex flex-col w-[90%] h-full mx-auto z-[50]'>
                    <div className='flex w-full h-[25%] pt-auto font-tiny5 text-lg tracking-[0.25em] uppercase '>
                      <span className='w-max  mx-auto mt-auto select-none'>Frontend Tech Stack</span>
                    </div>
                    <div className='w-full relative h-[75%] flex justify-between '>
                      <div className='absolute bg-[#332936]/65 w-full h-[50%] rounded-[50%] top-[35%]'></div>
                      <div className='flex flex-col justify-center items-center -translate-y-[15%]'>
                        <HTMLLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>HTML</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[7%]'>
                        <TailwindCssLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Tailwind</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[1%]'>
                        <ReactLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>React</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[9%]'>
                        <ViteLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Vite</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[9%]'>
                        <NextJSLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>NextJS</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[1%]'>
                        <NodeJSLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>JS</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[7%]'>
                        <TypeScriptLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Typescript</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[15%]'>
                        <CSSLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>CSS</span>
                      </div>
                    </div>
                  </div>
                  <ArrowGlow onClick={() => { setGameboyIndex(addIndex(gameboyIndex)) }} className="w-[10%] h-[40%] rotate-180 my-auto cursor-pointer" />
                </div>

              }

              {
                gameboyIndex === 1 &&

                <div className='flex w-full h-full relative'>
                  <div className='absolute bg-[#332936]/65 w-[85%] h-[30%] rounded-[50%] top-[55%] left-[7.5%]'></div>
                  <ArrowGlow onClick={() => { setGameboyIndex(subtractIndex(gameboyIndex)) }} className="w-[10%] h-[40%] my-auto" />
                  <div className='flex flex-col w-[90%] h-full mx-auto z-[50]'>
                    <div className='flex w-full h-[25%] pt-auto font-tiny5 text-lg tracking-[0.25em] uppercase '>
                      <span className='w-max  mx-auto mt-auto select-none'>Backend Tech Stack</span>
                    </div>
                    <div className='w-full h-[75%] flex justify-between'>
                      <div className='flex flex-col justify-center items-center -translate-y-[15%]'>
                        <PostgreLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>PostgresSQL</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[7%]'>
                        <MySQLLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>MySQL</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[1%]'>
                        <FastApilogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>FastAPI</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[9%]'>
                        <PHPlogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>PHP</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[1%]'>
                        <ExpressLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Express</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[7%]'>
                        <PrismaLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Prisma</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[15%]'>
                        <LaravelLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Laravel</span>
                      </div>
                    </div>
                  </div>
                  <ArrowGlow onClick={() => { setGameboyIndex(addIndex(gameboyIndex)) }} className="w-[10%] h-[40%] rotate-180 my-auto" />
                </div>

              }

              {
                gameboyIndex === 2 &&

                <div className='flex w-full h-full relative'>
                  <div className='absolute bg-[#332936]/65 w-[55%] h-[30%] rounded-[50%] top-[55%] left-[22.5%]'></div>
                  <ArrowGlow onClick={() => { setGameboyIndex(subtractIndex(gameboyIndex)) }} className="w-[10%] h-[40%] my-auto" />
                  <div className='flex flex-col w-[90%] h-full mx-auto z-[50]'>
                    <div className='flex w-full h-[25%] pt-auto font-tiny5 text-lg tracking-[0.25em] uppercase '>
                      <span className='w-max  mx-auto mt-auto select-none'>Tools</span>
                    </div>
                    <div className='w-[60%] h-[75%] flex justify-between mx-auto'>
                      <div className='flex flex-col justify-center items-center -translate-y-[7%]'>
                        <AWSLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>AWS</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[1%]'>
                        <DockerLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Docker</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[9%]'>
                        <NginxLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Nginx</span>
                      </div>
                      <div className='flex flex-col justify-center items-center translate-y-[1%]'>
                        <GitLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Git</span>
                      </div>
                      <div className='flex flex-col justify-center items-center -translate-y-[7%]'>
                        <LinuxLogo className="w-8 h-8" />
                        <span className='font-pixelify tracking-widest text-sm'>Linux</span>
                      </div>
                    </div>
                  </div>
                  <ArrowGlow onClick={() => { setGameboyIndex(addIndex(gameboyIndex)) }} className="w-[10%] h-[40%] rotate-180 my-auto" />
                </div>

              }


            </div>
            <div className='absolute top-[14%] right-[0%] w-[18%] h-[60%]'>
              <div className='absolute w-8 h-8 border-[#ff8888]/50 rounded-full border-[1.5px] top-[13%] right-[36%]'><span className='absolute text-[#ff8888]/50 text-xl font-pixelify top-0 left-[29.5%]'>X</span></div>
              <div className='absolute w-8 h-8 border-[#88a9ff]/50 rounded-full border-[1.5px] top-[27%] right-[54%] '><span className='absolute text-[#88a9ff]/50 text-xl font-pixelify top-0 left-[28.5%]'>Y</span></div>
              <div className='absolute w-8 h-8 border-[#fffa88]/50 rounded-full border-[1.5px] top-[27%] right-[18%] '><span className='absolute text-[#fffa88]/50 text-xl font-pixelify top-0 left-[29.5%]'>A</span></div>
              <div className='absolute w-8 h-8 border-[#a0ff88]/50 rounded-full border-[1.5px] top-[41%] right-[36%] '><span className='absolute text-[#a0ff88]/50 text-xl font-pixelify top-0 left-[29.5%]'>B</span></div>

              <GameboyGrayButton className="absolute bottom-[11%] left-[13%] h-14 w-14" />

            </div>
          </div>

          <div className='relative bottomSplitTABLETANDMOBILE grid grid xl:hidden w-full h-full my-[5%]'>
            <TabletAndMobileViewSocialBox
              preserveAspectRatio="none"
              className="absolute top-0 w-full md:w-[90%] md:left-[5%] h-[12%] [clip-path:polygon(0%_0%,16%_0%,16%_50%,42%_50%,42%_0%,100%_0%,100%_100%,0%_100%)]"
            />
            <span className='absolute -top-[1%] md:-top-[1.5%] left-[17.5%] md:left-[20%] font-neoneon text-[#e4bcff] text-base md:text-3xl tracking-[.25em] pb-2 h-max w-max z-[50]'>
              Socials:
            </span>
            <div className='absolute left-[2.5%] top-[2%] w-[95%] md:left-[7.5%] md:w-[85%] h-[8%] grid grid-cols-2 grid-rows-2 '>
              {/* 1. Gmail */}
              <a
                href="mailto:minph7102004@gmail.com"
                className='flex w-full h-full justify-start pl-[20%] items-center '>
                <GmailIcon className="h-6 w-6 shrink-0" /> {/* Added shrink-0 */}
                <span className='font-pixelify text-white ml-3 text-xs md:text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                  minph7102004@gmail.com
                </span>
              </a>

              {/* 2. LinkedIn */}
              <a
                href="https://www.linkedin.com/in/min-paing-hein-676465245/"
                target="_blank"
                rel="noopener noreferrer"
                className='flex w-full h-full justify-start pl-[10%] pr-[10%] items-center'>
                <LinkedInIcon className="h-6 w-6 shrink-0" /> {/* Added shrink-0 */}
                <span className='font-pixelify text-white ml-3 text-xs md:text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                  https://www.linkedin.com/in/min-paing-hein-676465245/
                </span>
              </a>

              {/* 3. Github */}
              <a
                href="https://github.com/False10101"
                target="_blank"
                rel="noopener noreferrer"
                className='flex w-full h-full justify-start pl-[20%] pr-[5%] items-center'>
                <GithubIcon className="h-6 w-6 shrink-0" /> {/* Added shrink-0 */}
                <span className='font-pixelify text-white ml-3 text-xs md:text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                  https://github.com/False10101
                </span>
              </a>

              {/* 4. Instagram */}
              <a
                href="https://instagram.com/minpaingheinn"
                target="_blank"
                rel="noopener noreferrer"
                className='flex w-full h-full justify-start pl-[10%] pr-[10%] items-center'>
                <InstagramIcon className="h-6 w-6 shrink-0" /> {/* Added shrink-0 */}
                <span className='font-pixelify text-white ml-3 text-xs md:text-sm truncate tracking-wide group-hover:text-[#e4bcff] group-hover:drop-shadow-[0_0_5px_rgba(228,188,255,0.8)] transition-all'>
                  https://instagram.com/minpaingheinn
                </span>
              </a>
            </div>

            <MobileGameboy className="absolute top-[15%] w-full md:left-[5%] md:w-[90%] h-[40%]" />

            {/* --- NEW CIRCULAR GAMEBOY SCREEN --- */}
            <div className='gameboyinsides absolute w-[70%] h-[22%] top-[20%] left-[15%] border-12 border-[#302433] bg-black/30 backdrop-blur-xl flex flex-col items-center py-2 overflow-hidden rounded-sm'>

              {/* Header Title */}
              <div className='font-tiny5 text-white/90 text-[10px] md:text-xs tracking-[0.15em] uppercase mb-1 drop-shadow-md z-30'>
                {gameboyIndex === 0 ? "FRONT END TECH STACK" : gameboyIndex === 1 ? "BACK END TECH STACK" : "TOOLS"}
              </div>

              {/* Content Container */}
              <div className='relative w-full h-full px-4 pb-2'>

                {/* Right Arrow Button */}

                <button

                  onClick={() => setGameboyIndex(subtractIndex(gameboyIndex))}

                  className='absolute left-0 top-1/2 rotate-180 -translate-y-1/2 z-40 pl-3 md:pr-5 p-2 active:scale-90 transition-transform opacity-80 hover:opacity-100'

                >

                  <svg width="8" height="12" viewBox="0 0 10 16" fill="none" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"><path d="M2 0H0V2H2V4H4V6H6V8H8V10H10V6H8V4H6V2H4V0H2Z" fill="white" /><path d="M2 16H0V14H2V12H4V10H6V8H8V6H10V10H8V12H6V14H4V16H2Z" fill="white" /></svg>

                </button>

                <button

                  onClick={() => setGameboyIndex(addIndex(gameboyIndex))}

                  className='absolute right-0 top-1/2 -translate-y-1/2 z-40 pl-3 md:pr-5 p-2 active:scale-90 transition-transform opacity-80 hover:opacity-100'

                >

                  <svg width="8" height="12" viewBox="0 0 10 16" fill="none" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"><path d="M2 0H0V2H2V4H4V6H6V8H8V10H10V6H8V4H6V2H4V0H2Z" fill="white" /><path d="M2 16H0V14H2V12H4V10H6V8H8V6H10V10H8V12H6V14H4V16H2Z" fill="white" /></svg>

                </button>

                {/* The Shadow/Platform at bottom */}
                <div className='absolute bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-[15%] bg-[#332936] rounded-[100%]  pointer-events-none'></div>

                {/* --- BACKEND (Circular Layout) --- */}
                {gameboyIndex === 1 && (
                  <div className="absolute inset-0 animate-fadeIn ">
                    {/* Top */}
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <PHPlogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>PHP</span>
                    </div>
                    {/* Top Right */}
                    <div className='absolute top-[12%] right-[26.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <ExpressLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>Express</span>
                    </div>
                    {/* Right */}
                    <div className='absolute top-[50%] right-[14%] -translate-y-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <LaravelLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>Laravel</span>
                    </div>
                    {/* Bottom Right */}
                    <div className='absolute bottom-[12%] right-[26.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <NextJSLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>NextJS</span>
                    </div>
                    {/* Bottom */}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <MySQLLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>MySQL</span>
                    </div>
                    {/* Bottom Left */}
                    <div className='absolute bottom-[12%] left-[27.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <PrismaLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>Prisma</span>
                    </div>
                    {/* Left */}
                    <div className='absolute top-[50%] left-[12%] -translate-y-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <PostgreLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>Postgres</span>
                    </div>
                    {/* Top Left */}
                    <div className='absolute top-[12%] left-[26.5%]  flex flex-col items-center scale-[0.65] md:scale-90'>
                      <FastApilogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1 whitespace-nowrap'>FastAPI</span>
                    </div>
                  </div>
                )}

                {/* --- FRONTEND (Circular Layout) --- */}
                {gameboyIndex === 0 && (
                  <div className="absolute inset-0 animate-fadeIn ">
                    {/* Center Piece */}

                    {/* Orbiting Icons */}
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <NextJSLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>NextJS</span>
                    </div>
                    <div className='absolute top-[12%] left-[29.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <ReactLogo className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(97,218,251,0.6)]" />
                      <span className='font-pixelify text-xs mt-1'>React</span>

                    </div>
                    <div className='absolute top-[12%] right-[29.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <ViteLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>Vite</span>

                    </div>
                    <div className='absolute top-[50%] right-[10%] md:right-[14%] -translate-y-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <TypeScriptLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>Typescript</span>

                    </div>
                    <div className='absolute bottom-[10%] md:bottom-[12%] right-[22.5%] md:right-[27.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <TailwindCssLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>TailwindCSS</span>

                    </div>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <NodeJSLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>NodeJS</span>

                    </div>
                    <div className='absolute bottom-[12%] left-[29.5%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <CSSLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>CSS</span>

                    </div>
                    <div className='absolute top-[50%] left-[15%] -translate-y-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <HTMLLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-xs mt-1'>HTML</span>

                    </div>
                  </div>
                )}

                {/* --- TOOLS (Circular Layout) --- */}
                {gameboyIndex === 2 && (
                  <div className="absolute inset-0 animate-fadeIn">
                    <div className='absolute top-[35%] left-1/2 -translate-x-1/2 flex flex-col items-center scale-[0.65] md:scale-90'>
                      <AWSLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1'>AWS</span>
                    </div>
                    <div className='absolute top-[15%] right-[25%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <DockerLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1'>Docker</span>
                    </div>
                    <div className='absolute bottom-[15%] right-[25%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <NginxLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1'>Nginx</span>
                    </div>
                    <div className='absolute bottom-[15%] left-[25%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <LinuxLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1'>Linux</span>
                    </div>
                    <div className='absolute top-[15%] left-[25%] flex flex-col items-center scale-[0.65] md:scale-90'>
                      <GitLogo className="w-8 h-8 md:w-10 md:h-10" />
                      <span className='font-pixelify text-[8px] mt-1'>Git</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* --- CONTROLS SECTION (New Addition) --- */}
            <div className='absolute top-[43%] w-full h-[10%] flex justify-around px-[10%] md:px-[15%] z-50'>

              {/* LEFT SIDE: D-PAD with Links */}
              <div className="relative w-[35%] h-[70%]">
                {/* UP Arrow: EIDOLON */}
                <a href="/eidolon" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#a0ff88] rounded-full border-[1.5px] top-[15%] left-[46.5%] -translate-x-1/2 cursor-pointer bg-[#a0ff88]/10 hover:bg-[#a0ff88]/30 transition-all shadow-[0_0_10px_rgba(160,255,136,0.2)]'>
                  <GameboyArrow className="absolute animate-pulse md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#a0ff88] [&_*]:stroke-[#a0ff88]" />
                  <div className='absolute -top-5 animate-bounce left-1/2 -translate-x-1/2 flex flex-col items-center'>
                    <span className='text-[8px] md:text-[10px] font-pixelify tracking-widest text-[#a0ff88] bg-black/60 px-1 rounded border border-[#a0ff88]/30 whitespace-nowrap drop-shadow-md'>
                      EIDOLON
                    </span>
                  </div>
                </a>

                {/* LEFT Arrow: SYZYGY */}
                <a href="/syzygy" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#fffa88] rounded-full border-[1.5px] top-[65%] left-[10%] -translate-y-1/2 cursor-pointer bg-[#fffa88]/10 hover:bg-[#fffa88]/30 transition-all shadow-[0_0_10px_rgba(255,250,136,0.2)]'>
                  <div className="-rotate-90 animate-pulse w-full h-full relative">
                    <GameboyArrow className="absolute md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#fffa88] [&_*]:stroke-[#fffa88]" />
                  </div>
                  <div className='absolute animate-bounce top-[150%] left-[30%] -translate-x-1/2 flex items-center justify-center w-16'>
                    <span className='text-[8px] md:text-[10px] font-pixelify tracking-widest text-[#fffa88] bg-black/60 px-1 rounded border border-[#fffa88]/30 whitespace-nowrap drop-shadow-md'>
                      SYZYGY
                    </span>
                  </div>
                </a>

                {/* RIGHT Arrow: PRIMA */}
                <a href="/prima" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#88a9ff] rounded-full border-[1.5px] top-[65%] right-[20%] -translate-y-1/2 cursor-pointer bg-[#88a9ff]/10 hover:bg-[#88a9ff]/30 transition-all shadow-[0_0_10px_rgba(136,169,255,0.2)]'>
                  <div className="rotate-90 animate-pulse w-full h-full relative">
                    <GameboyArrow className="absolute md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#88a9ff] [&_*]:stroke-[#88a9ff]" />
                  </div>
                  <div className='absolute animate-bounce top-[150%] left-[70%] -translate-x-1/2 flex items-center justify-center w-14'>
                    <span className='text-[8px] md:text-[10px] font-pixelify tracking-widest text-[#88a9ff] bg-black/60 px-1 rounded border border-[#88a9ff]/30 whitespace-nowrap drop-shadow-md'>
                      PRIMA
                    </span>
                  </div>
                </a>

                {/* DOWN Arrow: Decoration */}
                <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#ff8888]/30 rounded-full border-[1.5px] -bottom-[10%] left-[46.5%] -translate-x-1/2 rotate-[180deg] opacity-50 pointer-events-none'>
                  <GameboyArrow className="absolute md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#ff8888] [&_*]:stroke-[#ff8888]" />
                </div>

                <GameboyGrayButton className="absolute -right-6 -bottom-5 h-8 w-8 md:h-10 md:w-10 opacity-80 justify-end" />

              </div>

              {/* CENTER: +/- Pattern */}
              <div className="relative w-[20%] h-full flex items-start justify-center pb-2 mt-3 ml-4">
                <div className="grid grid-cols-3 gap-x-1 gap-y-1.5 md:gap-x-2 md:gap-y-2 place-items-center">

                  {/* Row 1: Dash - Dot - Dash */}
                  <div className="w-3 h-0.5 md:w-4 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>
                  <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>
                  <div className="w-3 h-0.5 md:w-4 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>

                  {/* Row 2: Dot - Dash - Dot */}
                  <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>
                  <div className="w-3 h-0.5 md:w-4 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>
                  <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>

                  {/* Row 3: Dash - Dot - Dash */}
                  <div className="w-3 h-0.5 md:w-4 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>
                  <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>
                  <div className="w-3 h-0.5 md:w-4 md:h-1 bg-[#e4bcff] rounded-full shadow-[0_0_2px_rgba(228,188,255,0.8)]"></div>

                </div>
              </div>

              {/* RIGHT SIDE: Action Buttons (X/Y/A/B) */}
              <div className="relative w-[35%] h-[70%] mr-3">
                <GameboyGrayButton className="absolute -left-2 -bottom-5 h-8 w-8 md:h-10 md:w-10 opacity-80 justify-end" />
                <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#ff8888]/50 rounded-full border-[1.5px] top-[10%] left-[60%] -translate-x-1/2 flex items-center justify-center'><span className='text-[#ff8888]/50 text-xs md:text-xl font-pixelify'>X</span></div>
                <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#88a9ff]/50 rounded-full border-[1.5px] top-[60%] left-[30%] -translate-y-1/2 flex items-center justify-center'><span className='text-[#88a9ff]/50 text-xs md:text-xl font-pixelify'>Y</span></div>
                <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#fffa88]/50 rounded-full border-[1.5px] top-[60%] right-[10%] -translate-y-1/2 flex items-center justify-center'><span className='text-[#fffa88]/50 text-xs md:text-xl font-pixelify'>A</span></div>
                <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#a0ff88]/50 rounded-full border-[1.5px] -bottom-[10%] left-[60%] -translate-x-1/2 flex items-center justify-center'><span className='text-[#a0ff88]/50 text-xs md:text-xl font-pixelify'>B</span></div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export default App


