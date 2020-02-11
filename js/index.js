
window.onload = (e) => {
  
  const {floor, round, random, abs, sin, cos, atan} = Math;

  const makeVisible = () => {

    document
      .getElementById('background')
      .style
      .display = 'block'
      ;
  }

  const randomColor = (alpha = 0.04) => {
    var color = [];
    for (var i = 0; i < 3; i++) {
      var component = Math.floor(256 * Math.random());
      color.push(component);
    }

    color.push(alpha);
    return "rgba(" + color.join(",") + ")";
  }

  const putCircle = ([x, y], radius, color) => {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, circumference, false);
    context.fill();
  }

  const revealCircle = (info) => {
    const decider = (ms) => {
      const r = info.radius * (ms - start) / info.duration;
      if (r < info.radius) {
        putCircle(info.point, r, info.color);
        window.requestAnimationFrame(decider);
      }
    };

    let start;

    window.requestAnimationFrame((ms) => {
      start = ms;
      decider(ms);
    });
  }

  const revealSpiral = (info) => {
    const decider = (ms) => {
      const time = ms - start;
      const t = 2 * atan(5 * time / info.duration) / Math.PI;
      const r = info.radius * t;
      const point = [
        x + r * cos(0.01 * info.factor * time),
        y + r * sin(0.01 * info.factor * time)
      ];

      if (time < info.duration) {
        putCircle(point, 5, info.color);
        window.requestAnimationFrame(decider);
      }
    };

    // starting coordinates
    const [x, y] = info.point;

    let start;

    window.requestAnimationFrame((ms) => {
      start = ms;
      decider(ms);
    });
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

  const render = async (n) => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    let i = 0;

    for (const {x, y} of nonRandomPoints) {
      revealCircle({
        point: [x * width, y * height],
        duration: 3000,
        spawn: 0,
        color: randomColor(),
        radius: 210
      }, true);
  
      await sleep(1000);
    }

    for (const [x, y] of randomPoints(width, height)) {
      if (!document.hidden) {

        revealCircle({
          point: [x, y],
          duration: 2000 + floor(3000 * random()),
          color: randomColor(),
          radius: 50 + Math.round(200 * Math.random())
        }, true);

        /*
        if (random() < 0.5)
          // maybe put circle here in future...
        else
          revealSpiral({
            point: [x, y],
            factor: 20,
            duration: 2000 + floor(3000 * random()),
            color: randomColor(1),
            radius: 50 + Math.round(200 * Math.random())
          }, true);
        */
      }

      await sleep(1000);

      i++;
    }
  }

  const adjustCanvas = () => {
    canvas.setAttribute("height", canvas.clientHeight);
    canvas.setAttribute("width", canvas.clientWidth);
    context = canvas.getContext("2d");
  }

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

  const nonRandomPoints = [
    {x: 0.15, y: 0.15},
    {x: 0.20, y: 0.15},
    {x: 0.30, y: 0.15},
    {x: 0.40, y: 0.15},
    {x: 0.60, y: 0.15},
    {x: 0.80, y: 0.15}
  ];

  let context;

  for (const style in styles) {
    canvas.style[style] = styles[style];
  }

  window.onresize = adjustCanvas;

  makeVisible();
  adjustCanvas();
  render(30);
  // flickTitle();
}