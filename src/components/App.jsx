import { QuestionList } from "./QuestionList";
import data from "../data.json";
import { SearchBar } from "./SearchBar";

export const App = () => {
  return (
    <>
      <SearchBar/>
      <QuestionList items={data}/>
    </>
  );
};
