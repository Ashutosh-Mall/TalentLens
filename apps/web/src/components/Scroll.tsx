import {useRef, useState} from "react";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";

export default function Scroll() {
  const timelineData = [
    {
      dot: 0.2,
      title: "Upload Resume",
      desc: "Upload your resume to get started",
    },
    {
      dot: 0.4,
      title: "Get Analytics",
      desc: "your resume is analyzed",
    },
    {
      dot: 0.6,
      title: "Improve Your Resume",
      desc: "Get feedback and suggestions to enhance your resume",
    },
    {
      dot: 0.8,
      title: "Get Hired",
      desc: "Worked with clients to secure job opportunities",
    },
  ];
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start 80%", "end 120%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  const lineHeight = 500;

  return (
    <div ref={ref} className="white flex justify-center p-10 h-[100vh]"> 
      <div className="relative h-[600px] w-2">
        <div className="absolute inset-0 bg-gray-500 rounded-full" />

        <motion.div
          className="absolute inset-0 bg-gray-200 origin-top rounded-full"
          style={{scaleY: scrollYProgress}}
        />

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{
            top: `${progress * lineHeight}px`,
          }}
        />

        {timelineData.map((data, index) => (
          <div key={index}>
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full transition-all duration-300 ${
                progress >= data.dot
                  ? "bg-white border-4 border-gray-500 shadow shadow-amber-100 shadow-3lg"
                  : "bg-gray-500"
              }`}
              style={{
                top: `${data.dot * 100}%`,
              }}
            />

            {progress >= data.dot && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount : 0.5
                }}
                transition={{duration: 0.3}}
                className={`absolute ${
                  index % 2 === 0 ? "right-10" : "left-10"
                }`}
                style={{
                  top: `${data.dot * 90}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <div className="w-64 rounded-xl bg-white text-black p-4 shadow-lg">
                  <h3 className="font-bold">{index + 1} {data.title}</h3>
                  <p className="text-sm text-gray-600">
                    {data.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
