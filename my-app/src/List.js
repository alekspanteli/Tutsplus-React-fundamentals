import ListItem from './ListItem'
import PropTypes from 'prop-types';

const List = (props) => {
  
  let items = props.items.map((item) => <ListItem text={item} />);

  let css = `bg-${props.background}`;

  return (
    <>
      <h3 className={css}>{props.title}</h3>
      <ul>{items}</ul>
    </>
  );
};

List.defaultProps = {
  items: [],
  background: 'primary'
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.oneOf([
    'primary',
    'secondary'
  ]),
};

export default List;
