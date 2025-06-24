import MainLayout from "@/layouts/homeLayout";
import {
  executiveCouncilData,
  executiveCouncilTitles,
} from "@/utils/statuoryBody";

const ExecutiveCouncil = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {executiveCouncilTitles.heading.english}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {executiveCouncilTitles.headers.srNo.english}
                      </th>
                      <th className="p-4 font-semibold">
                        {executiveCouncilTitles.headers.name.english}
                      </th>
                      <th className="p-4 font-semibold">
                        {executiveCouncilTitles.headers.type.english}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {executiveCouncilTitles.headers.role.english}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {executiveCouncilData.map(({ srNo, name, type, role }) => (
                      <tr
                        key={srNo}
                        className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="p-4">{srNo}</td>
                        <td className="p-4 text-orange-400">{name.english}</td>
                        <td className="p-4">{type.english}</td>
                        <td className="p-4">{role.english}</td>
                      </tr>
                    ))}
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
