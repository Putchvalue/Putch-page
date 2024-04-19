import HeaderBackground from '../assets/header-background.svg';
import HeaderLogo from '../assets/header-logo.svg';
import {Link} from "react-scroll";

const Header = () => {
    return (
        <header className="fixed w-full items-center">
            <nav>
                <div className="">
                    <div className="flex items-center justify-between w-full">
                        <img className="absolute w-full" src={HeaderBackground} alt="Header Background"/>
                        <div className="flex items-center pl-6">
                            <img className="z-10 pt-3" src={HeaderLogo} alt="App Logo"/>
                        </div>
                        <div className="flex flex-row z-10 p-6">
                            <button
                                className="cursor-pointer tracking-wider mx-4 font-bold text-md capitalize hover:text-purple-400 hover:transform hover:scale-110 transition-transform">
                                <Link
                                    to="TeamValue"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    팀 가치
                                </Link>
                            </button>
                            <button
                                className="cursor-pointer tracking-wider mx-4 font-bold text-md capitalize hover:text-purple-400 hover:transform hover:scale-110 transition-transform">
                                <Link
                                    to="ServiceIntroduction"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    서비스 소개
                                </Link>
                            </button>
                            <button
                                className="cursor-pointer tracking-wider mx-4 font-bold text-md capitalize hover:text-purple-400 hover:transform hover:scale-110 transition-transform">
                                <Link
                                    to="TeamMember"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    팀원
                                </Link>
                            </button>
                            <button
                                className="cursor-pointer tracking-wider mx-4 font-bold text-md capitalize hover:text-purple-400 hover:transform hover:scale-110 transition-transform">
                                <Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    연락처
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;