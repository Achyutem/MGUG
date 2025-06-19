import MainLayout from "@/layouts/homeLayout";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const SGRCAndOmbudsperson = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              छात्र शिकायत निवारण समिति एवं लोकपाल <br />
              Student's Grievance Redressal Committee & Ombudsperson
            </h1>

            {/* Table */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रमांक
                        <br />
                        S. No.
                      </th>
                      <th className="p-4 font-semibold">
                        नाम
                        <br />
                        Name
                      </th>
                      <th className="p-4 font-semibold">
                        पदनाम
                        <br />
                        Designation
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        दायित्व
                        <br />
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        no: 1,
                        name: "डॉ. डी एस अजीथा / Dr. D S Ajetha",
                        designation:
                          "प्राचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग / Principal, Guru Shree Gorakshnath College of Nursing",
                        role: "अध्यक्ष (महिला) / Chairperson (Female)",
                      },
                      {
                        no: 2,
                        name: "डॉ. मिनी के. वी. / Dr. Mini K. V.",
                        designation:
                          "आचार्य, शारीरिक शिक्षा विभाग, आयुर्वेदिक कॉलेज / Professor, Rachana Sharir Dept., Ayurvedic College",
                        role: "सदस्य (अन्य पिछड़ा वर्ग-महिला) / Member (OBC-Female)",
                      },
                      {
                        no: 3,
                        name: "प्रो. डी. जेनी / Prof. D. Jenny",
                        designation:
                          "आचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग / Professor, Guru Shree Gorakshnath College of Nursing",
                        role: "सदस्य (अन्य पिछड़ा वर्ग-महिला) / Member (OBC-Female)",
                      },
                      {
                        no: 4,
                        name: "प्रो. डॉ. गोपी कृष्ण एस. / Prof. Dr. Gopi Krishna S.",
                        designation:
                          "आचार्य, आयुर्वेदिक कॉलेज / Professor, Ayurvedic College",
                        role: "सदस्य / Member",
                      },
                      {
                        no: 5,
                        name: "डॉ. विमल कुमार दुबे / Dr. Vimal Kumar Dubey",
                        designation:
                          "डीन, कृषि विज्ञान / Dean, Agricultural Sciences",
                        role: "सदस्य / Member",
                      },
                      {
                        no: 6,
                        name: "श्री शिवम पांडे / Shri Shivam Pandey",
                        designation:
                          "छात्र, बी.एससी (जैव प्रौद्योगिकी) / Student, B.Sc (Biotechnology)",
                        role: "छात्र सदस्य / Student Member",
                      },
                    ].map(({ no, name, designation, role }) => (
                      <tr
                        key={no}
                        className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="p-4">{no}</td>
                        <td className="p-4">{name}</td>
                        <td className="p-4">{designation}</td>
                        <td className="p-4">{role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ombudsperson Section */}
            <div className="mt-10 bg-sky-900/50 border-l-4 border-sky-400 p-6 rounded-lg text-base text-sky-200">
              <h2 className="text-xl font-semibold text-orange-400 mb-2">
                लोकपाल / Ombudsperson
              </h2>
              <p className="mb-1">
                <strong>प्रो. वी. के. सिंह / Prof. V. K. Singh</strong>
              </p>
              <p className="mb-1">
                पूर्व कुलपति, दीनदयाल उपाध्याय गोरखपुर विश्वविद्यालय <br />
                Former Vice-Chancellor, DDU Gorakhpur University
              </p>
              <p className="mb-1 flex items-center gap-2">
                <FaPhoneAlt size={18} className="text-sky-300" />
                <strong>+91-7905468594</strong>
              </p>
              <p className="flex items-center gap-2">
                <IoMailOpenOutline size={18} className="text-sky-300" />
                <a
                  href="mailto:singhvijaikrishna9@gmail.com"
                  className="underline text-sky-300"
                >
                  singhvijaikrishna9@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SGRCAndOmbudsperson;
