interface Filter {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalFilter = ({ filter, setFilter }: Filter) => {
  return (
    <span>
      Search:{' '}
      <input
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default GlobalFilter;
