import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as CanvasTexture, c as Vector2, d as require_jsx_runtime, i as useFrame, n as OrbitControls, o as LatheGeometry, r as Canvas, s as SRGBColorSpace, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { o as cn } from "./navbar-BXDXH8X9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bottle-scene-BeZiSt0j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profiles = {
	slim: {
		body: [
			[0, 0],
			[.34, 0],
			[.38, .04],
			[.36, .1],
			[.34, .22],
			[.36, 1.22],
			[.3, 1.42],
			[.16, 1.58],
			[.14, 1.84],
			[.14, 1.96]
		],
		waterTop: 1.48,
		capY: 2.08,
		capR: .155,
		capH: .22,
		labelY: .72,
		labelH: .42,
		labelR: .365
	},
	tall: {
		body: [
			[0, 0],
			[.4, 0],
			[.45, .05],
			[.42, .12],
			[.4, .24],
			[.42, 1.45],
			[.34, 1.68],
			[.18, 1.86],
			[.16, 2.12],
			[.16, 2.24]
		],
		waterTop: 1.72,
		capY: 2.36,
		capR: .175,
		capH: .24,
		labelY: .82,
		labelH: .48,
		labelR: .425
	},
	family: {
		body: [
			[0, 0],
			[.52, 0],
			[.56, .06],
			[.54, .14],
			[.52, .26],
			[.54, 1.55],
			[.42, 1.78],
			[.22, 1.96],
			[.2, 2.18],
			[.2, 2.3]
		],
		waterTop: 1.8,
		capY: 2.42,
		capR: .21,
		capH: .24,
		labelY: .88,
		labelH: .5,
		labelR: .545
	},
	jar: {
		body: [
			[0, 0],
			[.72, 0],
			[.78, .08],
			[.76, .18],
			[.74, 1.7],
			[.7, 1.9],
			[.42, 2.05],
			[.38, 2.18]
		],
		waterTop: 1.85,
		capY: 2.32,
		capR: .4,
		capH: .18,
		labelY: 1.05,
		labelH: .55,
		labelR: .76
	},
	crate: {
		body: [
			[0, 0],
			[.34, 0],
			[.38, .04],
			[.36, .1],
			[.34, .22],
			[.36, 1.22],
			[.3, 1.42],
			[.16, 1.58],
			[.14, 1.84],
			[.14, 1.96]
		],
		waterTop: 1.48,
		capY: 2.08,
		capR: .155,
		capH: .22,
		labelY: .72,
		labelH: .42,
		labelR: .365
	}
};
function makeLabelTexture() {
	const canvas = document.createElement("canvas");
	canvas.width = 1024;
	canvas.height = 512;
	const ctx = canvas.getContext("2d");
	if (!ctx) return null;
	const g = ctx.createLinearGradient(0, 0, 0, 512);
	g.addColorStop(0, "#163a5c");
	g.addColorStop(1, "#0d2740");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 1024, 512);
	ctx.fillStyle = "#d7c4a3";
	ctx.fillRect(0, 28, 1024, 4);
	ctx.fillRect(0, 480, 1024, 4);
	ctx.fillStyle = "#3aa0d8";
	ctx.beginPath();
	ctx.moveTo(140, 150);
	ctx.bezierCurveTo(190, 210, 210, 280, 140, 340);
	ctx.bezierCurveTo(70, 280, 90, 210, 140, 150);
	ctx.fill();
	ctx.fillStyle = "#ffffff";
	ctx.font = "600 92px Geist, ui-sans-serif, sans-serif";
	ctx.fillText("Vantara", 250, 250);
	ctx.font = "500 28px Geist, ui-sans-serif, sans-serif";
	ctx.fillStyle = "#c9d7e0";
	ctx.fillText("PREMIUM WATER", 250, 300);
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.anisotropy = 8;
	tex.needsUpdate = true;
	return tex;
}
function BottleMesh({ kind }) {
	const group = (0, import_react.useRef)(null);
	const profile = profiles[kind];
	const labelTex = (0, import_react.useMemo)(() => makeLabelTexture(), []);
	const bodyGeom = (0, import_react.useMemo)(() => {
		const pts = profile.body.map(([x, y]) => new Vector2(x, y));
		return new LatheGeometry(pts, 64);
	}, [profile]);
	const waterGeom = (0, import_react.useMemo)(() => {
		const inner = profile.body.filter(([, y]) => y <= profile.waterTop).map(([x, y]) => new Vector2(Math.max(.001, x * .9), y + .02));
		inner.push(new Vector2(0, profile.waterTop));
		return new LatheGeometry(inner, 48);
	}, [profile]);
	useFrame((_, delta) => {
		const d = Math.min(delta, .05);
		if (group.current) group.current.rotation.y += d * .35;
	});
	(0, import_react.useEffect)(() => {
		return () => {
			bodyGeom.dispose();
			waterGeom.dispose();
			labelTex?.dispose();
		};
	}, [
		bodyGeom,
		waterGeom,
		labelTex
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: [
			0,
			-1.05,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: waterGeom,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#6ebbd4",
					roughness: .18,
					metalness: .02,
					transparent: true,
					opacity: .72
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: bodyGeom,
				castShadow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#eef8fc",
					roughness: .06,
					metalness: .04,
					clearcoat: 1,
					clearcoatRoughness: .08,
					transparent: true,
					opacity: .22,
					depthWrite: false
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					profile.labelY,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					profile.labelR,
					profile.labelR,
					profile.labelH,
					64,
					1,
					true
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					map: labelTex,
					roughness: .45,
					metalness: .05,
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					profile.capY,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					profile.capR,
					profile.capR,
					profile.capH,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#1e4d8c",
					roughness: .35,
					metalness: .1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					profile.capY + profile.capH * .42,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					profile.capR * .92,
					profile.capR * .92,
					.04,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#163a72",
					roughness: .3
				})]
			})
		]
	});
}
function Scene({ kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#e4eee8"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#fff4e0",
			"#1b4332",
			.9
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .55 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				3.2,
				5.4,
				2.4
			],
			intensity: 2.2,
			color: "#fff1d0",
			castShadow: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-3,
				2,
				-2
			],
			intensity: .7,
			color: "#9ad0c2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
			position: [
				0,
				6,
				3
			],
			intensity: 14,
			angle: .4,
			penumbra: .85,
			color: "#ffffff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottleMesh, { kind }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				0,
				-1.12,
				0
			],
			opacity: .4,
			scale: 6,
			blur: 2.4,
			far: 3.5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enablePan: false,
			enableZoom: false,
			minPolarAngle: Math.PI / 3.1,
			maxPolarAngle: Math.PI / 1.7
		})
	] });
}
function BottleViewer({ kind, className }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("bg-mist", className),
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("touch-none", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			dpr: [1, 1.75],
			camera: {
				position: [
					1.15,
					.55,
					3.1
				],
				fov: 32
			},
			gl: {
				antialias: true,
				alpha: false
			},
			shadows: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { kind })
		})
	});
}
//#endregion
export { BottleViewer as t };
