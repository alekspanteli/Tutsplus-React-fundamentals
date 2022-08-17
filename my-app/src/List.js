import ListItem from './ListItem'

const List = (props) => {
  let items = props.items.map((item) => <ListItem text={item} />);

  return (
    <>
      <h3>{props.title}</h3>
      <ul>{items}</ul>
    </>
  );
};

export default List;
