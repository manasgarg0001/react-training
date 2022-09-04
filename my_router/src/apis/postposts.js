import axios from "axios";
import { useState } from "react";

const usePostPosts = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function postPosts(data) {
    setLoading(true);
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        throw new error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    data,
    postPosts,
  };
};

export default usePostPosts;
