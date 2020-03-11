export default interface IFile {
	name: string;
	type: string;
	size: number;
	content?: Buffer;
	// eslint-disable-next-line semi
}
