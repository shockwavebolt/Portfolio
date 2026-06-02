import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col pt-12 px-4 md:px-6 lg:px-16 gap-24">
      <Header />
      <Content />
    </div>
  );
}

export default App;
