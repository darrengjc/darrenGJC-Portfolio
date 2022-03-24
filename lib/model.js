// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export function loadGLTFModel(
  scene,
  objPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {

    const mtlLoader = new MTLLoader();
    //mtlLoader.setPath('/room.mtl/')
    mtlLoader.load('OBJ/gaming room-0.mtl/', function( materials ) {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        objPath,
        function(object)  {
          // const obj = plane.scene
          // obj.name = 'gaming room-0'
          object.position.y = 0
          object.position.x = 0
          object.receiveShadow = receiveShadow
          object.castShadow = castShadow
          scene.add(object)

          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = castShadow
              child.receiveShadow = receiveShadow

            }
          })
          resolve(object)
         },
        undefined,
        function (error) {
          reject(error)
        }
      )
    })
  });  
}
