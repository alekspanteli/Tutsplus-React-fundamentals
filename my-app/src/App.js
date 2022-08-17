import Navbar from './Navbar';
import List from './List'

const App = () => {

  let guitars = ['Alex', 'John', 'David'];



  return (
    <>
        <Navbar title="Lots of components" />
        <div className="container">
          <List
            title="Guitars"
            items={guitars}
          />
        </div>
    </>
  );
};

export default App;
