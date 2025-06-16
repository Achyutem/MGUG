import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

export default function proChancellor() {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/drupsingh.jpg"
          name="Prof. Uday Pratap Singh"
          designation="Pro Chancellor"
          university="Mahayogi Gorakhnath University Gorakhpur"
          email="upsingh300@gmail.com"
          profilePdf="https://mgug.ac.in/PDF/ProfUPSingh.pdf"
        />
      </section>
    </MainLayout>
  );
}
