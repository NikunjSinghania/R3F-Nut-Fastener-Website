import React, { useEffect, useRef , useLayoutEffect , useState } from 'react'
import Model from './Model'
import { CubeCamera , Environment, OrbitControls} from '@react-three/drei';
import { Canvas , useThree } from '@react-three/fiber'
import { motion , stagger } from 'framer-motion'
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
gsap.registerPlugin(ScrollTrigger)


function Home() {


    const variants =  {
        initial : {
            y : '100%',
        },
        transition : {
            delay : 0.1,
            ease: "linear",
            duration: 0.5
        },
        whileInView : {
            y : 0,
        }
    }

  return (
    <>
    <Canvas
                id='canvasContainer' 
                >      
                <pointLight position={[0, 0, 0]} 
                />
                <directionalLight position={[3.3, 1.0, 4.4]} color={[168, 26, 2]} castShadow />
                <ambientLight intensity={10}/>
                <CubeCamera resolution={256} frames={Infinity}>
                {(texture) => (
                <>
                    <Model />
                </>
                )}
            </CubeCamera>
    </Canvas>
    <Section1 variants={variants} />
    <Section2 variants={variants} />
    <Section3 variants={variants} />
    <Section4 variants={variants} />
    </>
  )
}

export default Home