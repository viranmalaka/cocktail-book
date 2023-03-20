import React from 'react';
import FlexBox from '../app/components/FlexBox';
import RandomCocktailCard from '../app/components/CocktailCards/RandomCocktailCard';

const Home = () => {
  return (
    <FlexBox justifyContent="center" direction="row" wrap>
      {Array(5)
        .fill({})
        .map((a, index) => (
          <RandomCocktailCard key={index} index={`key-${index}`} />
        ))}
    </FlexBox>
  );
};

export default Home;
