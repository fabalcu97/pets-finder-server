import React, { Fragment, PureComponent } from "react";

import "./styles.scss";
import PostCard from "../../components/PostCard";

class SearchScreen extends PureComponent {
  render() {
    return (
      <Fragment>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Fragment>
    );
  }
}

export default SearchScreen;
