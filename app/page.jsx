import Image from "next/image";

// bg-gradient-to-b text-[#CBD5E1] from-[#CBD5E1] via-[#28AAE1] to-[#2887C3] bg-[length:100%_200%]

export default function Home() {
  return (
    <>
      <div className="w-full h-full relative bg-black">
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-400 overflow-hidden">
          <h1 className="text-[5em] font-bold text-center w-screen">
            HELLO BEANIEEEE!
          </h1>
          <Image
            src="/public/images/beanieAndMe.jpg"
            alt="Beaniesarry Logo"
            width={500}
            height={500}
            // className="rounded-full object-cover"
          />
          <div className="flex flex-col items-center mt-4">
            <p className="text-lg font-bold">Welcome to Beaniesarry!</p>
            <p className="text-lg">
              This is a website dedicated for you
              <span className="text-red-600"> my loveee</span>
            </p>
            <label className="text-[0.70em]">scroll down pleaseee</label>
          </div>
        </div>
        {/* THIS IS THE END OF SCREEN 1 AND START OF SCREEN 2 */}
        <div className="w-full h-screen bg-blue-100 overflow-hidden"></div>
        <div className="w-full h-screen bg-orange-100 overflow-hidden"></div>
        <div className="w-full h-screen bg-yellow-100 overflow-hidden"></div>
        <div className="w-full h-screen bg-red-100 overflow-hidden"></div>
      </div>
    </>
  );
}
