import useAxios from "./useAxios";

const App = () => {
  const { response, error, loading } = useAxios({
    method: "POST",
    url: "/posts",
    headers: {
      accept: "*/*"
    },
    data: {
      userId: 7,
      id: 777,
      title: "New Post",
      body: "This is a new post"
    }
  });

  return (
    <div className="app">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {response && response.title}
        </div>
      )}
    </div>
  );
};

export default App;
