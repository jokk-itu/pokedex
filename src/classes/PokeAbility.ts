export class PokeAbility {
	private readonly _name : string;
	private readonly _url : string;

	constructor(name : string, url : string) {
		this._url = url;
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	get url(): string {
		return this._url;
	}
}