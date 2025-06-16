import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

export default function ControllerOfExamination() {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/coe_amit_singh.png"
          name="Mr. Amit Kumar Singh"
          designation="Controller Of Examination"
          university="Mahayogi Gorakhnath University Gorakhpur"
          email="coe@mgug.ac.in"
          profilePdf="https://mgug.ac.in/administration/coe.php#"
        />
      </section>
    </MainLayout>
  );
}
