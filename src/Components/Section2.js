import React from 'react'
import { motion } from 'framer-motion'
function Section2({variants}) {

    const secText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    const t = secText.split(" ").map(e => {
        return (
            <span>
                <motion.p 
                    variants={variants}
                    initial="initial"
                    whileInView="whileInView"
                    transition='transition'
                    // initial = {{
                    //     y : '100%',
                    // }}
                    // transition={{
                    //     delay : 0.1,
                    //     ease: "linear",
                    //     duration: 0.5
                    // }}
                    // whileInView = {{
                    //     y : 0,
                    // }}
                    // viewport={{ once: true, amount: 0.1 }}
                    >{e}
                </motion.p>
        </span>
        )
    })


  return (
    <section id="second">
            <div id="secondLeftContent">
                <span id='secondLeftContentIntro'>
                    <motion.p 
                    variants={variants}
                    initial="initial"
                    whileInView="whileInView"
                    transition='transition'
                    >Hello, This is HOLTERS</motion.p>
                </span>
                <span id='secondLeftContentText'>
                    <span id='all'>{t}</span>
                
                <motion.a href="#"
                initial = {{
                    y : '100%'
                }}
                transition={{
                    delay : 2,
                    ease: "linear",
                    duration: 0.5
                  }}
                animate = {{
                    y : 0
                }}>
                    <p>Find the Best Here</p>
                    <span id="line">
                    </span>
                </motion.a>
                </span>
                
            </div>
    </section>
  )
}

export default Section2