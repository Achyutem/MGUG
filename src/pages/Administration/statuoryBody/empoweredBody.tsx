import MainLayout from "@/layouts/homeLayout";

const EmpoweredBody = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-6 text-orange-400 text-center">
              Empowered Body
            </h1>
            <div className="text-lg leading-relaxed text-gray-100">
              <p className="mb-6">
                Guru Shri Gorakhnath Chitisalaya, Management Committee,
                Vice-Chancellor and Registrar shall constitute/form the
                Empowered Body.
              </p>

              <ul className="list-disc list-inside space-y-4">
                <li>
                  Empowered Body shall have power to mortgage the land or other
                  assets of the University to any bank or other financial
                  institutions for the purpose of availing loan as per the
                  provisions of the Act.
                </li>
                <li>
                  The Empowered Body of the University shall have power to
                  determine the limits of the financial powers of any
                  officer(s), authority, teacher or employee of the university
                  from time to time.
                </li>
                <li>
                  The Empowered Body shall have power to take decision in all
                  such matters which have not been specifically conferred on any
                  Officer or Authority of the University.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EmpoweredBody;
