import React from "react";
import MovingComponent from "react-moving-text";
const stringg = "A note /from the /developers...";
const Letters = stringg.split("/");
// const Letters = ["a", "b", "c", "d"];
const AboutUs = () => {
  return (
    <div className="flex-col max-h-screen sm:flex-row sm:flex ">
      <section className="bg-[#770099]  sm:w-1/4 justify-center flex">
        <div className=" h-fit my-auto text-center">
          <p className="sm:text-5xl text-3xl font-mono p-7 sm:p-12 sm:border-2 border-gray-500 text-gray-50 sm:-rotate-90 text-center">
            {Letters.map((letter, index) => (
              <MovingComponent
                type="slideInFromTop"
                duration="4000ms"
                delay={`${index * 400}ms`}
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="none"
              >
                {letter}
              </MovingComponent>
            ))}
          </p>
        </div>
      </section>
      <section class="text-gray-200 sm:w-3/4 sm:h-screen bg-slate-950 body-font">
        <div class="container px-0 py-12">
          <div class="sm:w-[60vw] mx-12 sm:mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg">
              Hey everyone! 🚀 When the covid lockdown hit, we dove into the
              world of this famous online game - skribbl. It was a blast, but
              there was just one thing missing - the full-on interaction! We
              found ourselves creating meeting links, herding everyone to join,
              switching tabs like crazy between the meeting and skribbl... you
              get the drill. It was a bit of a marathon! 😅 <br /> <br /> But
              then a lightbulb moment struck! Why wait for skribbl to drop a new
              feature when we had all the skills needed to create something
              amazing? So, we rolled up our sleeves, burned the midnight oil for
              months, and built something special from scratch. <br /> <br />{" "}
              Introducing... drumroll ... Pictionary Hangout! 🎨✨ We've spiced
              up your skribbl experience, added the talk-and-see-each-other
              magic, and made it all hassle-free. We poured our hearts into
              this, and we're excited to share it with you. Got questions,
              suggestions, or just wanna give us a virtual high-five? Hit us up!
            </p>
            <div className="flex w-full justify-between sm:px-12">
              <div>
                <span class="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-2"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Pranay Parikh
                </h2>
                <p class="text-gray-500">The Frontend Guy</p>
              </div>{" "}
              <div>
                {" "}
                <span class="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-2"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Harsh Vardhan Jain
                </h2>
                <p class="text-gray-500">The Backend Guy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
