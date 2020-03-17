import React from 'react';
import styled from '@emotion/styled';

const pokemon = {
  name: 'metapod',
  id: '11'
};

const Card = styled.article`
  height: 60%;
  width: 60%;
  padding: 0 5%;
  background-color: #93bb3a;
  border-radius: 60px;
  display: flex;
  flex-flow: column nowrap;
`;

export default function PokemonCard() {
  const pokemonIdWithZeroes = ('00' + pokemon.id).slice(-3);
  const imageSrc = `https://github.com/marwinburesch/pokemon.json/blob/master/images/${pokemonIdWithZeroes}.png?raw=true`;

  return (
    <Card>
      <header>
        <div>
          <h2>{`#${pokemonIdWithZeroes}`}</h2>
          <h1>{pokemon.name.toUpperCase()}</h1>
        </div>
        <img src={imageSrc} alt={`pokemon #${pokemon.id}`} />
      </header>
    </Card>
  );
}
