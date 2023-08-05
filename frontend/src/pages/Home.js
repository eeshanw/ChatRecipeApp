import "../styles/Home.css";
import InputForm from "../components/InputForm";

function Home() {
  return (
    <div className="main-container">
      <h className="description">Find recipes with your ingredients!</h>
      <InputForm />
    </div>
  );
}

export default Home;
