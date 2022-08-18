import Navbar from './Navbar';
import List from './ListClass'
import Counter from './CounterClass'

const App = () => {

  let guitars = ['Alex', 'John', 'David'];


  return (
    <>
        <Navbar title="Getting Started With State" />
        <div className="container">
          <List
            title="Guitars"
            items={guitars}
            background='danger'
          />
          {/* <Counter /> */}
        </div>
    </>
  );
};

export default App;
