import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

const ChiefProctor = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/Dr_Shashi_Kant_Singh.jpg"
          name="Dr Vimal Kumar Dubey"
          designation="Chief Proctor"
          university="Mahayogi Gorakhnath University Gorakhpur"
          email="chief.proctor@mgug.ac.in"
        />
      </section>
    </MainLayout>
  );
};

export default ChiefProctor;
