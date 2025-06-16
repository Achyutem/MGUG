import MainLayout from "@/layouts/homeLayout";

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RuleItem = ({ label, children }: any) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-500/20 text-orange-400 font-semibold flex items-center justify-center mr-4 mt-1">
      {label}
    </div>
    <div className="flex-1">{children}</div>
  </li>
);

const ExaminationCommittee = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              Examination Committee
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                <RuleItem label="a">
                  There shall be an Examination Committee in the University for
                  looking after the affairs related to the examinations. It
                  shall consist of the following:
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-base">
                    <div className="flex items-center">
                      <UserIcon />
                      <span>The Vice-Chancellor – Chairperson</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>One Professor (nominated)</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>One Associate Professor (nominated)</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>One Assistant Professor (nominated)</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>All the Deans – Members</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Registrar – Member</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>
                        Controller of Examinations – Ex-officio Secretary
                      </span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>
                        Two student representatives (nominated by VC, not
                        allowed in confidential meetings)
                      </span>
                    </div>
                  </div>
                </RuleItem>

                <RuleItem label="b">
                  The Examination Committee shall meet at least twice a year.
                  However, it may be convened anytime by the Controller of
                  Examinations as per the Vice-Chancellor’s direction in the
                  interest of examination-related affairs.
                </RuleItem>

                <RuleItem label="c">
                  The Examination Committee shall make recommendations to the
                  Academic Council regarding conferment or grant of degrees,
                  diplomas, honors, and titles.
                </RuleItem>

                <RuleItem label="d">
                  For smooth conduct of examinations, all infrastructure and
                  staff of the University shall be deemed under the
                  administrative and disciplinary control of the Examination
                  Committee and utilized accordingly.
                </RuleItem>

                <RuleItem label="e">
                  The Committee may, on recommendations of its sub-committee,
                  debar an examinee from appearing in examinations if found
                  guilty of misbehavior, misconduct, or using unfair means.
                </RuleItem>

                <RuleItem label="f">
                  The Committee may, based on sub-committee recommendations,
                  propose disciplinary action or debar an examiner/faculty/staff
                  if found guilty of academic impropriety.
                </RuleItem>

                <RuleItem label="g">
                  The Examination Committee shall formulate examination
                  policies.
                </RuleItem>

                <RuleItem label="h">
                  The University may also constitute the following Boards:
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-base">
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Board of Student Welfare</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Board of Co-ordination</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Women Advisory Board</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Board of Health, Residence and Discipline</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Board of Social Works</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>University Athletic Association</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Board of Extramural Activities</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Sexual Harassment Committee</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Anti Ragging Committee</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Internal Quality Assurance Cell (IQAC)</span>
                    </div>
                  </div>
                </RuleItem>

                <RuleItem label="i">
                  The powers, functions, and constitution of the Boards
                  mentioned above shall be as laid down in the Ordinances.
                </RuleItem>

                <RuleItem label="j">
                  The University may frame Ordinances from time to time for the
                  constitution, roles, and powers of the Council, Boards,
                  Committees, and Cells.
                </RuleItem>

                <RuleItem label="k">
                  All other matters shall be governed as per the University Act
                  or as prescribed.
                </RuleItem>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExaminationCommittee;
