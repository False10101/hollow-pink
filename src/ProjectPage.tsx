import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Dither from "./components/Dither";
import SlideShowBox from './assets/Game Boy/Slide show gamboy.svg?react';
// Assuming you have these components imported based on your snippet
import GameboyArrow from "./assets/Game Boy/Gameboy arrow.svg?react"; // Adjust import path if needed
import GameboyGrayButton from "./assets/Game Boy/Game boy gray button.svg?react"; // Adjust import path if needed

import SyzygyPage1 from "./assets/Screenshots/Syzygy/1.png";
import SyzygyPage2 from "./assets/Screenshots/Syzygy/2.png";
import SyzygyPage3 from "./assets/Screenshots/Syzygy/3.png";
import SyzygyPage4 from "./assets/Screenshots/Syzygy/4.png";
import SyzygyPage5 from "./assets/Screenshots/Syzygy/5.png";

import EidolonPage1 from "./assets/Screenshots/Eidolon/1.png";
import EidolonPage2 from "./assets/Screenshots/Eidolon/2.png";
import EidolonPage3 from "./assets/Screenshots/Eidolon/3.png";
import EidolonPage4 from "./assets/Screenshots/Eidolon/4.png";
import EidolonPage5 from "./assets/Screenshots/Eidolon/5.png";

import PrimaPage1 from "./assets/Screenshots/Prima/1.png";
import PrimaPage2 from "./assets/Screenshots/Prima/2.png";
import PrimaPage3 from "./assets/Screenshots/Prima/3.png";
import PrimaPage4 from "./assets/Screenshots/Prima/4.png";
import PrimaPage5 from "./assets/Screenshots/Prima/5.png";


const HollowText = ({ children, className = "", size = "text-5xl" }: { children: string, className?: string, size?: string }) => {
    return (
        <div className={`relative ${size} ${className} font-semibold leading-none`}>
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

const ProjectPage = () => {
    // 1. Get the parameter ID string
    const { id } = useParams();
    const [currentSlide, setCurrentSlide] = useState(0);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [isPhone, setIsPhone] = useState(window.innerWidth < 768);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 1024);
            setIsPhone(width < 768); // Detect phone specifically
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cutSize = isPhone ? "20px" : "35px";

    const openModal = (url: string) => {
        setModalImage(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    // --- DYNAMIC IMAGE SELECTION LOGIC ---
    const syzygyImages = [SyzygyPage1, SyzygyPage2, SyzygyPage3, SyzygyPage4, SyzygyPage5];
    const eidolonImages = [EidolonPage1, EidolonPage2, EidolonPage3, EidolonPage4, EidolonPage5];
    const primaImages = [PrimaPage1, PrimaPage2, PrimaPage3, PrimaPage4, PrimaPage5];

    const imageMap: Record<string, string[]> = {
        syzygy: syzygyImages,
        eidolon: eidolonImages,
        prima: primaImages
    };

    // Get the correct array based on ID, default to Syzygy if somehow undefined (though redirect handles this)
    const selectedImages = id ? imageMap[id.toLowerCase()] : syzygyImages;

    // Map the selected images to your slide format
    const slides = selectedImages?.map((url, index) => ({
        id: index + 1,
        url: url
    })) || [];

    const nextSlide = (e?: React.MouseEvent) => {
        e?.preventDefault();
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e?: React.MouseEvent) => {
        e?.preventDefault();
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // 2. Define your data 
    const syzygyDataset = {
        firstLetter: "S",
        restOfTitle: "yzygy",
        description: "API Drift Detection Tool",
        accountDetail: "Sign up to create your account",
        url: "https://syzygy.minpainghein.com",
        pages: {
            1: "Command Center: High-level overview of system integrity, active anomalies, and recent scan logs.",
            2: "Operative Profile: Manage your administrator credentials, security protocols, and API keys.",
            3: "New Scan: Initialize scans across backend cores and frontend interfaces to detect mismatches.",
            4: "Alignment View: Visualize backend definitions vs. frontend consumption side-by-side.",
            5: "Drift Inspector: Deep dive into code-level discrepancies between endpoint definitions and calls."
        }
    };

    const eidolonDataset = {
        firstLetter: "E",
        restOfTitle: "idolon",
        description: "All in one AI Suite App",
        accountDetail: "Username: guest | Password: guest",
        url: "https://eidolon.minpainghein.com",
        pages: {
            1: "Main Dashboard: Real-time overview of API tokens, costs, and system status.",
            2: "Smart Note Taker: Transforms raw transcripts into formatted notes with smart tagging.",
            3: "Document Generator: Create structured reports and essays from simple prompts.",
            4: "Textbook Explainer: Simplifies complex PDFs into digestible study guides.",
            5: "User Diagnostics: Track your API consumption, storage, and activity logs."
        }
    };

    const primaDataset = {
        firstLetter: "P",
        restOfTitle: "rima",
        description: "Data cleaning and pipeline tool",
        accountDetail: "No need to sign up",
        url: "https://prima.minpainghein.com",
        pages: {
            1: "The Extraction Point: Upload raw CSVs to initialize a lightweight session immediately.",
            2: "Session Active: Confirm successful data sampling and enter the audit room.",
            3: "The Raw Matter: Analyze dataset health, including duplicates, missing cells, and distribution stats.",
            4: "Pipeline Stack: Build transformation recipes (e.g., Fill Median) with a live preview of results.",
            5: "The Elixir: Generate and deploy the final Python preprocessing pipeline code."
        }
    };

    // 3. Create a Lookup Object
    const datasets: Record<string, any> = {
        syzygy: syzygyDataset,
        eidolon: eidolonDataset,
        prima: primaDataset
    };

    // 4. Select the dataset based on the URL ID
    const currentDataset = id ? datasets[id.toLowerCase()] : null;

    // Optional: Redirect if the URL is wrong
    if (!currentDataset) {
        return <Navigate to="/" replace />;
    }


    return (
        <main className="relative w-full h-screen overflow-hidden bg-gray-900">
            {/* Background layers... */}
            <div className='absolute inset-0 z-0'>
                <Dither waveColor={[0.5, 0.0, 0.7]} disableAnimation={false} enableMouseInteraction={false} colorNum={4} waveAmplitude={0.3} waveFrequency={3} waveSpeed={0.05} />
            </div>

            <div className='absolute xl:left-[5%] top-0 h-screen w-full xl:w-[90%] bg-black/70 xl:bg-black/70 z-10 backdrop-blur-sm pointer-events-none xl:[clip-path:polygon(10%_0,100%_0,92%_100%,5%_100%)]'></div>

            <div className='relative z-20 h-full flex flex-col items-center w-[95%] xl:w-[85%] mx-auto text-white overflow-hidden xl:[clip-path:polygon(10%_0,100%_0,92%_100%,5%_100%)]' >
                <div className='offsetBox w-full xl:w-[90%] ml-auto h-full flex flex-col'>
                    <div className='topSplit w-full h-[12%] md:h-[16%] xl:h-[22.5%] grid'>

                        {
                            id?.toLowerCase() === "prima" &&

                            <div className='grid topLeftText border-[#a31eff]/50 border-b-2 w-full '>
                                <div className="relative grid grid-cols-[15%_78%] grid-rows-2 ml-3 w-full xl:w-[90%] justify-center xl:justify-normal xl:justify-self-center mt-auto mb-2 md:mb-5 text-2xl md:text-5xl font-['BrickSans'] gap-y-1 md:gap-y-3 tracking-wide">
                                    <div className='grid row-span-2 col-span-1 my-auto justify-end'><HollowText size="text-7xl md:text-9xl">{currentDataset.firstLetter}</HollowText></div>
                                    <div className='grid row-span-1 col-span-1 ml-2 mt-2 items-end'>{currentDataset.restOfTitle}</div>
                                    <div className='grid row-span-1 col-span-1 mt-0 md:-ml-2 items-center'><HollowText size="text-sm md:text-[1.6875rem] xl:text-4xl ">{currentDataset.description}</HollowText></div>
                                    <div className='absolute bg-[#332936] w-[75%] md:w-[75%] xl:w-[73%] h-[35%] bottom-0 md:-bottom-2 left-[20%] xl:right-0 z-[-1]'></div>
                                </div>
                            </div>
                        }

                        {
                            id?.toLowerCase() === "eidolon" &&

                            <div className='grid topLeftText border-[#a31eff]/50 border-b-2 w-full '>
                                <div className="relative grid grid-cols-[15%_78%] grid-rows-2 ml-3 w-full xl:w-[60%] justify-center xl:justify-normal xl:justify-self-center mt-auto mb-2 md:mb-5 text-2xl md:text-5xl font-['BrickSans'] gap-y-1 md:gap-y-3 tracking-wide">
                                    <div className='grid row-span-2 col-span-1 my-auto justify-end mr-[15%]'><HollowText size="text-7xl md:text-9xl">{currentDataset.firstLetter}</HollowText></div>
                                    <div className='grid row-span-1 col-span-1 mt-2 items-end'>{currentDataset.restOfTitle}</div>
                                    <div className='grid row-span-1 col-span-1 mt-0 items-center'><HollowText size="text-lg md:text-2xl md:text-4xl ">{currentDataset.description}</HollowText></div>
                                    <div className='absolute bg-[#332936] w-[65%] md:w-[68%] xl:w-[75%] h-[35%] bottom-0 md:-bottom-2 left-[20%] xl:right-0 z-[-1]'></div>
                                </div>
                            </div>
                        }

                        {
                            id?.toLowerCase() === "syzygy" &&

                            <div className='grid topLeftText border-[#a31eff]/50 border-b-2 w-full '>
                                <div className="relative grid grid-cols-[15%_78%] grid-rows-2 ml-3 w-full xl:w-[70%] justify-center xl:justify-normal xl:justify-self-center mt-auto pb-2 mb-2 md:mb-5 text-2xl md:text-5xl font-['BrickSans'] gap-y-1 md:gap-y-3 tracking-wide">
                                    <div className='grid row-span-2 col-span-1 my-auto justify-end mr-[15%]'><HollowText size="text-7xl md:text-9xl">{currentDataset.firstLetter}</HollowText></div>
                                    <div className='grid row-span-1 col-span-1  items-end'>{currentDataset.restOfTitle}</div>
                                    <div className='grid row-span-1 col-span-1 mt-2 items-center'><HollowText size="text-lg md:text-2xl md:text-4xl ">{currentDataset.description}</HollowText></div>
                                    <div className='absolute bg-[#332936] w-[75%] md:w-[78%] xl:w-[70%] h-[35%] bottom-0 md:-bottom-2 left-[18%] xl:right-0 z-[-1]'></div>
                                </div>
                            </div>
                        }

                    </div>

                    {/* --- MIDDLE SPLIT WITH CAROUSEL --- */}
                    {!isMobile && (
                        <div className="middleSplit relative w-[95%] xl:w-[92%] w-full h-[50%] xl:h-[60%] mt-[2%] flex items-center justify-center">

                            {/* 1. The Gameboy SVG Frame */}
                            <SlideShowBox className="w-full h-[90%] absolute z-10 pointer-events-none" style={{
                                clipPath: 'polygon(40px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px), 0 40px)'
                            }} />

                            {/* 2. THE SCREEN (Carousel + Nav Arrows) */}
                            {/* Positioned inside the SVG 'hole' */}
                            <div className="absolute z-20 top-[12%] h-[65%] w-[74%] border-10 border-x-14 border-[#302433] bg-[#0f0f12] overflow-hidden flex items-center justify-center"

                            >

                                {/* Left Nav Arrow (Inside Screen) */}
                                <button onClick={prevSlide} className="absolute left-4 z-50 text-white/70 hover:text-white hover:scale-110 transition-all">
                                    <span className="font-pixelify text-4xl">{'<'}</span>
                                </button>

                                {/* Right Nav Arrow (Inside Screen) */}
                                <button onClick={nextSlide} className="absolute right-4 z-50 text-white/70 hover:text-white hover:scale-110 transition-all">
                                    <span className="font-pixelify text-4xl">{'>'}</span>
                                </button>

                                {/* The 3D Carousel Stack */}
                                <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                                    {slides.map((slide, index) => {
                                        // Calculate distance from current slide (-2, -1, 0, 1, 2)
                                        let offset = index - currentSlide;
                                        if (offset > 2) offset -= slides.length;
                                        if (offset < -2) offset += slides.length;

                                        // Determine styles based on offset
                                        // 0 = Center, 1/-1 = Immediate neighbors, 2/-2 = Outer edges
                                        const isActive = offset === 0;
                                        const absOffset = Math.abs(offset);

                                        // Z-index: Center is highest (20), then 10, then 0
                                        const zIndex = 20 - (absOffset * 10);

                                        // X Translate: Spread them out. 
                                        // 0 -> 0px
                                        // 1 -> 55%
                                        // 2 -> 85%
                                        let translateX = '0%';
                                        if (offset === 1) translateX = '27.5%';
                                        if (offset === -1) translateX = '-27.5%';
                                        if (offset === 2) translateX = '50%';
                                        if (offset === -2) translateX = '-50%';

                                        // Scale: Center 1, neighbors 0.85, outer 0.7
                                        const scale = isActive ? 1 : (absOffset === 1 ? 0.85 : 0.7);

                                        // Opacity for depth
                                        const opacity = isActive ? 1 : (absOffset === 1 ? 0.6 : 0.3);

                                        return (
                                            <img
                                                key={slide.id}
                                                className={`absolute w-[60%] h-auto aspect-video bg-[#2A2A35] transition-all duration-500 ease-in-out border border-white/10 shadow-2xl flex items-center justify-center`}
                                                style={{
                                                    transform: `translateX(${translateX}) scale(${scale})`,
                                                    zIndex: zIndex,
                                                    opacity: opacity,
                                                }}

                                                src={slide.url}
                                                onClick={() => isActive && openModal(slide.url)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 3. PHYSICAL CONTROLS (Purely Cosmetic as requested) */}
                            {/* These sit ON TOP of the SVG frame but outside the screen */}
                            <div className="absolute inset-0 z-30 pointer-events-none">

                                {/* --- Left Control Cluster (D-PAD) --- */}
                                <div className="absolute top-[35%] left-[2%] w-[12%] h-[40%] pointer-events-auto">
                                    <div className="relative w-full h-full">
                                        {/* D-Pad Cross */}
                                        {/* LEFT SIDE: D-PAD with Links */}
                                        <div className="relative w-[35%] h-[70%]">
                                            {/* UP Arrow: EIDOLON */}
                                            <a href="/eidolon" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#a0ff88] rounded-full border-[1.5px] bottom-[25%] left-[122.5%] -translate-x-1/2 cursor-pointer bg-[#a0ff88]/10 hover:bg-[#a0ff88]/30 transition-all shadow-[0_0_10px_rgba(160,255,136,0.2)]'>
                                                <GameboyArrow className="absolute animate-pulse md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#a0ff88] [&_*]:stroke-[#a0ff88]" />
                                                <div className='absolute -top-5 animate-bounce left-1/2 -translate-x-1/2 flex flex-col items-center'>
                                                    <span className='text-[8px] md:text-[10px] font-pixelify tracking-widest text-[#a0ff88] bg-black/60 px-1 rounded border border-[#a0ff88]/30 whitespace-nowrap drop-shadow-md'>
                                                        EIDOLON
                                                    </span>
                                                </div>
                                            </a>

                                            {/* LEFT Arrow: SYZYGY */}
                                            <a href="/syzygy" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#fffa88] rounded-full border-[1.5px] -bottom-[10%] left-[10%] -translate-y-1/2 cursor-pointer bg-[#fffa88]/10 hover:bg-[#fffa88]/30 transition-all shadow-[0_0_10px_rgba(255,250,136,0.2)]'>
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
                                            <a href="/prima" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#88a9ff] rounded-full border-[1.5px] -bottom-[10%] left-[160%] -translate-y-1/2 cursor-pointer bg-[#88a9ff]/10 hover:bg-[#88a9ff]/30 transition-all shadow-[0_0_10px_rgba(136,169,255,0.2)]'>
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
                                            <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#ff8888]/30 rounded-full border-[1.5px] -bottom-[25%] left-[125%] -translate-x-1/2 rotate-[180deg] opacity-50 pointer-events-none'>
                                                <GameboyArrow className="absolute md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#ff8888] [&_*]:stroke-[#ff8888]" />
                                            </div>

                                        </div>

                                        {/* Analog Stick (Below D-pad) */}
                                        <div className="absolute -bottom-[30%] -right-[20%] -translate-x-1/2">
                                            <GameboyGrayButton className="w-12 h-12 opacity-80" />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Right Control Cluster (Buttons) --- */}
                                <div className="absolute top-[35%] right-[2%] w-[12%] h-[40%] pointer-events-auto">
                                    <div className="relative w-full h-full">
                                        {/* ABXY Diamond */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24">
                                            <div className="absolute -bottom-0 left-[60%] -translate-x-1/2 w-8 h-8 border border-[#ff8888]/50 rounded-full flex items-center justify-center text-[#ff8888] font-pixelify">X</div>
                                            <div className="absolute -bottom-[70%] left-[60%] -translate-x-1/2 w-8 h-8 border border-[#a0ff88]/50 rounded-full flex items-center justify-center text-[#a0ff88] font-pixelify">B</div>
                                            <div className="absolute -bottom-[50%] left-[10%] -translate-y-1/2 w-8 h-8 border border-[#88a9ff]/50 rounded-full flex items-center justify-center text-[#88a9ff] font-pixelify">Y</div>
                                            <div className="absolute -bottom-[50%] -right-[10%] -translate-y-1/2 w-8 h-8 border border-[#fffa88]/50 rounded-full flex items-center justify-center text-[#fffa88] font-pixelify">A</div>
                                        </div>

                                        {/* Analog Stick (Below Buttons) */}
                                        <div className="absolute -bottom-[31%] left-[13%] -translate-x-1/2">
                                            <GameboyGrayButton className="w-12 h-12 opacity-80" />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Bottom Center Pagination --- */}
                                <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 flex space-x-4 pointer-events-auto">
                                    {slides.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-[#C084FC] scale-125' : 'bg-white scale-60'}`}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    )}

                    {/* B. MOBILE/TABLET VIEW (Vertical) */}
                    {isMobile && (
                        <div className="middleSplitMobile relative w-full h-[70%] mt-[5%] flex items-center justify-center">

                            {/* ROTATED SVG Frame */}
                            {/* Note: We rotate 90deg. Height/Width classes act on the pre-rotated box, so we size it carefully. */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <SlideShowBox className="absolute h-[50%] md:h-[70%] top-[25%] md:top-[15%] w-[69vh] rotate-90 z-10 pointer-events-none"
                                    style={{
                                        clipPath: `polygon(
                                            ${cutSize} 0, 
                                            calc(100% - ${cutSize}) 0, 
                                            100% ${cutSize}, 
                                            100% calc(100% - ${cutSize}), 
                                            calc(100% - ${cutSize}) 100%, 
                                            ${cutSize} 100%, 
                                            0 calc(100% - ${cutSize}), 
                                            0 ${cutSize}
                                        )`
                                    }} />

                                {/* Vertical Screen & Carousel */}
                                {/* Positioned relative to the viewport center since the SVG is rotated 90deg purely visually */}
                                <div className="absolute z-20 w-[60%] h-[75%] bg-[#0f0f12] overflow-hidden flex flex-col items-center justify-center border-8 top-[5%] border-[#302433]">
                                    <button onClick={prevSlide} className="absolute top-4 z-50 text-white/70 hover:text-white hover:scale-110 transition-all rotate-90"><span className="font-pixelify text-4xl">{'<'}</span></button>
                                    <button onClick={nextSlide} className="absolute bottom-4 z-50 text-white/70 hover:text-white hover:scale-110 transition-all rotate-90"><span className="font-pixelify text-4xl">{'>'}</span></button>

                                    <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[1000px]">
                                        {slides.map((slide, index) => {
                                            let offset = index - currentSlide;
                                            if (offset > 2) offset -= slides.length;
                                            if (offset < -2) offset += slides.length;
                                            const isActive = offset === 0;
                                            const absOffset = Math.abs(offset);
                                            const zIndex = 20 - (absOffset * 10);

                                            // Vertical Translate (Y instead of X)
                                            let translateY = '0%';
                                            if (offset === 1) translateY = '37.5%';
                                            if (offset === -1) translateY = '-37.5%';
                                            if (offset === 2) translateY = '70%';
                                            if (offset === -2) translateY = '-70%';

                                            const scale = isActive ? 1 : (absOffset === 1 ? 0.85 : 0.7);
                                            const opacity = isActive ? 1 : (absOffset === 1 ? 0.6 : 0.3);

                                            return (
                                                <img key={slide.id} className={`absolute w-[90%] h-auto aspect-video bg-[#2A2A35] transition-all duration-500 ease-in-out border border-white/10 shadow-2xl flex items-center justify-center`}
                                                    style={{ transform: `translateY(${translateY}) scale(${scale})`, zIndex, opacity }}
                                                    src={slide.url}
                                                    onClick={() => isActive && openModal(slide.url)}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Controls Overlay (Bottom Aligned Horizontal) */}
                            <div className="absolute bottom-0 h-[20%] w-[65%]  z-30 pointer-events-none">

                                {/* --- Left Control Cluster (D-PAD) --- */}
                                <div className="absolute top-[35%] left-[2%] w-[12%] h-[40%] pointer-events-auto">
                                    <div className="relative w-full h-full">
                                        {/* D-Pad Cross */}
                                        {/* LEFT SIDE: D-PAD with Links */}
                                        <div className="relative w-[55%] h-[70%]">
                                            {/* UP Arrow: EIDOLON */}
                                            <a href="/eidolon" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#a0ff88] rounded-full border-[1.5px] -top-[70%] left-[147.5%] -translate-x-1/2 cursor-pointer bg-[#a0ff88]/10 hover:bg-[#a0ff88]/30 transition-all shadow-[0_0_10px_rgba(160,255,136,0.2)]'>
                                                <GameboyArrow className="absolute animate-pulse md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#a0ff88] [&_*]:stroke-[#a0ff88]" />
                                                <div className='absolute -top-5 animate-bounce left-1/2 -translate-x-1/2 flex flex-col items-center'>
                                                    <span className='text-[8px] md:text-[10px] font-pixelify tracking-widest text-[#a0ff88] bg-black/60 px-1 rounded border border-[#a0ff88]/30 whitespace-nowrap drop-shadow-md'>
                                                        EIDOLON
                                                    </span>
                                                </div>
                                            </a>

                                            {/* LEFT Arrow: SYZYGY */}
                                            <a href="/syzygy" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#fffa88] rounded-full border-[1.5px] bottom-[20%] md:-bottom-[10%] -left-[30%] md:left-[10%] -translate-y-1/2 cursor-pointer bg-[#fffa88]/10 hover:bg-[#fffa88]/30 transition-all shadow-[0_0_10px_rgba(255,250,136,0.2)]'>
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
                                            <a href="/prima" className='group absolute w-5 h-5 md:w-8 md:h-8 border-[#88a9ff] rounded-full border-[1.5px] bottom-[20%] md:-bottom-[10%] left-[200%] md:left-[182.5%] -translate-y-1/2 cursor-pointer bg-[#88a9ff]/10 hover:bg-[#88a9ff]/30 transition-all shadow-[0_0_10px_rgba(136,169,255,0.2)]'>
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
                                            <div className='absolute w-5 h-5 md:w-8 md:h-8 border-[#ff8888]/30 rounded-full border-[1.5px] -bottom-[10%] md:-bottom-[45%] left-[155%] md:left-[150%] -translate-x-1/2 rotate-[180deg] opacity-50 pointer-events-none'>
                                                <GameboyArrow className="absolute md:top-[15%] top-[5%] md:left-[17%] left-[5%] w-4 h-4 md:w-5 md:h-5 mx-auto [&_*]:fill-[#ff8888] [&_*]:stroke-[#ff8888]" />
                                            </div>

                                        </div>

                                        {/* Analog Stick (Below D-pad) */}
                                        <div className="absolute -bottom-0 -right-[240%] md:-right-[200%] -translate-x-1/2">
                                            <GameboyGrayButton className="w-10 h-10 md:w-12 md:h-12 opacity-80" />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Right Control Cluster (Buttons) --- */}
                                <div className="absolute top-[35%] right-[2%] w-[12%] h-[40%] pointer-events-auto">
                                    <div className="relative w-full h-full">
                                        {/* ABXY Diamond */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24">
                                            <div className="absolute top-[20%] md:top-[30%] left-[45%] md:left-[25%] -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 border border-[#ff8888]/50 rounded-full flex items-center justify-center text-xs md:text-base text-[#ff8888] font-pixelify">X</div>
                                            <div className="absolute -top-[25%] md:-top-[40%] left-[45%] md:left-[25%] -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 border border-[#a0ff88]/50 rounded-full flex items-center justify-center text-xs md:text-base text-[#a0ff88] font-pixelify">B</div>
                                            <div className="absolute top-[10%] md:-left-[20%] left-[10%] -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 border border-[#88a9ff]/50 rounded-full flex items-center justify-center text-xs md:text-base text-[#88a9ff] font-pixelify">Y</div>
                                            <div className="absolute top-[10%] md:right-[30%] right-[20%] -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 border border-[#fffa88]/50 rounded-full flex items-center justify-center text-xs md:text-base text-[#fffa88] font-pixelify">A</div>
                                        </div>

                                        {/* Analog Stick (Below Buttons) */}
                                        <div className="absolute -bottom-0 -left-[120%] -translate-x-1/2">
                                            <GameboyGrayButton className="w-10 h-10 md:w-12 md:h-12 opacity-80" />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Bottom Center Pagination --- */}
                                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex space-x-4 pointer-events-auto">
                                    {slides.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-[#C084FC] scale-125' : 'bg-white scale-60'}`}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    )}



                    {/* --- 4. BOTTOM DESCRIPTION SECTION --- */}
                    {/* Displays the text for the current slide */}
                    <div className="w-full flex-grow flex items-start mt-4">
                        <div className="relative w-full xl:w-[95%] text-center">
                            <a href={currentDataset.url} className="font-pixelify text-[#C084FC] text-sm md:text-lg lg:text-xl tracking-wide leading-relaxed animate-pulse mb-2 cursor-pointer">
                                {`> ${currentDataset.accountDetail} <`}
                            </a>
                            <p className="font-pixelify text-white/80 text-sm md:text-lg lg:text-xl tracking-wide leading-relaxed animate-pulse">
                                {` ${currentDataset.pages[currentSlide + 1] || "..."}`}
                            </p>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#C084FC]/50 to-transparent"></div>
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* --- 5. THE ZOOM MODAL --- */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={closeModal}>
                        <div className="relative max-w-[95vw] max-h-[90vh]">
                            <img 
                                src={modalImage} 
                                alt="Zoomed View" 
                                className="w-full h-full object-contain rounded-lg shadow-[0_0_30px_rgba(192,132,252,0.3)] border border-[#C084FC]/30" 
                                onClick={(e) => e.stopPropagation()} // Prevent closing if clicking image itself
                            />
                            <button 
                                className="absolute -top-8 right-[0%] -translate-x-1/2 md:-right-10 text-white hover:text-[#C084FC] font-pixelify text-xl" 
                                onClick={closeModal}
                            >
                                [CLOSE]
                            </button>
                        </div>
                    </div>
                )}
        </main>
    );
};

export default ProjectPage;