const SearchItem = ({ city, onClick }) => {
  return (
    <div onClick={() => onClick(city)} className="result-item">
      {city.name}
    </div>
  );
};

export default SearchItem;
