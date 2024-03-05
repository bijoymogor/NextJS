import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <div>About Page</div>
            <Image src="/about.png" alt="" width={500} height={500}/>
            <Image src="https://images.pexels.com/photos/20432992/pexels-photo-20432992/free-photo-of-funchal-at-madeira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={500} height={500}/>
        </> 
    );
}