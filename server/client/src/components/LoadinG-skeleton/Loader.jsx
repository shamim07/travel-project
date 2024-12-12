import LoaderCard from "./LoaderCard";
const Loader = () => {
    const cards = Array.from({ length: 6 });
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((_, index) => (
          <LoaderCard key={index} />
        ))}
      </div>
    );
  };
  
  export default Loader;
  