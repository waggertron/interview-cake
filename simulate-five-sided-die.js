class Die {
	constructor(sides) {
		this.sides = sides;
	}
	roll() {
		return Math.floor(Math.random() * this.sides + 1);
	}
	test(count = 1000) {
		const expected = Array.from({length: this.sides}).map((_, index) => [index + 1, (1/this.sides)]);
		const rolls = Array.from({length: count}).map(() => this.roll());
		const initialFreq = Array.from({length: this.sides}).map(() => 0);
		const freq = rolls.reduce((counts, roll) => counts.slice()[roll -1]++, initialFreq);
		const occuranceRates = freq.map(occurance => occurance/rolls);
		const results = expected.map(([num,expectedRate], index) => [num, expectedRate,occuranceRates[index]]);
		for (const [num, expected, actual] of results) {
			console.log(JSON.stringify({num, expected,actual}, null, 4));
		}


	}
}

const die6 = new Die(6);
console.log(die6.test(10));
