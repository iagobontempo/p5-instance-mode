import P5 from 'p5';

/**
 * 
 * @param {P5} p 
 */

export default function sketch(p) {

  const x = 100;
  const y = 100;


  p.setup = () => {
    p.createCanvas(200, 200);
  };
  
  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);

  };
};