# Grassroots Memory Game
## Built with vanilla JS

## Design Plan

### Functionality
- Deck of 24 cards
- Matching cards will be in pairs
- Randomized order for every game
- Player selects one card at a time, compares up to two cards per turn
- Game ends when all cards are matched

### Implementation
- Generate 12 pairs of cards
  - Card:
    - Faceup: Boolean
    - Value: Number
    - Name: String
- Duplicate to generate pairs
- Shuffle order
- Display facedown cards
- While all cards are not matched
  - Player reveals up to two cards per turn
    - Determine if selected cards are a match; flip down if not
- When game ends or is cancelled, display closing/reset prompt.