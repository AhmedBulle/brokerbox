import React from "react"
import style from "@/styles/footer.module.css";
import Image from "next/image";


const Footer = () => {
return(
    <div className={style.footer}>
        <div className={style.top}>
        <div className={style.wrapper}>
        <Image src="/yow.png" alt="error" width={127} height={29} />
        <Image src="/all.png" alt="error" width={127} height={29} />
        </div>
        <div className={style.bottom} >
        <p>© 2023 Brokerbox. All rights reserved.</p>
        </div>
        </div>
        </div>
        
   
)


}
export default Footer;