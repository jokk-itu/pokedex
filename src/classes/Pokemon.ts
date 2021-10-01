export class Pokemon {

	private readonly _id : number;
	private readonly _name : string;
	private readonly _image : string;
	private readonly _moves : string[];

	constructor(id : number, name : string, moves?: string[]) {
		this._id = id;
		this._name = name;
		this._image = '/' + id +'.png';
		this._moves = moves === undefined ? [] : moves;
	}

	get image(): string {
		return this._image;
	}
	get name(): string {
		return this._name;
	}
	get id() : number {
		return this._id;
	}

	get moves() : string[] {
		return [
			this._moves[Math.random() * this._moves.length],
			this._moves[Math.random() * this._moves.length]
		];
	}

	static async instance(id : number) : Promise<Pokemon> {
		const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
		const res = await fetch(url);
		const data = await res.json();
		return new Pokemon(data.id, data.name, data.moves.map(move => move.move.name));
	}
}