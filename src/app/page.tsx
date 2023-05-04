import Image from "next/image";

export default function Home() {
  return (
    <div className={"container mt-56 mx-auto px-5 py-5 flex-wrap"}>
        <div className={"flex justify-between"}>
            <div className={"flex-col flex-auto space-y-28 max-w-2xl"}>
                <div className={"font-semibold text-6xl"}>
                    Discover the cosmetics that are safe
                </div>
                <div className={"max-w-lg"}>
                    We help you to understand the ingredients in your cosmetic products
                    and make informed buying decisions
                </div>
                <button
                    className={"self-start bg-black text-white rounded-full h-10 px-5"}
                >
                    Start here
                </button>
            </div>
            <div>
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
