import { QuestionList } from "./QuestionList/QuestionList";
import data from "../data.json";
import { SearchBar } from "./SearchBar";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <SearchBar/>
      <QuestionList items={data}/>
    </>
  );
};
