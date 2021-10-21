import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './config//particle-config'
import styles from './components/Main/styles.module.css'


export default function ParticleBackground(){
    return(
        <Particles params={{
             
  "particles": {
    "number": {
      "value": 46,
      "density": {
        "enable": false,
        "value_area": 1262.6362266116362
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4.872463273808071,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 126.26362266116361,
      "color": "#ffffff",
      "opacity": 0.12827296486924183,
      "width": 1.4430708547789706
    },
    "move": {
      "enable": true,
      "speed": 2.810236182596568,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 131.86813186813188,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8
       },

      "repulse": {
        "distance": 200,
        "duration": 0.4
      },

      "push": {
        "particles_nb": 4
      },
      
      "remove": {
        "particles_nb": 2
      }
    }
},
  "retina_detect": true
    }
        }
    
    className={styles.tsparticles}></Particles>
    );
}