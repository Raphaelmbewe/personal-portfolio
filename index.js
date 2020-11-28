var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var str = 'My full names are Raphael Limbikani Mbewe I\'m a junior software developer in web and mobile applications development, currently living in Zambia. I\'m looking forward to collaborating with people on different projects, Seeking growth in my tech career that\'s my main goal, I love being a team player I am a strong believer in teamwork, respectful, and believes in all my teammates. I am open to any project provided it gives me growth in a positive way';
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