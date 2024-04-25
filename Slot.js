funtion random()
{
  //Define a list of symbols to use as the cards for our memory game
  const symbols = ['🍎', '🍇', '🍓', '🍌', '🍒', '🍊', '🍋', '🍍'];
  
  //calculate the total number of cards needed, which is 2x the array 
  const totalCards = symbols.length * 2;
  
  //get HTML element where the cards will appear
  const gameGrid = document.getElementById('image-grid');
  
  //Initialize an array to store the card elements
  const cards = [];
  
  //Populate the cards array with pairs of matching card elements
  for(let i = 0; i < symbols.length; i++)
  {
  	cards.push(createCard(symbols[i]));
  	cards.push(createCard(symbols[i]));
  }
  //shuffle the cards to randomize their order before going into grid
  
  shuffle(cards);
  
  //Add cards to the grid
  cards.forEach(function(card)
  {
  	gameGrid.appendChild(card);
  });
  //Create card element with given symbol
  function createCard(symbol)
  {
  	const card = document.createElement('div');
  	card.classList.add('card');
  	card.innerHTML = symbol;
  	return card;
  }
  //Create function for shuffling using Fisher-Yates Algorithm
  function shuffle(array)
  {
  	//iterate over the array starting fomr the last element and moving towards the first
  	for(let i = array.length - 1; i > 0; i--)
  	{
  		//generate a random index 'j' where 0 <= j <= i--
  		const j = Math.floor(Math.random() * (i + 1));
  		//Swap the values using destructuring
  			[array[i], array[j]] = [array[j], array[i]];
  	}
  }
}
