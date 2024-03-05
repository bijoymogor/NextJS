"use client"
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
    console.log("bijoy");       //serverside rendering if not paired with "use client"
    
    /**
     * Causes hydartion problem as the item generated in server side is different than client side
     */
    let a = Math.random();
    console.log(a); 
    
    
    return (
        <div className={styles.container}>
            {a}    
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