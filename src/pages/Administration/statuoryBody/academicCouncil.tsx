import MainLayout from "@/layouts/homeLayout";

const AcademicCouncil = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              विद्यापरिषद / Academic Council
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        क्रमांक
                        <br />
                        Sl No
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
                        डॉ. डी.एस. अजीथा, अधिष्ठाता, नर्सिंग एवं पैरामेडिकल
                        <br />
                        Dr. D.S. Ajeetha, Dean, Nursing and Paramedical
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. गिरिधर वेदान्तम, प्रधानाचार्य, गुरु गोरक्षनाथ
                        इंस्टीट्यूट ऑफ मेडिकल साइंसेस, आयुर्वेद कॉलेज
                        <br />
                        Dr. Giridhar Vedantam, Principal, Guru Gorakhnath
                        Institute of Medical Sciences, Ayurveda College
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. सुनील कुमार सिंह, अधिष्ठाता, सम्बद्ध स्वास्थ्य
                        विज्ञान संकाय
                        <br />
                        Dr. Sunil Kumar Singh, Dean, Allied Health Sciences
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. अनुराग श्रीवास्तव, प्रधानाचार्य, श्री गोरक्षनाथ
                        मेडिकल कॉलेज हॉस्पिटल एण्ड रिसर्च सेंटर
                        <br />
                        Dr. Anurag Srivastava, Principal, Shri Gorakhnath
                        Medical College Hospital and Research Centre
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. रघुराम आचार, अधिष्ठाता, आईक्यूएसी, रैंकिंग एवं
                        एक्रीडिटेशन
                        <br />
                        Dr. Raghu Ram Achar, Dean, IQAC, Ranking and
                        Accreditation
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. प्रशान्त सदाशिवमूर्ति, अधिष्ठाता, एकेडेमिक्स
                        <br />
                        Dr. Prashant Sadashivmurthy, Dean Academics
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. मधुसूदन पुरोहित, अधिष्ठाता, फार्मेसी संकाय
                        <br />
                        Dr. Madhusudan Purohit, Dean, Faculty of Pharmacy
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        डॉ. विमल कुमार दूबे, अधिष्ठाता, कृषि विज्ञान संकाय
                        <br />
                        Dr. Vimal Kumar Dubey, Dean, Faculty of Agricultural
                        Sciences
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
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
                        श्री रोहित कुमार श्रीवास्तव, विभागाध्यक्ष, पैरामेडिकल
                        <br />
                        Shri Rohit Kumar Srivastava, Head, Paramedical
                        Department
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">11</td>
                      <td className="p-4">
                        श्री तरुन श्याम, विभागाध्यक्ष, एम.बी.ए.
                        <br />
                        Shri Tarun Shyam, Head, MBA Department
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">12</td>
                      <td className="p-4">
                        डॉ. दीपू मनोहर, सह आचार्य, रचना शरीर, गुरु गोरक्षनाथ
                        आयुर्वेद कॉलेज
                        <br />
                        Dr. Deepu Manohar, Associate Professor, Anatomy, Guru
                        Gorakhnath Ayurveda College
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
                      <td className="p-4">13</td>
                      <td className="p-4">
                        श्रीमती रजीथा आर.एम., सह आचार्य, गुरु श्री गोरक्षनाथ
                        कॉलेज ऑफ नर्सिंग
                        <br />
                        Mrs. Rajitha R.M., Associate Professor, Guru Shri
                        Gorakhnath College of Nursing
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
                      <td className="p-4">14</td>
                      <td className="p-4">
                        डॉ. अनुपमा ओझा, सहायक आचार्य, मेडिकल बायोकेमिस्ट्री,
                        सम्बद्ध स्वास्थ्य विज्ञान संकाय
                        <br />
                        Dr. Anupama Ojha, Assistant Professor, Medical
                        Biochemistry, Allied Health Sciences
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
                      <td className="p-4">15</td>
                      <td className="p-4">
                        डॉ. कुलदीप सिंह, सहायक आचार्य, कृषि विज्ञान संकाय
                        <br />
                        Dr. Kuldeep Singh, Assistant Professor, Faculty of
                        Agricultural Sciences
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
                      <td className="p-4">16</td>
                      <td className="p-4">
                        डॉ. दिनेश कुमार सिंह, आचार्य एवं पूर्व विभागाध्यक्ष,
                        प्राणि विज्ञान विभाग, दी.द.उ. गोरखपुर विश्वविद्यालय
                        <br />
                        Dr. Dinesh Kumar Singh, Professor & Former Head, Zoology
                        Dept., D.D.U. Gorakhpur University
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
                      <td className="p-4">17</td>
                      <td className="p-4">
                        डॉ. वी. रामनाथन, सहायक आचार्य, रसायन शास्त्र विभाग,
                        आईआईटी बी.एच.यू., वाराणसी
                        <br />
                        Dr. V. Ramnathan, Assistant Professor, Chemistry Dept.,
                        IIT BHU, Varanasi
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
                      <td className="p-4 rounded-bl-xl">18</td>
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

export default AcademicCouncil;
