var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var str = 'My full names are Raphael Limbikani Mbewe I\'m a junior software developer in web and mobile applictions development,currently living in Zambia.I\'m looking forward to collaborate with people on different projects,Seeking for growth in my tech career that\'s my main goal,I love being a team player I am a strong believer of team work, respectful and believes in all my team mates. I am open for any project  provided it gives me growth in a positve way.';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = " " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = " " + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = " " + str + "|"
        n = 1;
      } else {
        p.innerHTML = " " + str
        n = 0;
      };
    }, 500);
  };
}, 60)