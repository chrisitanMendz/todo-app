import Banner from "./Banner";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen relative pb-32">
      <Banner />
      <div className="container mt-[-155px] z-50">
        <Header />
        <Form />
        <Todos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
