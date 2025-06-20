import MainLayout from "@/layouts/homeLayout";
import { FaPhoneAlt } from "react-icons/fa";
import {
  IoAlertCircleOutline,
  IoGlobeOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
const AntiRagging = () => {
  const committee = [
    {
      no: 1,
      name: "Dr. Vimal Kumar Dubey",
      designation: "Chief Proctor, Chair Person",
      phone: "9999764424",
    },
    {
      no: 2,
      name: "Prof. Sunil Kumar",
      designation: "Dean, Faculty of Allied Health Sciences, Co-ordinator",
      phone: "7007638374",
    },
    {
      no: 3,
      name: "Dr. D.S. Ajitha",
      designation: "Principal, Member",
      phone: "8840477265",
    },
    {
      no: 4,
      name: "Dr. Manjunath NS",
      designation: "Principal, GGIMS, Member",
      phone: "9886728745",
    },
    {
      no: 5,
      name: "Shri Rohit Kumar",
      designation: "Principal, Mahant Avaidyanath Paramedical College, Member",
      phone: "7394086797",
    },
    {
      no: 6,
      name: "Shri Ashish Chaudhary",
      designation: "Student, BAMS, Student Representative",
      phone: "8933854299",
    },
  ];

  const squad = [
    {
      no: 1,
      name: "Dr. Shashikant Singh",
      designation: "Principal, Faculty of Pharmaceutical Sciences, Chairperson",
      phone: "7007546991",
    },
    {
      no: 2,
      name: "Dr. Reshmi Pushpan",
      designation: "Professor, Agad Tantra, GGIMS",
      phone: "8289933175",
    },
    {
      no: 3,
      name: "Dr. Deepu Manohar",
      designation: "Assistant Prof., Rachana Sharir, GGIMS",
      phone: "7068152117",
    },
    {
      no: 4,
      name: "Dr. Akhilesh Kumar Dubey",
      designation: "Assistant Prof., Allied Health Sciences, Coordinator",
      phone: "9451520116",
    },
    {
      no: 5,
      name: "Dr. Vikas Kumar Yadav",
      designation: "Assistant Prof., Agriculture Dept., Member",
      phone: "9565919002",
    },
    {
      no: 6,
      name: "Ms. Pragya Pandey",
      designation: "Superintendent, Maa Pateshwari Sevashram Hostel, Member",
      phone: "6202190347",
    },
    {
      no: 7,
      name: "Ms. Rinki Singh",
      designation: "Tutor, GSG College of Nursing, Member",
      phone: "8957120500",
    },
    {
      no: 8,
      name: "Ms. Shweta Albert",
      designation: "Tutor, GSG College of Nursing, Member",
      phone: "8687894954",
    },
    {
      no: 9,
      name: "Mr. Shubham Kumar Maurya",
      designation: "Tutor, MAP College, Member",
      phone: "8477077041",
    },
  ];

  return (
    <MainLayout>
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-slate-200">
        {/* Top Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src="/anti-ragging.jpg"
            alt="Anti-Ragging Awareness"
            width={1200}
            height={400}
            className="w-full object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-orange-400 mb-4 text-center uppercase">
          Anti-Ragging Policy
        </h1>

        {/* Definition Section */}
        <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-orange-300 flex items-center gap-2">
            <IoAlertCircleOutline className="text-red-400" /> What is Ragging?
          </h2>
          <p>
            “Any disorderly conduct... embarrassment, and adversely affect the
            physical or psychological well-being of a fresher or junior
            student.”
          </p>
        </div>

        {/* Guidelines & UGC Info */}
        <div className="space-y-6 mb-6">
          <p>
            Students who experience or witness ragging must report it
            immediately to any committee member. The Dean of Students' Welfare
            will convene a meeting within 3 days to initiate investigation.
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 text-sm md:text-base">
            <li>Verbal Ragging: 1 year imprisonment or fine</li>
            <li>Severe Verbal Ragging: 7 years imprisonment with fine</li>
            <li>Physical Ragging: 7 years imprisonment with fine</li>
            <li>Sexual Ragging: 7 years rigorous imprisonment with fine</li>
          </ul>
        </div>

        {/* National Helpline */}
        <div className="bg-sky-800/40 p-4 rounded-lg border border-sky-600 mb-6">
          <h2 className="text-lg font-semibold mb-2 text-sky-300">
            {/*📞*/} National Anti-Ragging Helpline
          </h2>
          <p>
            <FaPhoneAlt className="inline w-4 h-4 mr-2 text-sky-300" />{" "}
            Toll-Free:{" "}
            <a
              href="tel:1800-180-5522"
              className="hover:text-orange-400 hover:underline"
              aria-label="Call 1800-180-5522"
            >
              <strong>1800-180-5522</strong>
            </a>
          </p>
          <p>
            <IoMailOpenOutline className="inline w-4 h-4 mr-2 text-sky-300" />{" "}
            Email:{" "}
            <a
              href="mailto:helpline@antiragging.in"
              className="underline text-sky-200"
            >
              helpline@antiragging.in
            </a>
          </p>
          <p>
            <IoGlobeOutline className="inline w-4 h-4 mr-2 text-sky-300" />
            Website:{" "}
            <a
              href="https://www.antiragging.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sky-200"
            >
              www.antiragging.in
            </a>
          </p>
        </div>

        {/* Report Button */}
        <div className="text-center mb-10">
          <a href="https://mgug.ac.in/academics/anti_rag_form.php">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow transition">
              Click to Report!
            </button>
          </a>
        </div>

        {/* Anti-Ragging Committee Table */}
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">
          Anti-Ragging Committee
        </h2>
        <TableList data={committee} />

        {/* Anti-Ragging Squad Table */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-orange-300">
          Anti-Ragging Squad
        </h2>
        <TableList data={squad} />
      </section>
    </MainLayout>
  );
};

export default AntiRagging;

// Reusable table component
const TableList = ({
  data,
}: {
  data: Array<{ no: number; name: string; designation: string; phone: string }>;
}) => (
  <div className="overflow-x-auto rounded-lg border border-slate-700 mb-8">
    <table className="min-w-full text-left">
      <thead className="bg-orange-500/20 text-orange-400">
        <tr>
          <th className="p-4">S. No.</th>
          <th className="p-4">Name</th>
          <th className="p-4">Designation</th>
          <th className="p-4">Contact</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ no, name, designation, phone }) => (
          <tr
            key={no}
            className="border-b border-slate-700 hover:bg-slate-800 transition"
          >
            <td className="p-4">{no}</td>
            <td className="p-4">{name}</td>
            <td className="p-4">{designation}</td>
            <td className="p-4 flex items-center gap-2">
              <FaPhoneAlt className="w-4 h-4 text-sky-300" />
              <span>{phone}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
