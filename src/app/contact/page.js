"use client"
import Image from "next/image";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";

const ContactPage = () => {
    console.log("bijoy");       //serverside rendering if not paired with "use client"
    
    const [isClient,setIsClient] = useState(false);
    /**
     * Causes hydartion problem as the item generated in server side is different than client side
     */
    let a = Math.random();
    // console.log(a); 

    //hydartion problems are solved by using Hooks like use State and rendering variable inside useEffect
    
    useEffect(()=>{
        setIsClient(true);
    },[])

    return (
        <div className={styles.container}>
            {isClient && a}    
            {/* Error: Text content does not match server-rendered HTML. */}
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;