import {
    BadgeCheckIcon,
    CollectionIcon,
    MomeIcon,
    LightningBoltIcon,
    SearchIcon,
    userIcon,
    HomeIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";



function Header() {


    return (
        <header className="">
            <div>
                <HeaderItem title='ANA SAYFA' Icon={HomeIcon} />
            </div>
            <h1>Burası header</h1>
            <Image
              className="object-contain"
              src="/icon.png"
              width={200} 
              height={100} />
        </header>
    )
}

export default Header;
