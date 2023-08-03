import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  background-color: grey;
`;

const getColor = props => {
    switch (props.level) {
      case 'beginner':
        return 'green';
      case 'intermediate':
        return 'yellow';
      case 'advanced':
        return 'red';
        default: 
          return 'black';
    }
}

export const ListItem = styled.li`
  color: blue;
  border: 5px solid ${getColor};

  :hover {
    background-color: ${getColor};
  }
`;
