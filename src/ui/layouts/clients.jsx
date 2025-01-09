import React from 'react';

import styles from "./clients.module.scss";
import Image from "next/image";

const mappedClients = [
    {
        id: 0,
        src: "/assets/images/client-1.png",
        alt: "client"
    },
    {
        id: 1,
        src: "/assets/images/client-2.png",
        alt: "client"
    },
    {
        id: 2,
        src: "/assets/images/client-3.png",
        alt: "client"
    },    
    {
        id: 3,
        src: "/assets/images/client-4.png",
        alt: "client"
    }, 
    {
        id: 4,
        src: "/assets/images/client-5.png",
        alt: "client"
    },    
    {
        id: 5,
        src: "/assets/images/client-6.png",
        alt: "client"
    },  
]

const clients = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.clientsLogo}>
                {mappedClients.map((clients) => (
                    <Image 
                        width={110}
                        height={42}
                        key={clients.id}
                        alt={clients.alt}
                        src={clients.src}                      
                    />
                ))}
            </div>
        </div>
    );
};

export default clients;