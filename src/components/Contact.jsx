import {
	FaInstagram,
	FaTwitch,
	FaGithub,
	FaTwitter,
	FaDiscord,
} from "react-icons/fa";
		
const Contact = () => {
	return (
		<div className="font-sen px-3" id="contact">
			<p className="text-3xl font-bold text-white">Contact me</p>
			<div className="my-8 flex flex-row justify-center gap-x-4">
				<a href="https://github.com/underscorelior" target="_blank" rel="noopener noreferrer" aria-label="github" className="rounded-lg border-2 border-cb bg-[#333] p-2 text-2xl text-white hover:border-white" >
					<FaGithub />
				</a>
						
				<a href="https://twitter.com/underscorelior" target="_blank" rel="noopener noreferrer" aria-label="twitter" className="rounded-lg border-2 border-cb bg-[#1DA1F2] p-2 text-2xl text-white hover:border-white">
					<FaTwitter />
				</a>
						
				<a href="https://twitch.tv/underscorelior" target="_blank" rel="noopener noreferrer" aria-label="twitch" className="rounded-lg border-2 border-cb bg-purple-600 p-2 text-2xl text-white hover:border-white">
					<FaTwitch />
				</a>
				
				<a href="https://discord.gg/AZKDdeFQE3" target="_blank" rel="noopener noreferrer" aria-label="discord server" className="rounded-lg border-2 border-cb bg-[#5865F2] p-2 text-2xl text-white hover:border-white">
					<FaDiscord />
				</a>
		
				<a href="https://www.instagram.com/_liorp/" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="rounded-lg border-2 border-cb bg-[#C13584] p-2 text-2xl text-white hover:border-white">
					<FaInstagram />
				</a>	
			</div>
		</div>
	);
};
	
export default Contact;
	