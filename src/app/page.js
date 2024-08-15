import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiHackthebox, SiTryhackme } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-64 p-2.5 border-2 border-white border-solid rounded text-center">
        <div className="mx-auto mb-4 w-20 h-20">
          <div className="rounded-full overflow-hidden w-full h-full">
            <Image src="/avatar.jpg" width={125} height={125} alt="seed" />
          </div>
        </div>
        <div className="text-sm p-4">
          <span className="text-rose-500 ">[seed@shells]</span>
          <br></br>
          Practicing Cybersecurity and Bug Bounty!
        </div>
        <div className="flex mx-6 my-6">
          <a
            href="https://github.com/seed1337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="mx-2" />
          </a>
          <a
            href="https://twitter.com/_erg0sum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} className="mx-2" />
          </a>
          <a
            href="https://app.hackthebox.com/users/1069963"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiHackthebox size={30} className="mx-2" />
          </a>
          <a
            href="https://tryhackme.com/p/seed1337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTryhackme size={30} className="mx-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
