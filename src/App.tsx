import {
  Navbar,
  Desktop,
  About,
  Experience,
  Tech,
  Contact,
} from "./components";

export const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Desktop />
      </div>
      <About />
      <Experience />
      <Tech />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};
