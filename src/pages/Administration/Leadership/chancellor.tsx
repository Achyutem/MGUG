import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";

const Chancellor = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image="/YogiAdityanath.webp"
          name="Mahant Yogi Adityanath Ji Maharaj"
          designation="Chancellor / Founder"
          university="Mahayogi Gorakhnath University Gorakhpur"
          email="yogiadityanath72@gmail.com"
          website="https://www.yogiadityanath.in"
          socials={{
            instagram: "https://instagram.com/yogiadityanath",
            facebook: "https://facebook.com/yogiadityanath",
            twitter: "https://twitter.com/myogiadityanath",
            youtube: "https://youtube.com/@yogiadityanath",
          }}
        />
      </section>
    </MainLayout>
  );
};

export default Chancellor;
