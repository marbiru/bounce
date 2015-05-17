// the specs for the levels are determined through a levels_array.

// order of elements:
// 0 level number,
// 1 gravity,
// 2 bounce factor,
// 3 starting y co-ordinate
// 4 starting x velocity
// 5 starting y velocity
// 6 instructions
// 7 victory messages

level_1_array = [
    1,
    0.2,
    0.99,
    200,
    0,
    1,
    "Press 'down' key to increase gravity.<br /> Try to bounce the ball so high it flies off the screen!",
];

level_2_array = [
	2,
	0.25,
	0.7,
	400,
	0,
	1,
	"Nice work! But it's only going to get harder now.",
];

level_3_array = [
	3,
	0.3,
	0.7,
	400,
	0,
	1,
	"Phew! I can't believe you did that.",
];

level_4_array = [
	4,
	0.4,
	0.65,
	450,
	0,
	1,
	"I'm not going to lie, I'm not 100% sure this level is winnable."
];


levels_array = [
	level_1_array,
	level_2_array,
	level_3_array,
	level_4_array,
];