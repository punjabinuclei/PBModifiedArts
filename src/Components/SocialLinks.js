import React from 'react'
import "../StyleSheets/sociallinks.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faPinterest, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationPin, faMailBulk, faFileDownload } from '@fortawesome/free-solid-svg-icons'


const SocialLinks = () => {
    return (
        <div className='pr-4'>

            <ul id="social-sidebar">
                <li>
                <a className='twitter' href="https://www.google.com/maps/dir/21.1892792,72.8397314/pb+modified+arts/@21.1769397,72.8206951,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f492546b21b:0x23998fbe6fcfec61!2m2!1d72.8221104!2d21.1657065" target="_blank" onClick={(event) => event.stopPropagation()}>
                <FontAwesomeIcon className='px-3 fa-md' icon={faLocationPin} /> <span>FindMe</span>
                </a>
                </li>
                <li>
                    <a class="entypo-facebook"  href="https://www.facebook.com/profile.php?id=100087348375046" target="_blank" onClick={(event) => event.stopPropagation()}><span>Facebook</span></a>
                </li>
                <li>
                <a className='gplus' href='https://in.pinterest.com/pbmodifiedarts/' target="_blank">
                    <FontAwesomeIcon className='px-3 fa-md' icon={faPinterest} /> <span>Pinterest</span>
                </a>    
                </li>
                <li>
                <a className='dribbble' href="https://api.whatsapp.com/send?phone=919408728404" target="_blank" onClick={(event) => event.stopPropagation()} >
                    <FontAwesomeIcon className='px-3 fa-md' icon={faWhatsapp} /> <span>Whatsapp</span>
                </a>
                </li>
                <li>
                    <a class="dropbox" href="https://www.instagram.com/pb_cnc_design/" target="_blank" onClick={(event) => event.stopPropagation()}>
                    <FontAwesomeIcon className='px-3 fa-md' icon={faInstagram} /> <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a class="github" href="https://mail.google.com/mail/?view=cm&fs=1&to=pbmodifiedarts@gmail.com" target="_blank" > 
                    <FontAwesomeIcon className='px-3 fa-md' icon={faMailBulk} /> <span>Mail</span>
                    </a>
                </li>
                <li>
                    <a class="evernote" href="https://drive.google.com/file/d/1kt0yiSUHPjxS0SVjYYPKeOTFJZrp2Y6W/view" target="_blank" >
                    <FontAwesomeIcon className='px-3 fa-md' icon={faFileDownload} /> <span>DownloadBrochure</span>
                    </a>
                </li>
            </ul>


        </div>
    )
}

export default SocialLinks