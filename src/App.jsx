import { Hero } from "./sections";
import { Nav } from "./components";

const App = () => {
  return (
    <main>
      <Nav />
      <section>
        <Hero />
      </section>
    </main>
  );
};

export default App;
