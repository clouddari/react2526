import { useState, useEffect } from "react";

const API = `https://jsonplaceholder.typicode.com/users`;

const List = ({ onEmpty }) => {
  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchList = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      setList(response);
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (loaded && list.length === 0 && onEmpty) onEmpty();
  }, [loaded, list.length, onEmpty]);

  const updateItemName = async (item) => {
    const name = prompt(`Enter new name`, `Володимир Зеленський`);

    if (name === null) return;
    if (!name.trim()) return;

    setList((prevState) =>
      prevState.map((el) => (el.id === item.id ? { ...el, name } : el))
    );
  };

  const deleteItem = async (item) => {
    setList((prevState) => prevState.filter((el) => el.id !== item.id));
  };

  return list.length ? (
    <ul>
      {list.map((item) => (
        <li style={{ paddingBottom: "12px", listStyle: "none" }} key={item.id}>
          {item.name}{" "}
          <button onClick={() => updateItemName(item)}>Update</button>{" "}
          <button
            style={{
              backgroundColor: "darkred",
              border: "2px solid darkred",
              color: "white",
            }}
            onClick={() => deleteItem(item)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  ) : null;
};

export default List;
