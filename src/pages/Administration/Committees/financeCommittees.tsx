import MainLayout from "@/layouts/homeLayout";

const FinanceCommittee = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              वित्त समिति / Finance Committee
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
                        नाम और पदनाम
                        <br />
                        Name & Designation
                      </th>
                      <th className="p-4 font-semibold">
                        दायित्व
                        <br />
                        Role
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        नामित/पदेन
                        <br />
                        Nominated/Ex-Officio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">1</td>
                      <td className="p-4">
                        डॉ. सुरिंदर सिंह, कुलपति
                        <br />
                        Dr. Surinder Singh, Vice Chancellor
                      </td>
                      <td className="p-4">
                        अध्यक्ष
                        <br />
                        Chairperson
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">2</td>
                      <td className="p-4">
                        डॉ. शैलेंद्र प्रताप सिंह, सदस्य, महाराणा प्रताप शिक्षा
                        परिषद
                        <br />
                        Dr. Shailendra Pratap Singh, Member, Maharana Pratap
                        Shiksha Parishad
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">3</td>
                      <td className="p-4">
                        श्री प्रमथ नाथ मिश्र, वरिष्ठ अधिवक्ता
                        <br />
                        Shri Pramath Nath Mishra, Senior Advocate
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                      <td className="p-4">
                        नामित
                        <br />
                        Nominated
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">4</td>
                      <td className="p-4">
                        डॉ. डी.एस. अजीथा, डीन, नर्सिंग संकाय
                        <br />
                        Dr. D.S. Ajitha, Dean, Faculty of Nursing
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">5</td>
                      <td className="p-4">
                        डॉ. प्रदीप कुमार राव, कुलसचिव
                        <br />
                        Dr. Pradeep Kumar Rao, Registrar
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">6</td>
                      <td className="p-4">
                        श्री अनिल सिंह, सी.ई.ओ.
                        <br />
                        Shri Anil Singh, CEO
                      </td>
                      <td className="p-4">
                        सदस्य
                        <br />
                        Member
                      </td>
                      <td className="p-4">
                        पदेन
                        <br />
                        Ex-Officio
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 rounded-bl-xl">7</td>
                      <td className="p-4">
                        वित्त अधिकारी
                        <br />
                        Finance Officer
                      </td>
                      <td className="p-4">
                        सचिव
                        <br />
                        Secretary
                      </td>
                      <td className="p-4 rounded-br-xl">
                        पदेन
                        <br />
                        Ex-Officio
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

export default FinanceCommittee;
