import SpentList from "../SpentList/SpentList";
import AddSpent from "../AddSpent/AddSpent";

function Home() {
  return (
    <div className="home">
      <SpentList></SpentList>
      <AddSpent></AddSpent>
    </div>
  )
}

export default Home;