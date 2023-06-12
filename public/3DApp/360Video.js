import * as THREE from '../build/three.module.js';

			let camera, scene, renderer;

			let isUserInteracting = false,
				lon = 0, lat = 0,
				phi = 0, theta = 0,
				onPointerDownPointerX = 0,
				onPointerDownPointerY = 0,
				onPointerDownLon = 0,
				onPointerDownLat = 0;

			const distance = 50;

			let renderWindowSizeDamp = 0.3;

			let widthExpandWhenNested = 3;

			//init();
			//animate();
			
			const startButton = document.getElementById( 'startButton' );
			startButton.addEventListener( 'click', function () {

				init();
				animate();

			} );

			function init() {

				const container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 75, (window.innerWidth * widthExpandWhenNested) / window.innerHeight, 1, 1100 );

				scene = new THREE.Scene();

				const geometry = new THREE.SphereGeometry( 500, 60, 40 );
				// invert the geometry on the x-axis so that all of the faces point inward
				geometry.scale( - 1, 1, 1 );

				const video = document.getElementById( 'video' );
				video.play();

				const texture = new THREE.VideoTexture( video );
				const material = new THREE.MeshBasicMaterial( { map: texture } );

				const mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth * widthExpandWhenNested * renderWindowSizeDamp, window.innerHeight * renderWindowSizeDamp );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'pointerdown', onPointerDown );
				document.addEventListener( 'pointermove', onPointerMove );
				document.addEventListener( 'pointerup', onPointerUp );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = (window.innerWidth * widthExpandWhenNested) / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth * widthExpandWhenNested * renderWindowSizeDamp, window.innerHeight * renderWindowSizeDamp );

			}

			function onPointerDown( event ) {

				isUserInteracting = true;

				onPointerDownPointerX = event.clientX;
				onPointerDownPointerY = event.clientY;

				onPointerDownLon = lon;
				onPointerDownLat = lat;

			}

			function onPointerMove( event ) {

				if ( isUserInteracting === true ) {

					lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
					lat = ( onPointerDownPointerY - event.clientY ) * 0.1 + onPointerDownLat;

				}

			}

			function onPointerUp() {

				isUserInteracting = false;

			}

			function animate() {

				requestAnimationFrame( animate );
				update();

			}

			function update() {

				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.MathUtils.degToRad( 90 - lat );
				theta = THREE.MathUtils.degToRad( lon );

				camera.position.x = distance * Math.sin( phi ) * Math.cos( theta );
				camera.position.y = distance * Math.cos( phi );
				camera.position.z = distance * Math.sin( phi ) * Math.sin( theta );

				camera.lookAt( 0, 0, 0 );

				renderer.render( scene, camera );

			}