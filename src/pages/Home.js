import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import myImage from '../assets/asd.png'; // Adjust the path as needed

const gems = [
  {
    id: 1,
    name: "Ruby",
    description: "A beautiful red gemstone",
    image: "https://example.com/ruby.jpg",
  },
  {
    id: 2,
    name: "Sapphire",
    description: "A stunning blue gemstone",
    image: "https://example.com/sapphire.jpg",
  },
  // Add more gems as needed
];

const Home = () => {
  return (
    <div className="bg-secondary">
      <img src={myImage} alt="Description" />
      <Typography variant="h2" component="h1" gutterBottom>
        Gem Display Platform
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Discover and Explore Beautiful Gems
      </Typography>
      <div className="flex flex-wrap justify-center">
        {gems.map((gem) => (
          <Card className="" key={gem.id}>
            <CardMedia className="" image={gem.image} title={gem.name} />
            <CardContent>
              <Typography variant="h6" component="div">
                {gem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {gem.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        className="text-secondary mt-4"
      >
        Explore More
      </Button>
    </div>
  );
};

export default Home;
