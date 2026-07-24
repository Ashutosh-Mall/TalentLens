import { Doughnut } from "react-chartjs-2";
import {motion} from "framer-motion";
import "chart.js/auto";

export default function HeroChart() {
  return (
    <motion.div className="relative h-[320px]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
      <Doughnut
        data={{
          labels: ["Matched Skills", "Missing Skills", "Bonus Skills"],
          datasets: [
            {
              data: [68, 22, 10],
              backgroundColor: [
                "#111111",
                "#6B7280",
                "#D1D5DB",
              ],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1800,
          },

          cutout: "75%",

          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#111111",
                usePointStyle: true,
                padding: 20,
              },
            },
          },
        }}
      />
    </motion.div>
  );
}