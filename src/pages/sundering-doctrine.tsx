import Image from "next/image"

export default function Home() {
    return <>
        <h1 className="m-3 dark:text-white text-xl">Sundering Doctrine</h1>
        <h2 className="m-3 dark:text-white text-xl">symbols</h2>
        <img src="/images/sd/vow-of-the-disciple-symbols.jpg" alt="" width={1000}/>        
        
        <h2 className="m-3 dark:text-white text-xl">encouter 1</h2>
        <img src="/images/sd/IMG_5098.PNG" alt="" width={1000}/>        
        <h2 className="m-3 dark:text-white text-xl">encouter 2</h2>
        <h2 className="m-3 dark:text-white text-xl">encouter 3</h2>
        <img src="/images/sd/IMG_5097.PNG" alt="" width={1000}/>
    </>
}