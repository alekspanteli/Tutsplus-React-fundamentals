import Navbar from './Navbar';
import List from './List'

const App = () => {

  const guitars = ['Alex', 'John', 'David'];

  return (
    <>
        <Navbar title="Lots of components" />
        <div class="container">
          <List
            title="Guitars"
            items={guitars}
          />
        </div>
    </>
  );
};

export default App;
