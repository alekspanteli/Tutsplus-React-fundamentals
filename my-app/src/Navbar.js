const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          React Fundamentals: {props.title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
