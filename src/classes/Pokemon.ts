import { PokeType } from './PokeType';
import { PokeMove } from './PokeMove';
import { PokeStat } from './PokeStat';
import { PokeAbility } from './PokeAbility';

export class Pokemon {
	private readonly _id : number;
	private readonly _name : string;
	private readonly _image : string;

	private readonly _xp : number;
	private readonly _weight : number;
	private readonly _height : number;

	private readonly _abilities : PokeAbility[];
	private readonly _moves : PokeMove[];
	private readonly _types : PokeType[];
	private readonly _stats : PokeStat[];

	constructor(
		id : number,
		name : string,
		height? : number,
		weight? : number,
		xp? : number,
		moves? : PokeMove[],
		types? : PokeType[],
		stats? : PokeStat[],
		abilities? : PokeAbility[]) {
		this._id = id;
		this._name = name;
		this._image = '/resources/pokemon/' + id +'.png';
		this._moves = moves;
		this._types = types;
		this._weight = weight;
		this._height = height;
		this._stats = stats;
		this._abilities = abilities;
	}

	get id() : number {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get image(): string {
		return this._image;
	}

	get weight() : number {
		return this._weight;
	}

	get height() : number {
		return this._height;
	}

	get xp() : number {
		return this._xp;
	}

	get moves() : PokeMove[] {
		return this._moves;
	}

	get types() : PokeType[] {
		return this._types;
	}

	get stats() : PokeStat[] {
		return this._stats;
	}

	get abilities() : PokeAbility[] {
		return this._abilities;
	}

	static async instance(id : number) : Promise<Pokemon> {
		const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
		const res = await fetch(url);
		const data = await res.json();
		return new Pokemon(
			data.id,
			data.name,
			data.height,
			data.weight,
			data.base_experience,
			data.moves.map(move => new PokeMove(move.move.name, move.move.url)),
			data.types.map(type => new PokeType(type.slot, type.type.name, type.type.url)),
			data.stats.map(stat => new PokeStat(stat.base_stat, stat.stat.name, stat.stat.url)),
			data.abilities.map(ability => new PokeAbility(ability.ability.name, ability.ability.url)));
	}

	static defaultInstance() : Pokemon {
		return new Pokemon(1,'bulbasaur');
	}
}