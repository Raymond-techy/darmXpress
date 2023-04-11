import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/background1.png";
const FramerRef = () => {
  return (
    <div>
      <section className="bg-about bg-cover bg-no-repeat py-28">
        <div className="container mx-auto px-4 md:px-0 overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse items-center md:justify-between lg:px-28 gap-14">
            <div className="md:w-1/2 flex flex-col gap-10">
              {/* <HeadTitle title="Chef's Word" subtitle="What We Believe In" /> */}

              <motion.article
                initial={{ marginTop: "100px" }}
                whileInView={{ marginTop: "0" }}
                viewport={{ once: true }}
                className="font-comorant">
                <h4 className="text-white font-2xl mb-2 font-bold">
                  Chef's World
                </h4>
                {/* <Icon /> */}
                <h3 className="text-primary text-5xl mt-4 tracking-[0.03em] font-semibold">
                  What we Believe In
                </h3>
              </motion.article>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                variants={{ once: true }}
                transition={{ duration: 0.7 }}
                className="leading-[170%]">
                <svg
                  className="inline"
                  width="47"
                  height="41"
                  viewBox="0 0 47 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.9137 23.3571C15.3163 23.3571 17.2183 24.1592 18.6198 25.7632C20.1214 27.2669 20.8722 29.2719 20.8722 31.7782C20.8722 34.485 19.9712 36.6404 18.1693 38.2444C16.4675 39.7481 14.115 40.5 11.1118 40.5C7.60809 40.5 4.85517 39.1466 2.85304 36.4399C0.951012 33.7331 0 29.8734 0 24.8609C0 20.3496 1.00107 16.1892 3.00319 12.3797C5.00533 8.46992 8.00852 4.56015 12.0128 0.650374C12.1129 0.550125 12.263 0.5 12.4633 0.5C12.7636 0.5 13.0138 0.650374 13.2141 0.951122C13.4143 1.25188 13.4143 1.5025 13.2141 1.703C8.30884 6.71553 5.85623 12.6303 5.85623 19.4474C5.85623 22.2544 6.35676 24.3095 7.35783 25.6128C8.25879 24.109 10.1108 23.3571 12.9137 23.3571ZM39.0415 23.3571C41.4441 23.3571 43.3461 24.1592 44.7476 25.7632C46.2492 27.2669 47 29.2719 47 31.7782C47 34.485 46.099 36.6404 44.2971 38.2444C42.5953 39.7481 40.2428 40.5 37.2396 40.5C33.7359 40.5 30.983 39.1466 28.9808 36.4399C27.0788 33.7331 26.1278 29.8734 26.1278 24.8609C26.1278 20.3496 27.1289 16.1892 29.131 12.3797C31.1331 8.46992 34.1363 4.56015 38.1406 0.650374C38.2407 0.550125 38.3908 0.5 38.5911 0.5C38.8914 0.5 39.1416 0.650374 39.3419 0.951122C39.5421 1.25188 39.5421 1.5025 39.3419 1.703C34.4366 6.71553 31.984 12.6303 31.984 19.4474C31.984 22.2544 32.4846 24.3095 33.4856 25.6128C34.3866 24.109 36.2386 23.3571 39.0415 23.3571Z"
                    fill="white"
                  />
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit . auctor sit iaculis in arcu. Vulputate nulla lobortis
                mauris eget sit. Nulla scelerisque scelerisque congue ac
                consequat, aliquam molestie lectus eu. Congue iaculis integer
                curabitur semper sit nunc.
              </motion.p>
              <motion.article
                initial={{ scale: 0 }}
                whileInView={{ scale: [2, 1] }}
                viewport={{ once: true }}>
                <h4 className="text-3xl text-primary font-comorant">
                  Kevin Luo
                </h4>
                <p className="leading-[175%]">Chef & Founder</p>
              </motion.article>
              <p className="font-bestermind text-6xl ">Kevin Luo</p>
            </div>
            <div className="relative p-6 z-10">
              <motion.div
                className="w-[287px] h-[287px] absolute bg-primary -z-10"
                initial={{ right: "50%", top: "50%" }}
                whileInView={{ right: 0, top: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={image}
                alt=""
                className="z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="w-[287px] h-[287px] absolute bottom-0 left-0 bg-primary -z-10"
                initial={{ bottom: "50%", left: "50%" }}
                whileInView={{ bottom: 0, left: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FramerRef;
