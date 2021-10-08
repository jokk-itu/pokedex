export class PokeType {
	private readonly _id : number;
	private readonly _name : string;
	private readonly _url : string;

	constructor(id : number, name : string, url : string) {
		this._id = id;
		this._name = name;
		this._url = url;
	}
}