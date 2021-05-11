import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return ( //para delimitar como um elemento só  tem que colocar o <> pois antes do return so pode um
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola mundo</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
