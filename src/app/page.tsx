import Image from "next/image";

export default function Home() {
  return (
    <div className={"container lg:mt-56 mx-auto px-5 py-5 flex-wrap"}>
        <div className={"items-center justify-center flex flex-col lg:flex-row "}>
            <div className={"flex flex-col max-w-2xl text-center lg:text-left"}>
                <div className={"font-semibold lg:text-6xl text-2xl"}>
                    Discover the cosmetics that are safe
                </div>
                <div className={"max-w-lg mt-8"}>
                    We help you to understand the ingredients in your cosmetic products
                    and make informed buying decisions
                </div>
                <div>
                    <button
                        className={"self-start bg-black text-white rounded-full h-10 px-5 mt-8 mb-8"}
                    >
                        Start here
                    </button>
                </div>
            </div>
            <div className={"flex"}>
                <Image
                    src={"./homepage_right_image.svg"}
                    width={500}
                    height={500}
                    alt={"Image not found"}
                />
            </div>
        </div>

    </div>
  );
}
