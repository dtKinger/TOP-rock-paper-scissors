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
  let soundFile = new Audio('sound_paper.wav');
  soundFile.play();
}

function audioScissors(){
  let soundFile = new Audio('sound_scissors.wav');
  soundFile.play();
}

/*
btns.forEach(function (a) {
  a.addEventListener('click', function() {
    track = console.log(a.getAttribute('id'))
    if (track == 'audio-rock'){
      playTrack = 'sound_rock.mp3';
    } else if (track == 'audio-paper'){
      playTrack = 'sound_paper.wav';
    } else if (track == 'audio-scissors'){
      playTrack = 'sound_scissors.wav';
    }
  
    playSound(a);

  });
});
*/


/*
let audioRock = new Audio('sound_rock.mp3');
audioRock.play();
*/