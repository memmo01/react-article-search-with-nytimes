import React from "react";
import TopStorySort from "../components/topStorySort";

class Topstories extends React.Component {
  constructor() {
    super();
    this.state = {
      topStories: []
    };
  }

  componentDidMount() {
    let key = "9c50663a3f8a41f0aa37b27c629a17aa";

    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=${key}`)
      .then(results => results.json())
      .then(data => {
        this.setState({
          topStories: data.results
        });
      });
  }

  render() {
    let xy;
    xy = this.state.topStories.map(stories => {
      return <TopStorySort story={stories} />;
    });
    return (
      <div className="topStories">
        <h2 id="tsTitle">Top Stories</h2>
        {xy}
      </div>
    );
  }
}

export default Topstories;
