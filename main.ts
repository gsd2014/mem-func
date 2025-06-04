namespace memoryGame {
    let selectedCards: number[] = [];
    
    // Function to shuffle an array
    function shuffle<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to check if selected cards match
    function checkMatch(): boolean {
        if (selectedCards.length < 2) return false;
        return selectedCards[0] === selectedCards[1];
    }

    // Example of setting up shuffled cards
    let cards = shuffle([1, 2, 3, 1, 2, 3]); // Pairs of numbers
}
