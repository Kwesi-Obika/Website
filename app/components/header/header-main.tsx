'use client'

import Image from "next/image";
import Link from "next/link";

export default function Header({pageSlug="home"}) {    
    function sayHello(e: any){
        e.preventDefault();
        let header = document.getElementById('header')
        let box = document.getElementById("big-box")
        box?.classList.add('fixed')
        //box?.classList.remove('top-[-500px]')
        box?.classList.replace('top-[-800px]', 'top-0')
        header?.classList.replace("top-0", "top-[-177px]")
        box?.classList.replace('absolute','fixed')
    }

    function sayGoodbye(e: any){
        e.preventDefault();
        let header = document.getElementById('header')
        let box = document.getElementById("big-box")
        header?.classList.replace("top-[-177px]", "top-0")
        box?.classList.replace('top-0', 'top-[-800px]')
        box?.classList.replace('fixed','absolute')
    }
    return (
        <div className="w-full">
            <div 
                id = "header"
                className = {
                    "relative " +
                    "header " +
                    "bg-[#173b27] " +
                    "top-0 " +
                    "left-0 " +
                    "w-full " +
                    "flex " +
                    "flex-col " +
                    "justify-center " +
                    "items-center " +
                    "shadow-xl " +
                    "transition-[top] ease-in-out delay-150 duration-500 " +
                    "z-50 " +
                    pageSlug
                }
            >
                {/* hello {pageSlug} */}
                <div className="flex flex-col justify-center items-center h-[11rem]">
                    <Link href="/" className="p-3">
                        {/* <Image
                            className="dark:invert"
                            src="/OOD-logo-text.png"
                            alt="Object Oriented Development logo"
                            width={90}
                            height={90}
                        /> */}
                        <Image
                            className="invert"
                            src="/objectLogoFull.png"
                            alt="cube with three arrows circling it"
                            width={130}
                            height={130}
                        />
                    </Link>

                    <p className="font-ibm text-xs text-[#fefee3]">
                        <b>Empowering <i>You</i> with Innovative Tech Solutions.</b>
                    </p>
                    <div className="button-box flex flex-row mt-3">
                        <div className="button search h-6 w-10 mx-10 items-center">
                            <svg className="fill-[#fefee3] h-6 w-10">
                                <path d="M10 18.5c-4.69 0-8.5-3.81-8.5-8.5S5.31 1.5 10 1.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"></path><path d="M21.25 22c-.18 0-.36-.07-.51-.2l-6-5.5a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l6 5.5c.31.28.33.75.05 1.06a.71.71 0 0 1-.55.25"></path>
                            </svg>
                        </div>
                        <div className="button call-us h-6 w-10 mx-10">
                            <a href = "tel:+17204929118">
                                <svg className="fill-[#fefee3] h-6 w-10">    
                                    <path d="M16.8944 22.0048C18.6302 22.0048 19.8302 21.5259 20.8863 20.3733C20.9585 20.2919 21.0216 20.2106 21.0856 20.1424C21.7085 19.4556 22 18.7706 22 18.1244C22 17.4155 21.6019 16.7514 20.7467 16.1691L17.7284 14.0775C16.8339 13.4632 15.7887 13.3815 14.8945 14.2543L14.1221 15.0225C13.8877 15.257 13.6611 15.2816 13.4048 15.1326C12.8659 14.8017 11.7281 13.8397 10.8983 13.0141C10.0111 12.131 9.27294 11.2918 8.86303 10.6001C8.71408 10.3387 8.73872 10.1171 8.97317 9.88269L9.75054 9.1012C10.6233 8.22018 10.5416 7.16171 9.91819 6.2714L7.83982 3.26218C7.24424 2.4029 6.58428 2.00889 5.87128 1.99565C5.23426 1.9824 4.54512 2.29132 3.86237 2.91008C3.781 2.9823 3.71288 3.0504 3.6356 3.11852C2.48716 4.15726 2 5.36639 2 7.08484C2 10.0183 3.85984 13.5883 7.14433 16.8646C10.4073 20.1235 13.961 22.0048 16.8944 22.0048ZM16.9035 20.5845C14.2572 20.6211 10.9019 18.604 8.1971 15.8992C5.46987 13.1902 3.37454 9.7303 3.42027 7.0798C3.43856 5.92869 3.83612 4.93344 4.66004 4.19184C4.72311 4.13791 4.77704 4.09313 4.84012 4.03917C5.18324 3.73264 5.55376 3.56314 5.86401 3.56314C6.1802 3.56314 6.45758 3.70203 6.66776 4.02234L8.68214 7.03661C8.92201 7.38977 8.95487 7.78497 8.57067 8.15591L7.68633 9.03611C7.02453 9.70299 7.05791 10.5444 7.53421 11.2043C8.07676 11.9703 9.0671 13.1046 9.94297 13.9704C10.8138 14.8494 12.0386 15.923 12.8004 16.4706C13.4645 16.9419 14.3018 16.9803 14.9636 16.3093L15.8398 15.425C16.2199 15.054 16.615 15.0828 16.9723 15.3227L19.9774 17.337C20.3069 17.5472 20.4325 17.8154 20.4325 18.1317C20.4325 18.4593 20.2763 18.8216 19.9524 19.1688C19.9076 19.2319 19.8669 19.2817 19.813 19.3356C19.0673 20.1728 18.0587 20.5663 16.9035 20.5845Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="button shop h-6 w-10 mx-10">
                            <svg className="fill-[#fefee3] h-6 w-10">    
                                <path d="M9 22.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3M9 18c-.83 0-1.5.67-1.5 1.5S8.17 21 9 21s1.5-.67 1.5-1.5S9.83 18 9 18m10 4.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m0-4.5c-.83 0-1.5.67-1.5 1.5S18.17 21 19 21s1.5-.67 1.5-1.5S19.83 18 19 18"></path><path d="M18.75 18h-11c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25h11.2c.12 0 .22-.08.24-.2l1.28-5.78c.08-.37-.01-.76-.25-1.05S19.64 6 19.26 6H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.26c.84 0 1.62.38 2.14 1.03.53.65.72 1.5.54 2.32l-1.28 5.78c-.18.81-.88 1.37-1.71 1.37H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h11c.41 0 .75.34.75.75s-.34.75-.75.75"></path><path d="M7.25 15c-.34 0-.64-.23-.73-.57L3.9 3.95A1.25 1.25 0 0 0 2.69 3h-.94C1.34 3 1 2.66 1 2.25s.34-.75.75-.75h.94c1.26 0 2.36.86 2.67 2.08l2.62 10.49a.748.748 0 0 1-.73.93"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-center" onClick={sayHello}>
                        <span className="border-[#fefee3] border-b-2 w-16 p-1"></span>
                        <span className="border-[#fefee3] border-b-2 w-12 p-1"></span>
                        <span className="border-[#fefee3] border-b-2 w-8 p-1"></span>
                    </div>  
                </div>
                {/* <div className="tagline flex flex-col font-ibm text-sm">
                    <p>
                        Empowering <i>You</i> with Innovative, Energy Efficient Tech Solutions.
                    </p>
                    
                </div> */}
            </div>
            <div id="big-box" className="w-full bg-[#fefee3] h-[100vh] flex flex-col items-center justify-center overscroll-none top-[-800px] transition-[top] ease-in-out delay-250 duration-1000 z-20 absolute">
                <Link href="/" className="p-3">
                    <Image
                        className=""
                        src="/objectLogoFull.png"
                        alt="cube with three arrows circling it"
                        width={130}
                        height={130}
                    />
                </Link>
                <nav className="desktop">
                        <div className = "heading-menu gap-12 font-heading text-3xl">
                            <li>
                                <Link className = "hover:text-white" href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/workshops">Workshops</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>	
                                <Link href="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/policy">Policies</Link>
                            </li>
                            <li>
                                <Link href="/docs">Docs</Link>
                            </li>
                        </div>
                    </nav>
                    <div className="flex flex-col items-center bottom-0 mt-20" onClick={sayGoodbye}>
                        <span className="border-[#173b27] border-b-2 w-8 p-1"></span>
                        <span className="border-[#173b27] border-b-2 w-12 p-1"></span>
                        <span className="border-[#173b27] border-b-2 w-16 p-1"></span>
                    </div>
            </div>
        </div>    
    );
}

