export class PokeStat {
	private readonly _stat : number;
	private readonly _name : string;
	private readonly _url : string;

	constructor(stat : number, name : string, url : string) {
		this._stat = stat;
		this._name = name;
		this._url = url;
	}
}