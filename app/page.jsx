import Image from "next/image";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
];

// bg-gradient-to-b text-[#CBD5E1] from-[#CBD5E1] via-[#28AAE1] to-[#2887C3] bg-[length:100%_200%]

export default function Home() {
  return (
    <>
      <div className="w-full h-full relative bg-gradient-to-b from-[#ffffff] via-[#fffb7b] to-[#fff958]">
        <div className="flex relative bg-transparent flex-col items-center justify-center w-full h-screen overflow-hidden">
          <h1 className="text-[5em] font-bold text-center w-screen">
            HELLO BEANIEEEE!
          </h1>
          <label className="relative">
            <Image
              src={"/images/beanieAndMe.jpg"}
              alt="Beaniesarry Logo"
              width={500}
              height={500}
              className="rounded-full object-cover w-100 h-100 outline-amber-300 outline-2 shadow-2xl"
              priority
            />
          </label>

          <div className="flex flex-col items-center mt-4">
            <p className="text-lg font-bold">Welcome to Beaniesarry!</p>
            <p className="text-lg">
              This is a website dedicated for you{" "}
              <span className="text-red-600">my loveee</span>
            </p>
            <label className="text-[0.70em] absolute bottom-10">
              scroll down pleaseee
            </label>
          </div>
        </div>

        {/* THIS IS THE END OF SCREEN 1 AND START OF SCREEN 2 */}
        <div className="flex relative bg-transparent flex-col items-center justify-center w-full h-screen overflow-hidden">
          <div>
            <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-1 p-4 w-full h-full items-center justify-center">
              {images.map((src, index) => (
                <div className="" key={index}>
                  <Image
                    src={src}
                    alt={`Collage ${index + 1}`}
                    width={500}
                    height={500}
                    className="object-cover rounded-lg lg:w-75 lg:h-75 sm:w-50 sm:h-50"
                  />
                </div>
              ))}
            </div>
          </div>
          <h2 className="bg-amber-300 text-[4em]/18 font-bold text-red-700 text-center absolute border-5 border-white w-75 h-75 rounded-lg">
            <div className="mt-11">I LOVE </div>
            <div className="text-[5rem]/15">A L L</div> <div>OF YOU </div>
          </h2>
          <footer className="absolute bottom-0"> 05.23.2025 </footer>
        </div>
        {/* THIS IS THE END OF SCREEN 2 AND START OF SCREEN 3 */}
        {/* <div className="flex relative bg-transparent flex-col items-center justify-center w-full h-screen overflow-hidden"></div> */}
        {/* THIS IS THE END OF SCREEN 3 AND START OF SCREEN 4 */}
        {/* <div className="flex relative bg-transparent flex-col items-center justify-center w-full h-screen overflow-hidden"></div> */}
        {/* THIS IS THE END OF SCREEN 4 AND START OF SCREEN 5 */}
        {/* <div className="flex relative bg-transparent flex-col items-center justify-center w-full h-screen overflow-hidden"></div> */}
        {/* THIS IS THE END OF SCREEN 5 AND START OF SCREEN 6 */}
        <footer className="flex flex-col justify-center items-center bg-red-700">
          <span className="text-white font-bold w-screen text-center">
            PAGE STILL IN CONSTRUCTION
          </span>
          <span className="w-screen text-center text-sm text-white">please come again next time!</span>
        </footer>
      </div>
    </>
  );
}
