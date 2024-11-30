import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TwitterCard from "../components/TwitterCard";
import tweetData from "../data/tweets.json";
import Counter from "../components/counter-input/Counter";
import TextInput from "../components/counter-input/TextInput";
import { useState } from "react";

const Home = () => {
  const [tweets, setTweets] = useState(tweetData);

  const addNewTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      author: "Daniela",
      content: content,
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center mt-2">Bienvenidos a nuestra App</h1>
        <TextInput sendTweet={addNewTweet}></TextInput>
        <div>
          {tweets.map((tweet) => {
            return (
              <TwitterCard
                key={tweet.id}
                author={tweet.author}
                content={tweet.content}
              ></TwitterCard>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
