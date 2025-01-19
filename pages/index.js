import React from "react";
import Card from "../components/Card";

const Home = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      imageUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
