import React, { useEffect, useState } from 'react'
import '../Styles/Products.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { jsPDF } from "jspdf";
function Products() {
  const data = 
  [
    {
        name : 'Wedge Anchor',
    },
    {
        name : 'Eye Hook Bolt',
    },
    {
        name : 'Rawl Bolt',
    },
    {
        name : 'Drop in Anchor',
    },
    {
        name : 'Chemical Fastner',
    },
    {
        name : 'Pin Type Fastner (Zebra)',
    },
    {
        name : 'Metal Frame Anchor',
    },
    {
        name : 'Metal Sleeve Anchor',
    },
    {
        name : 'Nylon Sleeve Anchor (Flange Head)',
    },
    {
        name : 'Nylon Sleeve Anchor (CSK Head)',
    },
    {
        name : 'Hammer Nylon Frame Fixing Anchor'
    },
    {
        name : 'Eye Bolt DIN 580'
    },
    {
        name : 'Eye Nut DIN 582'
    },
    {
        name : 'Wire Rope Clip DIN 741'
    },
    {
        name : 'US Type Malleable Wire Rope Clip'
    },
    {
        name : 'Malleable Wire Rope Clip Type A'
    },
    {
        name : 'European Type Large D Shackle'
    },
    {
        name : 'Commercial Type Malleable Turnbuckle'
    }
  ]

  const [currentSelectedData, setCurrentSelectedData] = useState(new Set())

  const gen = (e) => {
    let set = new Set(currentSelectedData)
    set.add(e)
    setCurrentSelectedData(set)
  } 

  return (
    <>
        <div id="allProducts">
            {
                data.map((e) => {
                    return (
                        <>
                            <div className='product'>
                                <div className='imagesCollection'>
                                    <LazyLoadImage
                                        className='main'
                                        src={process.env.PUBLIC_URL+'15092597.jpg'} // use normal <img> attributes as props
                                        effect="blur"
                                    />
                                    <span className='sidesCollection'>
                                    <LazyLoadImage
                                        className='sides'
                                        src={process.env.PUBLIC_URL+'15092597.jpg'} // use normal <img> attributes as props
                                        effect="blur"
                                    />
                                    <LazyLoadImage
                                        className='sides'
                                        src={process.env.PUBLIC_URL+'15092597.jpg'} // use normal <img> attributes as props
                                        effect="blur"
                                    />
                                    <LazyLoadImage
                                        className='sides'
                                        src={process.env.PUBLIC_URL+'15092597.jpg'} // use normal <img> attributes as props
                                        effect="blur"
                                    />
                                    <LazyLoadImage
                                        className='sides'
                                        src={process.env.PUBLIC_URL+'15092597.jpg'} // use normal <img> attributes as props
                                        effect="blur"
                                    />
                                    </span>
                                    
                                </div>
                                <div className='productData'>
                                    <h1>{e.name}</h1>
                                    <button onClick={() => gen(e.name)}>Add to Quotation</button>
                                </div>
                            </div>
                            <span className='lineSep'></span>
                        </>
                        
                    )
                })
            }


            
        </div>
    </>
    
  )
}

export default Products