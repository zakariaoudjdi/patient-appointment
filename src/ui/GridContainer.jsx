function GridContainer({ children }) {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
      {children}
    </form>
  );
}

export default GridContainer;
