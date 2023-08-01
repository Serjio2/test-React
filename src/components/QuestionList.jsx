import { QuestionCard } from "./QuestionCard";

export const QuestionList = ({items}) => {
    
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <QuestionCard item={item}/>
                </li>
            ))}
        </ul>
    );
};