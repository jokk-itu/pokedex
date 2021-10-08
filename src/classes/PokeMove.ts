export class PokeMove {
	private readonly _name : string;
	private readonly _url : string;

	constructor(name : string, url : string) {
		this._name = name;
		this._url = url;
	}


	get name(): string {
		return this._name;
	}

	get url(): string {
		return this._url;
	}
}