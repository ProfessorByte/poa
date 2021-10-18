import "./App.css";
import Header from "./components/HeaderComponent";
import Video from "./components/VideoComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Video 
        listId={1}
        listVideos={[
          {
            videoId: 1,
            title: "titulo 1",
            videoLink: "https://www.youtube.com/embed/PhQdskMxNRQ"
          }
        ]}
      />
    </div>
  );
}

export default App;
