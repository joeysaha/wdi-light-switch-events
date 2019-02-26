document.addEventListener('DOMContentLoaded',() => {
  const body = document.querySelector('body');
  const status = document.querySelector('.status')
  const lightSwitch = document.querySelector('.switch');
  lightSwitch.addEventListener('click', ()=> {
    if (lightSwitch.classList.contains('on')) {
      lightSwitch.classList.remove('on');
      lightSwitch.classList.add('off');
      body.classList.remove('light');
      body.classList.add('dark');
      status.innerText = 'Hey, who turned off the lights?';
    } else {
      lightSwitch.classList.remove('off');
      lightSwitch.classList.add('on');
      body.classList.remove('dark');
      body.classList.add('light');
      status.innerText = 'It\'s so bright in here!';
    }
  });
});
