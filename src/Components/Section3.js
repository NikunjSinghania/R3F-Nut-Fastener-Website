import React from 'react'
import { motion } from 'framer-motion'

function Section3({variants}) {

    const t = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    const firstTextSplit = t.split(" ").map(e => {
        return (
            <span>
                <motion.p  
                    variants={variants}
                    initial="initial"
                    whileInView="whileInView"
                    transition='transition'
                    >{e}
                </motion.p>
            </span>
                
        )
    })

  return (
    <section id='third'>
            <div id="thirdLeftContent">
                <span id='thirdLeftContentIntro'>
                    <motion.p 
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition='transition'
                    >A Bit of Insider</motion.p>
                </span>
                <span id='thirdLeftContentText'>
                    {firstTextSplit}
                </span>
                <motion.a href="#"
                variants={variants}
                initial="initial"
                whileInView="whileInView"
                transition='transition'>
                    <p>Find the Best Here</p>
                    <span id="line">
                    </span>
                </motion.a>
            </div>
            <div id='cardsCollection'>
            <motion.span variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition='transition'>
                <img src={process.env.PUBLIC_URL+'Group.png'}/>
                <p>Nature Of Business</p>
            </motion.span >
            <motion.span
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            transition='transition'>
                <img src={process.env.PUBLIC_URL+'Group-1.png'}/>
                <p>Year of Establishment</p>
            </motion.span >
            <motion.span
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            transition='transition'>
                <img src={process.env.PUBLIC_URL+'Group-2.png'}/>
                <p>Market Covered</p>
            </motion.span >
            <motion.span
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            transition='transition'>
                <img src={process.env.PUBLIC_URL+'Group-3.png'}/>
                <p>Name of Owner</p>
            </motion.span >
            <motion.span
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            transition='transition'>
                <img src={process.env.PUBLIC_URL+'Group-4.png'}/>
                <p>GST No</p>
            </motion.span>
                
            </div>
            

    </section>
  )
}

export default Section3