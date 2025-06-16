import MainLayout from "@/layouts/homeLayout";

const ExecutiveCouncil = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              कार्यपरिषद / Executive Council
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रमांक
                        <br />
                        Sr. No
                      </th>
                      <th className="p-4 font-semibold">
                        नाम व पता
                        <br />
                        Name & Address
                      </th>
                      <th className="p-4 font-semibold">
                        नामित/पदेन
                        <br />
                        Nominated/Ex-Officio
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        दायित्व
                        <br />
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">1</td>
                      <td className="p-4">
                        डॉ. सुरिन्दर सिंह, कुलपति
                        <br />
                        Dr. Surinder Singh, Vice Chancellor
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                      <td className="p-4">
                        अध्यक्ष
                        <br />
                        Chairperson
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">2</td>
                      <td className="p-4">
                        महन्त योगी मिथलेशनाथ, धर्माचार्य
                        <br />
                        Mahant Yogi Mithleshnath, Religious Teacher
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">3</td>
                      <td className="p-4">
                        श्री रामजन्म सिंह, पूर्व प्राचार्य, एम.पी. इंटर कॉलेज,
                        गोरखपुर
                        <br />
                        Shri Ramjanm Singh, Former Principal, M.P. Inter
                        College, Gorakhpur
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">4</td>
                      <td className="p-4">
                        श्री प्रमथनाथ मिश्र, अधिवक्ता, गोरखपुर
                        <br />
                        Shri Pramathanath Mishra, Advocate, Gorakhpur
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">5</td>
                      <td className="p-4">
                        डॉ. सी.एम. सिन्हा, एम.एस., कैंसर रोग विशेषज्ञ, गोरखपुर
                        <br />
                        Dr. C.M. Sinha, M.S., Cancer Specialist, Gorakhpur
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">6</td>
                      <td className="p-4">
                        श्री प्रेम कुमार पाण्डेय, संयुक्त सचिव, उच्च शिक्षा
                        विभाग, उ.प्र.
                        <br />
                        प्रतिनिधि, प्रमुख सचिव, उच्च शिक्षा विभाग, उत्तर प्रदेश
                        शासन
                        <br />
                        Shri Prem Kumar Pandey, Joint Secretary, Higher
                        Education Dept., U.P.
                        <br />
                        Representative of Principal Secretary, Govt. of U.P.
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">7</td>
                      <td className="p-4">
                        प्रो. मिनी के.वी., आचार्य, गुरु गोरक्षनाथ इंस्टिट्यूट ऑफ
                        मेडिकल साइंसेज, आयुर्वेद संकाय
                        <br />
                        Prof. Mini K.V., Professor, Guru Gorakhnath Institute of
                        Medical Sciences, Faculty of Ayurveda
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">8</td>
                      <td className="p-4">
                        डॉ. दीपू मनोहर, सह आचार्य, गुरु गोरक्षनाथ इंस्टिट्यूट ऑफ
                        मेडिकल साइंसेज, आयुर्वेद संकाय
                        <br />
                        Dr. Deepu Manohar, Associate Professor, Guru Gorakhnath
                        Institute of Medical Sciences, Faculty of Ayurveda
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">9</td>
                      <td className="p-4">
                        डॉ. साध्वी नन्दन पाण्डेय, सहायक आचार्य, गुरु गोरक्षनाथ
                        इंस्टिट्यूट ऑफ मेडिकल साइंसेज, आयुर्वेद संकाय
                        <br />
                        Dr. Sadhvi Nandan Pandey, Assistant Professor, Guru
                        Gorakhnath Institute of Medical Sciences, Faculty of
                        Ayurveda
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">10</td>
                      <td className="p-4">
                        प्रो. शोभा गौड़, बी.एड. विभाग, दी.द.उ. गोरखपुर
                        विश्वविद्यालय, गोरखपुर
                        <br />
                        Prof. Shobha Gaud, B.Ed. Dept., D.D.U. Gorakhpur
                        University, Gorakhpur
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 rounded-bl-xl">11</td>
                      <td className="p-4">
                        डॉ. प्रदीप कुमार राव, कुलसचिव
                        <br />
                        Dr. Pradeep Kumar Rao, Registrar
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                      <td className="p-4 rounded-br-xl">
                        सचिव
                        <br />
                        Secretary
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExecutiveCouncil;
