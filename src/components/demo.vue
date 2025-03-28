<template>
    <div id="3d">
        <!-- {{ title }} -->
    </div>
</template>

<script setup lang="ts">
    // import { ref } from "vue";
    import * as THREE from 'three';
    // 控制器
    import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
    defineProps({
        title: {
            type: String,
            default: "Hello World"
        }
    });

    // 创建场景
    const scene = new THREE.Scene()

    // 几何体
    const geometry = new THREE.BoxGeometry(100,100,100)
    // 材质(MeshBasicMaterial不受光照影响)
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff, //设置材质颜色
        // transparent:true,//开启透明
        // opacity:0.5,//设置透明度
    })
    // 网格模型
    const mesh = new THREE.Mesh(geometry,material)
    // 设置网格模型位置
    // mesh.position.set(0,0,0)
    // 添加到三维场景里面
    scene.add(mesh)

    // 辅助线
    const axesHelper = new THREE.AxesHelper(250)
    scene.add(axesHelper)
    // axesHelper.visible = false

    // 可视化点光源
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.intensity = 10.0;//光照强度
    pointLight.decay = 0.0 // 不随着距离改变而减弱
    pointLight.position.set(0,200,0)
    scene.add(pointLight)
    const pointLightHelper = new THREE.PointLightHelper(pointLight,10)
    scene.add(pointLightHelper)

    // 环境光
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    // 平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(80, 100, 50);
    directionalLight.target = mesh;
    scene.add(directionalLight);

    // 设置透视相机
    const width = window.innerWidth
    const height = window.innerHeight
    // const width = 800
    // const height = 600
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)
    camera.position.set(292, 223, 185)
    camera.lookAt(0,0,0)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width,height)
    renderer.render(scene,camera)
    document.body.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera,renderer.domElement)
    controls.addEventListener('change',function() {
        renderer.render(scene,camera)
        // console.log(camera.position, 'camera.position');
    })




</script>

<style scoped>
    
</style>