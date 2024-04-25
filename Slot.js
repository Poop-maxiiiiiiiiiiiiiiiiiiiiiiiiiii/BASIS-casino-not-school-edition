funtion random()
{
  
  const symbols = ["🍕","🍟","🥘","🧆","🥖","🍔","🧀","🗿"];

  function shuffle(array)
  {
  	
  	for(let i = array.length - 1; i > 0; i--)
      {
  		const j = Math.floor(Math.random() * (i + 1));
  			[array[i], array[j]] = [array[j], array[i]];
  	}
  }
  function output()
  {
    shuffle();
    document.getElementById("slotone").innerHTML = symbol[0];
    shuffle();
    document.getElementById("slottwo").innerHTML = symbol[0];
    shuffle();
    document.getElementById("slotthree").innerHTML = symbol[0];
  }
}
