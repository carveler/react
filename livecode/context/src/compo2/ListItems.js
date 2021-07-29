import { useContext } from 'react';
import MyContext from '../context2/MyContext';
import Item from './Item';

export default function ListItems() {
  const context = useContext(MyContext);
  const { data, loading, error } = context;
  return (
    <div>
      <ul>
        {loading && 'Loading...'}
        {data.map((item) => {
          <Item key={item.id} name={item.name} />;
        })}
        {error && 'error'}
      </ul>
    </div>
  );
}
