import { FiPlus } from "react-icons/fi";

export default function Faq() {
  const faqs = [
    {
      question: "How does TalentLens analyze my resume?",
      answer:
        "TalentLens uses AI to evaluate your resume and identify strengths and skill gaps.",
    },
    {
      question: "Is my resume data secure?",
      answer:
        "Yes, your data is processed securely and is never shared with third parties.",
    },
    {
      question: "Can I upload multiple resumes?",
      answer:
        "Yes, you can analyze multiple resumes and compare results.",
    },
    {
      question: "Does TalentLens provide ATS insights?",
      answer:
        "Yes, it helps identify ATS-related issues and improvement areas.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-black">
                  {faq.question}
                </span>

                <FiPlus className="text-xl text-gray-600 transition-transform duration-300 group-open:rotate-45" />
              </summary>

              <div className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}