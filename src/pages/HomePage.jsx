import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { Spinner } from "../components/Spinner";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  let API_URL = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);

  //api call using react axios
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setItems(data);
      console.table(data);
    } catch (error) {
      console.log(`Api Fetch Home Page Error => ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="max-w-[1280px] m-auto flex flex-wrap justify-center">
        {loading ? (
          <Spinner />
        ) : (
          items.map((item) => <Product key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};
