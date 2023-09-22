// import logo from './logo.svg';
import "./App.css";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
function App() {
  // const [state, setState] = useState({
  //   items: Array.from({ length: 20 }),
  // });

  //   function fetchMoreData(){// dont make it an arrow function
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   setTimeout(() => {
  //     setState({
  //       items: state.items.concat(Array.from({ length: 20 })),
  //     });
  //   }, 1500);
  // };
  const [search,setSearch]=useState("in")
  // const style = {
  //   height:40,
  //   border: "1px solid green",
  //   margin: 8,
  //   padding: 8,
  // };

  return (
    <div>
      <Router>
      <NavBar />
      <Routes>

      
      <Route exact path="/" element={<News pages={15} search="in"/>}/>
      <Route exact path="/sports" element={<News pages={15} search="sports"/>}/>
      <Route path="/finance" element={<News pages={15} search="finance"/>}/>
      <Route path="/education" element={<News pages={15} search="education"/>}/>
      <Route path="/business" element={<News pages={15} search="business"/>}/>
      </Routes>
      
      </Router>

      {/* <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {state.items.map((i, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll> */}
    </div>
  );
}
export default App;
