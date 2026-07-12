import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-24 px-4 pt-12 md:px-6 lg:px-16">
      <Header />
      <Content />
    </div>
  );
}

export default App;
