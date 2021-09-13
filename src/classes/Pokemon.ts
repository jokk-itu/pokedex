export class Pokemon {

	private readonly _id : number;
	private readonly _name : string;
	private readonly _image : string;

	constructor(id : number, name : string) {
		this._id = id;
		this._name = name;
		this._image = 'https://raw.githusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ id +'.png';
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

}