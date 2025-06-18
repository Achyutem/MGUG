import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

const ViceChancellor = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/admin/vcmgug.webp"
          name="Dr. Surinder Singh"
          designation="Vice Chancellor"
          university="Mahayogi Gorakhnath University Gorakhpur"
          email="vc@mgug.ac.in"
          profilePdf="https://mgug.ac.in/PDF/Dr_Surinder_Singh_Profile.pdf"
        />
      </section>
    </MainLayout>
  );
};

export default ViceChancellor;
