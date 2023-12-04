/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
export default function Hero() {
  return (
    <div className=" mb-16  mt-[108px] items-start justify-start shadow-md pb-40  ">
      <div className="flex flex-row  mx-20  mt-5  ">
        <div className=" w-1/2 mt-10 flex flex-col space-y-20 pt-9 gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl py-4 px-2 justify-start items-start pr-8">
              Great{" "}
              <span
                style={{
                  background: `linear-gradient(to bottom,rgba(210, 28, 159, 1), rgba(202,67, 150, 0))`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                Product
              </span>{" "}
              is <span className=" font-bold ">built by great</span>{" "}
              <span
                style={{
                  background: `linear-gradient(to right, rgba(200, 28, 159,1), rgba(190, 67, 160, 1))`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                teams
              </span>{" "}
            </h1>

            <h1 className="font-inter text-xl pr-12 pl-3">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </h1>
          </div>
          <div></div>

          <div className="  ">
            <button className=" h-12 px-3 mx-3 text-xl rounded-md  bg-blue-700 text-white font-semibold mt-auto">
              Let's get started
            </button>
          </div>
        </div>

        <div className="  w-1/2">
          <Image
            src="/images/hero.png" // Path to the image in the public folder
            alt="Hero Image"
            width={1900}
            height={496}
            className=" max-w-[85%] "
          />
        </div>
      </div>
    </div>
  );
}
