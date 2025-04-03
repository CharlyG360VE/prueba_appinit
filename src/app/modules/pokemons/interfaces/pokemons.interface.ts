export interface IPokemonListResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  IPokemon[];
}

export interface IPokemon {
  name: string;
  url:  string;
}

export interface IPokemonDetailResponse {
  abilities:                IAbility[];
  base_experience:          number;
  cries:                    ICries;
  forms:                    ISpecies[];
  game_indices:             IGameIndex[];
  height:                   number;
  held_items:               any[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    IMove[];
  name:                     string;
  order:                    number;
  past_abilities:           any[];
  past_types:               any[];
  species:                  ISpecies;
  sprites:                  ISprites;
  stats:                    IStat[];
  types:                    IType[];
  weight:                   number;
}

export interface IAbility {
  ability:   ISpecies;
  is_hidden: boolean;
  slot:      number;
}

export interface ISpecies {
  name: string;
  url:  string;
}

export interface ICries {
  latest: string;
  legacy: string;
}

export interface IGameIndex {
  game_index: number;
  version:    ISpecies;
}

export interface IMove {
  move:                  ISpecies;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: ISpecies;
  order:             number | null;
  version_group:     ISpecies;
}

export interface GenerationV {
  "black-white": ISprites;
}

export interface GenerationIv {
  "diamond-pearl":        ISprites;
  "heartgold-soulsilver": ISprites;
  platinum:               ISprites;
}

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
  showdown:           ISprites;
}

export interface ISprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          ISprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface RedBlue {
  back_default:      string;
  back_gray:         string;
  back_transparent:  string;
  front_default:     string;
  front_gray:        string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold:    Gold;
  silver:  Gold;
}

export interface Crystal {
  back_default:            string;
  back_shiny:              string;
  back_shiny_transparent:  string;
  back_transparent:        string;
  front_default:           string;
  front_shiny:             string;
  front_shiny_transparent: string;
  front_transparent:       string;
}

export interface Gold {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald:             OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire":     Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny:   string;
}

export interface Home {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female:  null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface IStat {
  base_stat: number;
  effort:    number;
  stat:      ISpecies;
}

export interface IType {
  slot: number;
  type: ISpecies;
}

export interface IPokemonDetail {
  abilities: string[];
  moves: string[];
  pictures: string[];
}

