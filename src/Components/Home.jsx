import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Descubra as melhores fotos de cães do Brasil!"
      />
      <Feed />
    </section>
  );
};

export default Home;
