import React, { useEffect , useLayoutEffect } from "react";
import { useFrame, useLoader , useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useControls } from 'leva'
import gsap from 'gsap'
// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a) 
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
function Model() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "metal_nuts.glb"
  );
  
  const t1 = gsap.timeline()

  const { camera, scene } = useThree();
  

  // camera.position.set(0,0,0)
  // camera.rotation.x = 0;
  // camera.rotation.y = 0;
  // camera.rotation.z = 0;
  useEffect(() => {
    gltf.scene.scale.set(30, 30, 30);
    //gltf.scene.position.set(0,0,0);
    // gltf.scene.traverse((object) => {
    //   if (object instanceof Mesh) {
    //     // object.castShadow = true;
    //     // object.receiveShadow = true;
    //     // object.material.envMapIntensity = 20;
    //   }
    // });
  }, [gltf]);

  const { camrotationx, camrotationy, camrotationz, campx,campy,campz,rotationx, rotationy, rotationz, px,py,pz, sx, sy, sz ,o } = useControls({ rotationx : -3.34, rotationy : -0.13, rotationz :0, px: 0,py: 0,pz: 0,camrotationx : 0, camrotationy : 0, camrotationz :0, campx: 0,campy: 0,campz: 29, sx : 0, sy : 0, sz :0,o:1  })
  
  let group = gltf.scene;
  group.rotation.x = -3.34;
  group.rotation.y = -0.13;
  group.rotation.z = 0;
  gltf.scene.position.set(0,0,0);
  camera.rotation.x = 0;
  camera.rotation.y = 0;
  camera.rotation.z = 0;
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 29;
  // group.children[0].children[0].children[0].children[0].children[0].material.wireframe = true
  group.children[0].children[0].children[0].children[0].children[0].geometry.center()
  // group.children[0].children[0].children[0].children[0].children[0].material.opacity = o
  //group.children[0].children[0].children[0].children[0].children[0].material.transparent = true

  useLayoutEffect(() => {
    t1.to(camera.position, {
      		x: 0,
      		y: 0,
      		z: 100,
      		scrollTrigger: {
            scroller : '.App',
      			trigger : "#second",
            start : "top bottom",
            end : "top top",
            scrub : true,
            immediateRender : false,
            markers : false
      		},
    })
    .to(camera.position, {
      x: 0,
      y: -0.22,
      z: 30,
      scrollTrigger: {
        scroller : '.App',
        trigger : "#third",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      },
    })
    .to(camera.position, {
      x: 0,
      y: 0,
      z: 100,
      scrollTrigger: {
        scroller : '.App',
        trigger : "#fourth",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      },
    })


    t1.to(gltf.scene.position, {
      x : 0,
      y : 0,
      z : 0,
      scrollTrigger : {
        scroller : '.App',
        trigger : "#second",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      }
    })
    .to(gltf.scene.position, {
      x : 0,
      y : 18.04,
      z : 16.76,
      scrollTrigger : {
        scroller : '.App',
        trigger : "#third",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      }
    })
    .to(gltf.scene.position, {
      x : 0,
      y : 0,
      z : 0,
      scrollTrigger : {
        scroller : '.App',
        trigger : "#fourth",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      }
    })

    
    t1.to(group.rotation, {
      x : 0,
      y : 0,
      z : 0,
      scrollTrigger : {
        scroller : '.App',
        trigger : "#second",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      }
    })
    .to(group.rotation, {
            x : 1.5,
            y : 0,
            z : 0,
            scrollTrigger : {
              scroller : '.App',
              trigger : "#third",
              start : "top bottom",
              end : "top top",
              scrub : true,
              immediateRender : false,
              markers : false
            }
          })
          .to(group.rotation, {
            x : -15.19,
            y : 0,
            z : -1.56,
            scrollTrigger : {
              scroller : '.App',
              trigger : "#fourth",
              start : "top bottom",
              end : "top top",
              scrub : true,
              immediateRender : false,
              markers : false
            }
          })

    t1.to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        scroller : '.App',
        trigger : "#second",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      },
    })
    .to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        scroller : '.App',
        trigger : "#third",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      },
    })
    .to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        scroller : '.App',
        trigger : "#fourth",
        start : "top bottom",
        end : "top top",
        scrub : true,
        immediateRender : false,
        markers : false
      },
    })
  }, [])
  // group.rotation.x = 6.20;
  // group.rotation.y = 1.10;
  // group.rotation.z = -0.12;

  group.rotation.x = rotationx;
  group.rotation.y = rotationy;
  group.rotation.z = rotationz;
  gltf.scene.position.set(px,py,pz);
  camera.rotation.x = camrotationx;
  camera.rotation.y = camrotationy;
  camera.rotation.z = camrotationz;

  camera.position.x = campx;
  camera.position.y = campy;
  camera.position.z = campz;

  // scene.position.set(sx, sy ,sz)

  return <primitive object={gltf.scene} />;
}

export default Model