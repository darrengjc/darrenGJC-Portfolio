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
    //mtlLoader.setBaseUrl('/public/')
    mtlLoader.setPath('/public/')
    mtlLoader.load("room.mtl", mtlParseResult => {
      const materials = objLoader.setMaterials(mtlParseResult);
      const objLoader = new OBJLoader();
      objLoader.addMaterials(materials);
      objLoader.load(
        objPath,
        gltf => {
          const obj = gltf.scene
          obj.name = 'room'
          obj.position.y = 0
          obj.position.x = 0
          obj.receiveShadow = receiveShadow
          obj.castShadow = castShadow
          scene.add(object)

          obj.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = castShadow
              child.receiveShadow = receiveShadow
            }
          })
          resolve(obj)
        },
        undefined,
        function (error) {
          reject(error)
        }
      )
    })
  });  
}
