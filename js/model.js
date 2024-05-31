import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias : true,
    alpha: true,
});

renderer.outputEncoding = THREE.sRGBEncoding;
let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(-1.7, 0, 2.5);  // 카메라 위치 설정

// OrbitControls를 추가합니다.
let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 부드러운 회전을 위한 damping 활성화
controls.dampingFactor = 0.25;
controls.enableZoom = false;

let loader = new GLTFLoader();
loader.load('model/model_levifrog.glb', function (gltf) {
    scene.add(gltf.scene);
    //scene.background = new THREE.Color('white');

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.8);  // 색상과 강도
    scene.add(ambientLight);

    let dirLight = new THREE.DirectionalLight(0xDD33FF, 0.8);
    dirLight.position.set(0, 5, 5);  // 위치 설정
    scene.add(dirLight);

    function animate(){
        requestAnimationFrame(animate);
        controls.update(); // OrbitControls 업데이트를 추가합니다.
        renderer.render(scene, camera);
    }
    animate();
});