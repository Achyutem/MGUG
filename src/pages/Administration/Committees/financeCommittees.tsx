import MainLayout from "@/layouts/homeLayout";
import {
  financeCommitteeData,
  financeCommitteeTitles,
} from "@/utils/committeeData";
import type { CommitteeMember } from "@/utils/types";

const FinanceCommittee = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {financeCommitteeTitles.heading.english}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {financeCommitteeTitles.headers.srNo.english}
                      </th>
                      <th className="p-4 font-semibold">
                        {financeCommitteeTitles.headers.nameDesignation.english}
                      </th>
                      <th className="p-4 font-semibold">
                        {financeCommitteeTitles.headers.role.english}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {financeCommitteeTitles.headers.status.english}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {financeCommitteeData.map((member: CommitteeMember) => (
                      <tr
                        key={member.srNo}
                        className={`border-b border-slate-700 hover:bg-gray-700/50 transition-colors ${
                          member.srNo === financeCommitteeData.length
                            ? "last:border-b-0"
                            : ""
                        }`}
                      >
                        <td
                          className={`p-4 ${
                            member.srNo === financeCommitteeData.length
                              ? "rounded-bl-xl"
                              : ""
                          }`}
                        >
                          {member.srNo}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-orange-400">
                            {member.name.english}
                          </span>
                          {member.designation.english && (
                            <>
                              <br />
                              <span className="font-light text-sm text-white">
                                {member.designation.english}
                              </span>
                            </>
                          )}
                        </td>
                        <td className="p-4">{member.role.english}</td>
                        <td
                          className={`p-4 ${
                            member.srNo === financeCommitteeData.length
                              ? "rounded-br-xl"
                              : ""
                          }`}
                        >
                          {member.status.english}
                        </td>
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

export default FinanceCommittee;
