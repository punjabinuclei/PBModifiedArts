import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faLocationPin, faDownload } from '@fortawesome/free-solid-svg-icons'

import "../StyleSheets/Card.css"
import cardLogo from "../Assets/MobileVersion/CardLogo.svg"
import cardSvg from "../Assets/MobileVersion/CardSvg.svg"
import backSvg from "../Assets/MobileVersion/BackSvg.svg"
import backLogo from "../Assets/MobileVersion/BackLogo.svg"

// Desktop Version
import cardLogoDesktop from "../Assets/CardLogo.svg"
import cardSvgDesktop from "../Assets/CardVector.svg"
import backSvgDesktop from "../Assets/Card2Vector.svg"
import backLogoDesktop from "../Assets/logoCard2.svg"

const Card = () => {
    const clickHandler = (event) => {
        event.currentTarget.classList.toggle('is-flipped');

        if (event.target.name === 'downloadBrochureButton') {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    return (
        <div >

            <section class="text-gray-600 body-font sm:hidden">
                <div class="container px-5 pt-10 mx-auto">
                    <div class="">
                        <div class="lg:w-1/3">
                            <section class="CardContainer animate__animated animate__fadeIn ">
                                <div class="container mx-auto flex px-6 items-center justify-center flex-col ">

                                    <div class="card__inner  place-items-center" onClick={clickHandler}>
                                        <div class="card__face card__face--front bg-gray-50 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

                                            <div>
                                                <div
                                                    class="mx-auto justify-center items-center flex flex-col  ">


                                                    <img src={cardLogo} alt="img"
                                                        class=" h-auto object-cover  bl-4 bt-4 br-4 pt-10 " />
                                                    <div id="whoobe-1okdg" class="w-full pt-20 justify-start flex flex-col">
                                                        <img src={cardSvg} alt="cardSvg"
                                                            class="w-full md:w-80 pt-14 h-auto object-cover" />
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div class="card__face card__face--back">

                                            <div
                                                class="block border border-gray-200  box mx-auto w-full md:w-80 justify-center items-center flex flex-col mb-10 bg-gray-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">


                                                <img src={backSvg} alt="img" title="img" class="w-full md:w-80  h-auto object-cover" />
                                                <img src={backLogo} alt="" srcset="" />
                                                <div class="w-full justify-start flex flex-col pt-10" >
                                                    <div class="icons mx-auto" >
                                                        <a href="https://www.google.com/maps/dir/21.1892792,72.8397314/pb+modified+arts/@21.1769397,72.8206951,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f492546b21b:0x23998fbe6fcfec61!2m2!1d72.8221104!2d21.1657065" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                            <FontAwesomeIcon className='px-3 fa-2xl' icon={faLocationPin} />
                                                        </a>

                                                        <a href="https://www.facebook.com/profile.php?id=100087348375046" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                            <FontAwesomeIcon className='px-3 fa-2xl' icon={faFacebookSquare} />
                                                        </a>

                                                        <a href="https://www.instagram.com/pb_cnc_design/" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                            <FontAwesomeIcon className='px-3 fa-2xl' icon={faInstagramSquare} />
                                                        </a>

                                                        <a href="https://api.whatsapp.com/send?phone=919408728404" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                            <FontAwesomeIcon className='px-3 fa-2xl' icon={faWhatsappSquare} />
                                                        </a>

                                                    </div>
                                                    <button
                                                        class="bg-stone-700  text-gray-100 py-2 px-6  inline-flex items-center mx-auto mt-7 downloadBrochureButton" name="downloadBrochureButton" onClick={(event) => event.stopPropagation()}
                                                    >
                                                        <span>Products Brochure <FontAwesomeIcon className='px-2 downloadBrochureButton' icon={faDownload} /></span>
                                                    </button>
                                                    <div class="mx-auto pt-6 pb-4">
                                                        <a href="https://drive.google.com/file/d/1kt0yiSUHPjxS0SVjYYPKeOTFJZrp2Y6W/view?usp=sharing" onClick={(event) => event.stopPropagation()}>www.pbmodifiedarts.in</a>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>


            {/* -------------------------------------------------Desktop Version------------------------------ */}
            {/* *******************%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&*********************************** */}
            {/* jfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkds */}





            <section class="CardContainer animate__animated animate__fadeIn hidden sm:block">
                <div class="container mx-auto flex px-5 items-center justify-center flex-col ">

                    <div class="card w-80">
                        <div class="card__inner h-screen place-items-center" onClick={clickHandler}>
                            <div class="card__face card__face--front">

                                <div>
                                    <div
                                        class="block border border-gray-200 mt-8 box mx-auto w-80 justify-center items-center flex flex-col mb-20 bg-gray-50 ">


                                        <img src={cardLogoDesktop} alt="img" title="img"
                                            class=" h-auto object-cover  b-4 pt-10" />
                                        <div class="w-full pt-20 justify-start flex flex-col">
                                            <img src={cardSvgDesktop} alt="" srcset=""
                                                class="w-full md:w-80 pt-5 h-auto object-cover " />
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div class="card__face card__face--back">

                                <div
                                    class="block border border-gray-200 mt-8 box mx-auto w-full md:w-80 justify-center items-center flex flex-col mb-5 bg-gray-50 ">


                                    <img src={backSvgDesktop} alt="img" title="img" class="object-cover" />
                                    <img src={backLogoDesktop} alt="" srcset="" class=" " />
                                    <div class="w-full justify-start flex flex-col pt-10">
                                        <div class="icons mx-auto" >
                                            <a href="https://www.google.com/maps/dir/21.1892792,72.8397314/pb+modified+arts/@21.1769397,72.8206951,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f492546b21b:0x23998fbe6fcfec61!2m2!1d72.8221104!2d21.1657065" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                <FontAwesomeIcon className='px-3 fa-2xl' icon={faLocationPin} />
                                            </a>

                                            <a href="https://www.facebook.com/profile.php?id=100087348375046" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                <FontAwesomeIcon className='px-3 fa-2xl' icon={faFacebookSquare} />
                                            </a>

                                            <a href="https://www.instagram.com/pb_cnc_design/" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                <FontAwesomeIcon className='px-3 fa-2xl' icon={faInstagramSquare} />
                                            </a>

                                            <a href="https://api.whatsapp.com/send?phone=919408728404" target="_blank" onClick={(event) => event.stopPropagation()} >
                                                <FontAwesomeIcon className='px-3 fa-2xl' icon={faWhatsappSquare} />
                                            </a>

                                        </div>
                                        <button
                                            class="bg-stone-700  text-gray-100 py-2 px-6  inline-flex items-center mx-auto mt-7 downloadBrochureButton" name="downloadBrochureButton" onClick={(event) => event.stopPropagation()}
                                        >
                                            <span>Products Brochure <FontAwesomeIcon className='px-2 downloadBrochureButton' icon={faDownload} /></span>
                                        </button>
                                        <div class="mx-auto pt-6 pb-2">
                                            <a href="https://drive.google.com/file/d/1kt0yiSUHPjxS0SVjYYPKeOTFJZrp2Y6W/view?usp=sharing" onClick={(event) => event.stopPropagation()}>www.pbmodifiedarts.in</a>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>



                </div>
            </section>







        </div>
    )
}

export default Card