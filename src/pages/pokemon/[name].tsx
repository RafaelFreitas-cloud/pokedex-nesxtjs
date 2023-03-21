/* eslint-disable @next/next/no-img-element */
import PokemonStatsCard, { IStat } from "@/components/PokemonStatsCard";
import PokemonMoveCard, { IMove } from "@/components/PokemonStatsCard copy";
import PokemonTypeCard, { IType } from "@/components/PokemonTipoCard";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "../services/api";

interface IpokemonPageProps {
  pokemon: IPokemon;
}

interface IPokemon {
  id: number;
  name: string;
  stats: IStat[];
  types: IType[];
  moves: IMove[];
  sprites: {
    front_default: string;
    other:{
      'official-artwork':{
        front_default: string;
      }
    }
  };
}

export default function PokemonPage({ pokemon }: IpokemonPageProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pokémon</title>
      </Head>
      <main className="back">
        <button onClick={() => router.push("/")}>Voltar</button>
        <div className="pokemonCard">
        <h1>
          #{pokemon.id} -{" "}
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </h1>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <div className="types">
        {pokemon.types.map((type, index) => (
            <PokemonTypeCard key={index} type={type} />
          ))}
        </div>
        <div className="stats">
          {pokemon.stats.map((stat, index) => (
            <PokemonStatsCard key={index} stat={stat} />
          ))}
        </div>
        <ul className="moves">
        {pokemon.moves.map((move, index) => (
            <PokemonMoveCard key={index} move={move} />
          ))}
        </ul>
        </div>
       
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query; //useParams do backend
  const { data: pokemon } = await api.get(`pokemon/${name}`);
  return {
    props: {
      pokemon,
    },
  };
};
