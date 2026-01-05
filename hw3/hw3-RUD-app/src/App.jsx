import { useState } from "react";
import List from "./components/List";
function App() {
  const [showList, setShowList] = useState(true);

  return <>{showList && <List onEmpty={() => setShowList(false)} />}</>;
}

export default App;
