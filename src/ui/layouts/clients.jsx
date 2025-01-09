import React from "react";

import styles from "./clients.module.scss";
import Image from "next/image";

const mappedClients = [
  {
    id: 0,
    src: "/assets/images/client-1.png",
    alt: "client 1",
  },
  {
    id: 1,
    src: "/assets/images/client-2.png",
    alt: "client 2",
  },
  {
    id: 2,
    src: "/assets/images/client-3.png",
    alt: "client 3",
  },
  {
    id: 3,
    src: "/assets/images/client-4.png",
    alt: "client 4",
  },
  {
    id: 4,
    src: "/assets/images/client-5.png",
    alt: "client 5",
  },
  {
    id: 5,
    src: "/assets/images/client-6.png",
    alt: "client 6",
  },
  {
    id: 6,
    src: "/assets/images/client-7.png",
    alt: "client 7",
  },
  {
    id: 7,
    src: "/assets/images/client-8.png",
    alt: "client 8",
  },
];

const Clients = () => {
  return (
    <div className={styles.clientsLogo}>
      {mappedClients.map((clients) => (
        <Image
          width={116}
          height={34}
          key={clients.id}
          alt={clients.alt}
          src={clients.src}
        />
      ))}
    </div>
  );
};

export default Clients;
