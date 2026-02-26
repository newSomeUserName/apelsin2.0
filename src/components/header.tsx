import Image from "next/image"

export function Header()
{
    return <div className="w-full">
        <h1 className="w-full flex justify-center">
            <Image src={"./logo.jpg"} width={300} height={90} alt="logo" className="p-2 bg-white rounded-2xl"></Image>
        </h1>
    </div>
}