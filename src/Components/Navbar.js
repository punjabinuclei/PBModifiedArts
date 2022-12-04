import React from 'react'
import navLogo from '../Assets/MobileVersion/NavLogo.svg'
import footerBarCode from "../Assets/MobileVersion/FooterBarCode.svg"
import navLogoBig from "../Assets/navLogo.svg"
import barCodeBig from "../Assets/nav_QR.svg"


const Navbar = () => {
    return (
        <div>
            <header class="text-gray-600 body-font sm:hidden ">
                <div class="container flex flex-wrap  items-center mt-7">
                    <a className="flex title-font font-medium items-center p-4" href='https://pbandc.netlify.app/' target="_blank">
                        <img src={navLogo} className=" mr-auto" alt="navLogo" />
                    </a>

                    <a className="inline-flex items-center ml-auto p-4" href='https://api.whatsapp.com/send?phone=919408728404'>
                        <img src={footerBarCode} className="ml-auto" alt="footerBarCode" />

                    </a>
                </div>
            </header>

{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
{/* -----------------------------------------------Desktop Version------------------------------------------------ */}
{/* ----------------------------------------------------------------------------------------------------------------- */}
{/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}


            <header class="text-gray-600 body-font hidden sm:block ">
                <div class="flex flex-wrap  items-center mt-5 w-4/5 mx-auto pt-4">
                    <a className="flex title-font font-medium items-center  mr-auto" href='https://pbandc.netlify.app/' target="_blank">
                        <img src={navLogoBig} className=" mr-auto" alt="navLogo" />
                    </a>

                    <a className="inline-flex items-center ml-auto" href='https://api.whatsapp.com/send?phone=919408728404' target="_blank">
                        <img src={barCodeBig} className="ml-auto" alt="footerBarCode" />

                    </a>
                </div>
            </header>


        </div>
    )
}

export default Navbar