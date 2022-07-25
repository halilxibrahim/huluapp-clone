import Image from "next/image";

function Header() {


    return (
        <header className="">
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
