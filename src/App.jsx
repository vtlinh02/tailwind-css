import { Hero, PopularProduct } from "./sections";
import { Nav } from "./components";

const App = () => {
  return (
    <main>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <PopularProduct />
      </section>
    </main>
  );
};

export default App;
