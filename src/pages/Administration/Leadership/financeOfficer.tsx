import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

export default function FinanceOfficer() {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/DRPradeepRao.jpg"
          name="Dr. Pradeep Kumar Rao"
          designation="Registrar Cum Finance Officer"
          university="Mahayogi Gorakhnath University Gorakhpur"
          email="registrar@mgug.ac.in"
          profilePdf="https://mgug.ac.in/PDF/DrPradeepRao.pdf"
        />
      </section>
    </MainLayout>
  );
}
