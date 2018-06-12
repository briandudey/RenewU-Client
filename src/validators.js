export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
	value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
	value.trim() === value ? undefined : 'Cannot start or end with whitespace';
/*
 * There may be some value in a little documentation around `length` and that it supports `max` and `min`
 *
 * Alternatively, you could do:
 *
 * 	{max,min} => value => {
 *
 * instead of
 *
 * 	length => value => {
 */
export const length = length => value => {
	if (length.min && value.length < length.min) {
		return `Must be at least ${length.min} characters long`;
	}
	if (length.max && value.length > length.max) {
		return `Must be at most ${length.max} characters long`;
	}
};
/*
 * This validator probably warrants a little documentation. It's not
 * immediately obvious how one is supposed to use it
 */
export const matches = field => (value, allValues) =>
	field in allValues && value.trim() === allValues[field].trim()
		? undefined
		: 'Does not match';
