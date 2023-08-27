import AllArticles from "../Components/AllArticles/AllArticles";
import { data } from "../fakedata/data";
const Home = ({id}) => {
  return (
    <main className="main-section">
      <div className="container">
      <AllArticles  data={data} id={id}/>
    </div>
    </main>
  );
};

export default Home;
