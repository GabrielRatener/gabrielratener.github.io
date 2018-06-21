
window.onload = (e) => {
  const {floor, random, abs} = Math;

  const 
    circumference = 2 * Math.PI,
    canvas = document.querySelector('#background canvas');

  const styles = {
    margin: "0px",
    padding: "0px",
    border: "none",
    height: "100%",
    width: "100%",
    position: "fixed",
    top: "0px",
    left: "0px",
    zIndex: "100",
    pointerEvents: "none"
  };

  let context;

  for (const style in styles) {
    canvas.style[style] = styles[style];
  }

  const randomColor = () => {
    var color = [];
    for (var i = 0; i < 3; i++) {
      var component = Math.floor(256 * Math.random());
      color.push(component);
    }

    color.push(0.04);
    return "rgba(" + color.join(",") + ")";
  }

  const putCircle = ([x, y], radius, color) => {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, circumference, false);
    context.fill();
  }

  const revealCircle = (info) => {
    const decider = () => {
      if (r < info.radius) {
        r += info.increment;
        putCircle(info.point, r, info.color)
        window.setTimeout(decider, info.tick);
      }
    };

    let r = 0;

    decider();
  }

  const sleep = (ms) => {
    return new Promise((done) => {
      window.setTimeout(done, ms);
    });
  }

  const randomPoints = function*(maxX, maxY) {
    while (true) {
      const x = floor(random() * maxX);
      const y = floor(random() * maxY);

      yield [x, y];
    }
  }

  const flickTitle = () => {
    const period = 6000;
    const title = document.getElementById('title');
    const set = (ts) => {
      const bright = floor(abs(510 * (ts % period) / period - 255));

      title.style.color = `rgb(${bright},${bright},${bright})`;
      window.requestAnimationFrame(set);
    }

    window.requestAnimationFrame(set);
  }

  const render = async (n) => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    let i = 0;



    revealCircle({
      point: [0.15 * width, 0.15 * height],
      increment: 2,
      tick: 100,
      spawn: 0,
      color: randomColor(),
      radius: 210
    }, true);

    await sleep(1000);

    for (const [x, y] of randomPoints(width, height)) {
      revealCircle({
        point: [x, y],
        increment: 2,
        tick: 100,
        spawn: 0,
        color: randomColor(),
        radius: 50 + Math.round(200 * Math.random())
      }, true);

      await sleep(1000);

      i++;
    }
  }

  function adjustCanvas() {
    canvas.setAttribute("height", canvas.clientHeight);
    canvas.setAttribute("width", canvas.clientWidth);
    context = canvas.getContext("2d");
  }

  window.onresize = adjustCanvas;

  adjustCanvas();
  render(30);
  // flickTitle();
}