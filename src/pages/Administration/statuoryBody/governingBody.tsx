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

const GoverningBody = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              Governing Body
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                <RuleItem label="a">
                  The Governing Body shall consist of the following:
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-base">
                    <div className="flex items-center">
                      <UserIcon />
                      <span>The Chancellor - Chairperson</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>The Pro Chancellor - Member</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>The Vice-Chancellor - Member</span>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <UserIcon />
                      <span>
                        Two members to be nominated by the Sponsoring Body from
                        management committee.
                      </span>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <UserIcon />
                      <span>
                        One eminent educationist to be nominated by the
                        Sponsoring Body.
                      </span>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <UserIcon />
                      <span>
                        One member from the Industry/Corporate Sector to be
                        nominated by the Sponsoring Body.
                      </span>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <UserIcon />
                      <span>
                        One Legal Expert to be nominated as member by the
                        Sponsoring Body.
                      </span>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <UserIcon />
                      <span>
                        One Financial Expert to be nominated as member by the
                        Sponsoring Body.
                      </span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon />
                      <span>Registrar ex-officio Secretary.</span>
                    </div>
                    <div className="flex items-center col-span-1 md:col-span-2">
                      <UserIcon />
                      <span>
                        The Sponsoring Body shall have the power to nominate up
                        to six additional persons as members of governing body.
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-md bg-sky-900/50 border-l-4 border-sky-400 text-sky-200 text-base italic">
                    Provided that the number of members of the Governing Body
                    shall not be less than nine and more than fifteen.
                  </div>
                </RuleItem>
                <RuleItem label="b">
                  The term of nominated members shall be three years or till
                  further orders.
                </RuleItem>
                <RuleItem label="c">
                  The term of office of ex-officio members shall continue so
                  long as they hold the office by virtue of which they are
                  members.
                </RuleItem>
                <RuleItem label="d">
                  The Sponsoring Body shall have power to remove any member of
                  the Governing Body reasons to be recorded in writing.
                </RuleItem>
                <RuleItem label="e">
                  Meetings of the Governing Body shall be convened by the
                  Chancellor either on his initiative or on a requisition signed
                  by not less than four members of the Governing Body.
                </RuleItem>
                <RuleItem label="f">
                  Decisions on all issues considered in the meetings of the
                  Governing Body shall be taken by majority votes of the members
                  present.
                </RuleItem>
                <RuleItem label="g">
                  The Chancellor, if present, shall preside over the meetings of
                  the Governing Body. In his absence, the Chancellor may
                  nominate Pro Chancellor or a member of the Governing Body.
                </RuleItem>
                <RuleItem label="h">
                  A written notice of every meeting shall be sent by the
                  Registrar to every member at least two weeks before the
                  scheduled date of the meeting.
                  <div className="mt-4 p-3 rounded-md bg-sky-900/50 border-l-4 border-sky-400 text-sky-200 text-base italic">
                    Provided that the Chairman may call a special meeting of the
                    Governing Body at short notice to consider any urgent
                    matter.
                  </div>
                </RuleItem>
                <RuleItem label="j">
                  The notice may be delivered either by hand, e-mail or sent by
                  registered post at the address of each member as recorded in
                  the office.
                </RuleItem>
                <RuleItem label="k">
                  Agenda shall be circulated by the Registrar to the members
                  before the meeting.
                </RuleItem>
                <RuleItem label="l">
                  Notices of motion for inclusion of any item on the agenda must
                  reach the Registrar at least two weeks before the meeting. The
                  Chairperson may, however, permit inclusion of any item for
                  which due notice has not been received.
                </RuleItem>
                <RuleItem label="m">
                  The ruling of the Chairperson in regard to all the questions
                  of procedure shall be final.
                </RuleItem>
                <RuleItem label="n">
                  The minutes of the proceedings of the Governing Body shall be
                  drawn up by the Registrar and after the approval of the
                  Chairman shall be circulated to all members of the Governing
                  Body. The amendments, if any with minutes shall be placed for
                  confirmation at the next meeting of the Governing Body. After
                  the minutes are confirmed and signed by the Chairman, the same
                  shall be recorded in a book of minutes which shall be kept
                  open for inspection during office hours by the members of the
                  Governing Body.
                </RuleItem>
                <RuleItem label="o">
                  As per section 24 of the Act all the works/powers are
                  enshrined with the Governing Body.
                </RuleItem>
                <RuleItem label="p">
                  The Governing Body may, in accordance with the provisions of
                  clause (d) to sub-section (3) of section 24 of the Act, create
                  such other posts of officers, teachers and employees of the
                  University to perform such functions as it may deem necessary.
                </RuleItem>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default GoverningBody;
