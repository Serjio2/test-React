import { QuestionCard } from "../QuestionCard";
import { List, ListItem } from "./QuestionList.styled";

export const QuestionList = ({items}) => {
    
    return (
        <List>
            {items.map(item => (
                <ListItem key={item.id} level={item.level}>
                    <QuestionCard item={item}/>
                </ListItem>
            ))}
        </List>
    );
};