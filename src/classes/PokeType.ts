export class PokeType {
	private readonly _id : number;
	private readonly _name : string;
	private readonly _url : string;

	constructor(id : number, name : string, url : string) {
		this._id = id;
		this._name = name;
		this._url = url;
	}


	get id(): number {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get url(): string {
		return this._url;
	}
}