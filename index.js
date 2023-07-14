const firstRandomNum = Math.floor(Math.random()*6)+1;

const firstRandomImage = 'images/dice' + firstRandomNum + '.png'

document.querySelectorAll('img')[0].setAttribute('src', firstRandomImage)

const secondRandomNum = Math.floor(Math.random()* (6)+1);

const secondRandomImg = 'images/dice' + secondRandomNum + '.png'

document.querySelectorAll('img')[1].setAttribute('src', secondRandomImg)

if ( firstRandomNum > secondRandomNum){
    document.querySelector('h4').textContent = 'User 1 is the winnner'
}

else if ( firstRandomNum < secondRandomNum){
    document.querySelector('h4').textContent = 'User 2 is the winner'
}

else{
    
    setMessage(document.querySelector('h4').textContent = "It's a draw")
}
document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload(); // Reloads the current page
  });
  

