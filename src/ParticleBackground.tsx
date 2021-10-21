import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './config//particle-config'
import styles from './components/Main/styles.module.css'


export default function ParticleBackground(){
    return(
        <Particles params={particlesConfig} className={styles.tsparticles}></Particles>
    );
}