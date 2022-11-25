import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaEnvelope } from 'react-icons/fa'

export function Footer(){
  return (
  	<footer>
			<div className="flex justify-center h-24 items-center gap-12 text-black dark:text-white">
				<SiLinkedin size={24} className="cursor-pointer" />
				<SiGithub size={24} className="cursor-pointer" />
				<FaEnvelope size={24} className="cursor-pointer" />
				<SiWhatsapp size={24} className="cursor-pointer" />
			</div>
		</footer>
    )
}