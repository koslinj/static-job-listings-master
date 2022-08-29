import data from "./data.json";
import Jobs from "./Jobs";
import { useState } from "react";
import Header from "./Header";
import './style.css'

function App() {


  const [filterKeywords, setfilterKeywords] = useState([]);

  const removeFilterKeywords = (item) => {
    setfilterKeywords([...filterKeywords].filter(x => x !== item));
  }

  const addFilterKeywords = (item) => {
    if (!filterKeywords.includes(item)) {
      setfilterKeywords([...filterKeywords, item]);
    }
  };

  const removeAll = () => {
    setfilterKeywords([]);
  }

  return (
    <>
      <Header keywords={filterKeywords} remkeywords={removeFilterKeywords} remall={removeAll} />
      <Jobs data={data} setkeywords={addFilterKeywords} keywords={filterKeywords} />
    </>
  );
}

export default App;
