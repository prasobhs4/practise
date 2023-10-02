import { useState } from "react";
import "./App.css";

const urlsList = [
  "https://picsum.photos/id/237/200/100",
  "https://picsum.photos/id/230/200/100",
  "https://picsum.photos/id/231/200/100",
  "https://picsum.photos/id/232/200/100",
];

const App = () => {
  const [urls, setUrls] = useState(urlsList);

  const onLeftClick = () => {
    const newUrls = [...urls];
    newUrls.push(newUrls.shift());
    setUrls(newUrls);
  };

  const onRightClick = () => {
    const newUrls = [...urls];
    newUrls.unshift(newUrls.pop());
    setUrls(newUrls);
  };

  return (
    <>
      <div>
        <img className="img-container" alt="" src={urls[0]} />
      </div>
      <div className="carousal-container">
        <button className="button" onClick={onLeftClick}>
          Left
        </button>
        {urls.map((eachUrl, index) => {
          return (
            <div className="carousal-item" key={index}>
              <img alt="" src={eachUrl} />
            </div>
          );
        })}
        <button className="button" onClick={onRightClick}>
          Right
        </button>
      </div>
    </>
  );
};

export default App;
