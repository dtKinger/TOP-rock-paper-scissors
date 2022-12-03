/*
function playSound() {
  audioRock.play();
}
*/


// const sounds = document.getElementsByClassName('audio')

/*
function playAudio(){
  btns.forEach(a)(function(){
    soundPlay = a.getAttribute('id');
    soundPlay = new Audio(id.toString);
    soundPlay.play();

  });
};
*/

function audioRock(){
  let soundFile = new Audio('sound_rock.mp3');
  soundFile.play();
}

function audioPaper(){
  let soundFile = new Audio('sound_paper.mp3');
  soundFile.play();
}

function audioScissors(){
  let soundFile = new Audio('sound_scissors.wav');
  soundFile.play();
}

/* Using this method gives the error
"DOMException: Failed to load because 
no supported source was found". And
I can't seem to solve why.

btns.forEach(function (a) {
  a.addEventListener('click', function() {
    track = console.log(a.getAttribute('id'))
    if (track == 'rock-btn'){
      playTrack = 'sound_rock.mp3';
    } else if (track == 'paper-btn'){
      playTrack = 'sound_paper.mp3';
    } else if (track == 'paper-scissors'){
      playTrack = 'sound_scissors.wav';
    }
  
  let playSound = new Audio('playTrack');
  playSound.play();

  });
});
*/


/*
let audioRock = new Audio('sound_rock.mp3');
audioRock.play();
*/