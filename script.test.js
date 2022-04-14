const { hands, player1, player2, getHandss } = require("./script");

//1. 'toBe()' OR 'toEqual()'
describe("player1 name tobe adam", () => {
  test("player1", () => {
    expect(player1.name).toBe("adam");
  });
});
describe("Hands to have rock, paper, scissors", () => {
  test("hands", () => {
    expect(hands).toEqual(["rock", "paper", "scissor"]);
  });
});

//2.'toHaveLength()'
describe("hands to have length of 3", () => {
  test("hands", () => {
    expect(hands).toHaveLength(3);
  });
});

//3. 'toBeTruthy()'
describe("player2 to be truthy", () => {
  test("player2", () => {
    expect(player2.name).toBeTruthy();
  });
});

//4. 'toHaveBeenCalled()'
describe('getHands', () => {
    test('test hands not equal to rock', () => {
      const hand2 = jest.fn();
      getHandss(hand2, 'paper');
      expect(hand2).toHaveBeenCalled();
    });
  })
  
//5. 'toHaveReturned()'
describe("Get hand to have returned", () => {
  test("gethand", () => {
    const getHand = jest.fn(() => true);
    getHand();
    expect(getHand).toHaveReturned();
  });
});

