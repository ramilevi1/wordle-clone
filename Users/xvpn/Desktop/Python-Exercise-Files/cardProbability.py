import itertools

# Define the deck of cards
suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

# Generate a list of predefined card combinations
combinations = [
    ["Ace Hearts", "King Hearts", "Queen Hearts"],
    ["10 Spades", "Jack Spades", "Queen Spades"],
    # Add more combinations as needed
]

# Function to calculate the probability of a specific combination
def calculate_probability(combination):
    deck = list(itertools.product(ranks, suits))
    total_combinations = len(list(itertools.combinations(deck, 3)))
    specific_combinations = 0

    for hand in itertools.combinations(deck, 3):
        if set(combination) == set(hand):
            specific_combinations += 1

    probability = specific_combinations / total_combinations
    return probability

# Display the available card combinations
print("Available card combinations:")
for i, combo in enumerate(combinations, 1):
    print(f"{i}. {', '.join(combo)}")

# Get user input for the chosen combination
choice = int(input("Choose a combination (enter the corresponding number): "))
chosen_combination = combinations[choice]

# Calculate and display the probability
probability = calculate_probability(chosen_combination)
print(f"The probability of getting the combination {', '.join(chosen_combination)} is approximately {probability:.10f}")
