import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useGetPosts from "../apis/getpost";
import usePostPosts from "../apis/postposts";
const Contact = () => {
  const history = useHistory();
  const location = useLocation();
  const { loading, data, getPosts } = useGetPosts();
  const { loading: postLoading, data: postdata, postPosts } = usePostPosts();

  React.useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <h1>Hey!! {location.pathname.replace("/", "")} Us</h1>
      {location.pathname === "/contact/manas" ? (
        <p>welcome,how can we help you</p>
      ) : (
        <p>please try again</p>
      )}
      <button onClick={() => history.push("/")}>Home Page</button>
      <button className="btn" onClick={history.goBack}>
        go back
      </button>

      <div style={{ maxHeight: "80vh, overFlow:auto" }}>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div
            style={{
              border: "2px solid black",
              height: "90vh",
              overflow: "auto",
              padding: "10px",
              background: "antiquewhite",
            }}
          >
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      border: "2px solid red",
                      padding: " 10px",
                      borderBottomLeftRadius: "25px",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ margin: "20px" }}>
        <button
          onClick={() =>
            postPosts({
              id: 1,
              title: "Hey this is new title",
              body: "this is new body",
            })
          }
        >
          {postLoading ? "Loading..." : "Post Data"}
        </button>
      </div>
    </>
  );
};
export default Contact;
