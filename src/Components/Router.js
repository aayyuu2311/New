import Slider from "../Components/Slider";
const App = () => {
  const slides = [
    { url: "/image-1.jpg", title: "beach" },
    { url: "/image-2.jpg", title: "boat" },
    { url: "/image-3.jpg", title: "forest" },
    { url: "/image-4.jpg", title: "city" },
    { url: "/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default App;