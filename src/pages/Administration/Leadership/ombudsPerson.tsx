import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

const OmbudsPerson = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/Prof_V_K_Singh.jpg"
          name="Prof. V. K. Singh"
          designation="Ombuds Person"
          university="Former Vice-Chancellor, DDU Gorakhpur University"
          email=" singhvijaikrishna9@gmail.com"
        />
      </section>
    </MainLayout>
  );
};

export default OmbudsPerson;
