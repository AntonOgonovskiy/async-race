/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar),\n/* harmony export */   \"createWinner\": () => (/* binding */ createWinner),\n/* harmony export */   \"deleteCar\": () => (/* binding */ deleteCar),\n/* harmony export */   \"deleteWinner\": () => (/* binding */ deleteWinner),\n/* harmony export */   \"getCar\": () => (/* binding */ getCar),\n/* harmony export */   \"getCars\": () => (/* binding */ getCars),\n/* harmony export */   \"getWinner\": () => (/* binding */ getWinner),\n/* harmony export */   \"getWinners\": () => (/* binding */ getWinners),\n/* harmony export */   \"updateCar\": () => (/* binding */ updateCar),\n/* harmony export */   \"updateWinner\": () => (/* binding */ updateWinner)\n/* harmony export */ });\nconst server = 'http://127.0.0.1:3000';\r\nconst garage = `${server}/garage`;\r\nconst engine = `${server}/engine`;\r\nconst winners = `${server}/winners`;\r\nasync function getCars(page, limit = 7) {\r\n    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);\r\n    return {\r\n        cars: await response.json(),\r\n        count: Number(response.headers.get(\"X-Total-Count\"))\r\n    };\r\n}\r\nasync function getCar(id) {\r\n    const response = await fetch(`${garage}/:${id}`);\r\n    return response.json();\r\n}\r\nasync function deleteCar(id) {\r\n    const response = await fetch(`${garage}/:${id}`, {\r\n        method: 'DELETE',\r\n    });\r\n    return response.json();\r\n}\r\nasync function createCar(body) {\r\n    const response = await fetch(`${garage}`, {\r\n        method: \"POST\",\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(body)\r\n    });\r\n    return response.json();\r\n}\r\nasync function updateCar(id, body) {\r\n    const response = await fetch(`${garage}/:${id}`, {\r\n        method: \"PUT\",\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(body)\r\n    });\r\n    return response.json();\r\n}\r\nasync function getWinners({ page, limit = 10, sort, order }) {\r\n    const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);\r\n    return {\r\n        winners: await response.json(),\r\n        count: Number(response.headers.get(\"X-Total-Count\"))\r\n    };\r\n}\r\nasync function getWinner(id) {\r\n    const response = await fetch(`${winners}/:${id}`);\r\n    return response.json();\r\n}\r\nasync function createWinner(body) {\r\n    const response = await fetch(`${winners}`, {\r\n        method: \"POST\",\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(body)\r\n    });\r\n}\r\nasync function deleteWinner(id) {\r\n    const response = await fetch(`${winners}/:${id}`, {\r\n        method: 'DELETE',\r\n    });\r\n    return response.json();\r\n}\r\nasync function updateWinner(id, body) {\r\n    const response = await fetch(`${winners}/:${id}`, {\r\n        method: \"PUT\",\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(body)\r\n    });\r\n    return response.json();\r\n}\r\n\n\n//# sourceURL=webpack://async-race-api/./src/api/api.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view */ \"./src/view/view.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_view_view__WEBPACK_IMPORTED_MODULE_0__]);\n_view_view__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n(0,_view_view__WEBPACK_IMPORTED_MODULE_0__.renderPage)();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://async-race-api/./src/index.ts?");

/***/ }),

/***/ "./src/model/cars.ts":
/*!***************************!*\
  !*** ./src/model/cars.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCarImage\": () => (/* binding */ createCarImage),\n/* harmony export */   \"generateCars\": () => (/* binding */ generateCars),\n/* harmony export */   \"getRandomColor\": () => (/* binding */ getRandomColor),\n/* harmony export */   \"getRandomName\": () => (/* binding */ getRandomName)\n/* harmony export */ });\nconst names = ['Audi', 'BMW', 'Mercedes', 'Alpina', 'Dodge', 'Ford', 'Infinity', 'Lexus', 'Mitsubishi', 'Subaru'];\r\nconst models = ['Q8', 'M3', 'E55 AMG', 'B5', 'Charger', 'GT', 'QX', 'LFA', 'Lancer', 'BRZ'];\r\nfunction getRandomName() {\r\n    const name = names[Math.floor(Math.random() * names.length)];\r\n    const model = models[Math.floor(Math.random() * models.length)];\r\n    return `${name} ${model}`;\r\n}\r\nfunction getRandomColor() {\r\n    const letters = '0123456789ABCDEF';\r\n    let color = '#';\r\n    for (let i = 0; i < 6; i++) {\r\n        color += letters[Math.floor(Math.random() * 16)];\r\n    }\r\n    return color;\r\n}\r\nfunction createCarImage(color) {\r\n    return ` <?xml version=\"1.0\" encoding=\"utf-8\"?>\n  <!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon -->\n  <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g>\n      <g transform=\"translate(0.000000,511.000000) scale(0.100000,-0.100000)\" style=\"fill:${color}\">\n        <path\n          d=\"M4280.9,1582.3c-280.4-27.6-817.8-99.8-1009-135.9c-271.9-53.1-1070.6-316.5-1646.2-545.9c-405.7-161.4-435.5-169.9-679.7-193.3C727.1,686,179.1,592.5,157.9,571.3c-4.3-2.1-21.2-59.5-38.2-125.3C87.8,320.6,94.1,256.9,143,184.7c14.9-23.4,27.6-91.3,27.6-150.8c0-189,133.8-437.6,293.1-545.9c63.7-44.6,121.1-57.4,312.3-76.5c129.6-12.7,303.8-34,386.6-46.7c223-31.9,248.5-14.9,348.4,233.7c42.5,110.5,97.7,225.2,121.1,254.9c65.9,91.4,212.4,191.2,327.1,225.2c165.7,48.8,454.6,42.5,605.4-12.8c231.5-87.1,416.3-320.7,473.7-599c14.9-78.6,46.7-148.7,80.7-186.9l57.4-63.7l584.1-10.6c320.8-6.4,1272.4-19.1,2113.5-29.7l1529.4-19.1l48.9,46.7c25.5,25.5,68,112.6,93.5,195.4c97.7,329.2,240,520.4,460.9,624.5c104.1,48.9,144.4,55.2,342,55.2c261.3,0,405.7-38.2,556.5-150.8c133.8-95.6,203.9-208.2,265.5-416.3c57.4-199.7,93.4-250.6,182.7-250.6c136,0,469.5,229.4,524.7,359c31.9,80.7,19.1,119-63.7,167.8c-59.5,38.2-61.6,42.5-29.7,70.1c97.7,80.7,148.7,348.4,91.3,473.7c-29.7,63.7-174.2,116.8-486.4,180.6c-110.5,23.4-271.9,72.2-359,106.2C8716.1,749.7,8709.8,749.7,7892,779.4c-420.6,14.9-775.3,23.4-788.1,17c-14.9-4.2-31.9-42.5-40.4-85l-12.7-74.3L6887.2,652c-89.2,8.5-182.7,25.5-206,38.2c-70.1,36.1-539.6,380.2-830.5,607.5c-180.5,142.3-310.1,227.3-380.2,250.7c-85,27.6-206,36.1-605.4,40.4C4591,1590.9,4327.6,1588.7,4280.9,1582.3z M5260.1,1376.3c184.8-57.4,244.3-110.5,320.7-295.3l68-163.6h-72.2c-95.6,0-116.8-42.5-102-208.2l12.7-131.7l-571.4-4.2c-958-10.6-1051.5-6.4-1127.9,31.9c-76.5,40.4-95.6,89.2-146.6,380.2c-36.1,199.7-36.1,210.3,2.1,250.7c51,55.2,295.3,123.2,658.5,178.4C4448.7,1435.8,5151.8,1408.2,5260.1,1376.3z\" />\n        <path\n          d=\"M2052.6-8.7c-596.9-191.2-660.6-1002.6-102-1276.6c104.1-51,146.6-59.5,301.6-59.5c146.6,0,199.7,10.6,286.8,53.1c150.8,72.2,295.3,229.4,350.5,376c61.6,163.5,53.1,397.2-17,541.7C2723.9-72.4,2360.6,89.1,2052.6-8.7z M2462.6-272c140.2-70.1,235.8-233.7,235.8-403.6c0-42.5-25.5-129.6-57.4-193.3c-212.4-418.4-836.9-261.3-834.8,208.2C1808.3-323,2158.8-114.9,2462.6-272z\" />\n        <path\n          d=\"M2090.9-514.2c-55.2-55.2-72.2-89.2-72.2-150.8c0-61.6,17-95.6,72.2-150.8c97.7-97.7,214.5-102,314.4-10.6c59.5,53.1,70.1,76.5,70.1,161.5c0,85-10.6,108.3-70.1,161.4C2305.4-412.2,2188.6-416.5,2090.9-514.2z\" />\n        <path\n          d=\"M8178.7-15c-191.2-61.6-371.7-223-452.4-401.5c-65.9-148.7-63.7-380.2,8.5-535.3c76.5-163.6,169.9-263.4,318.6-337.8c180.6-91.3,320.8-102,509.8-44.6c129.6,38.2,172.1,63.7,274,165.7c161.4,161.4,220.9,314.4,206,524.7c-14.9,259.2-159.3,473.7-386.6,582C8541.9-6.5,8280.7,19,8178.7-15z M8505.8-252.9C8663-295.4,8816-505.7,8816-677.8c0-237.9-208.2-443.9-446.1-443.9c-186.9,0-325,82.8-407.8,242.1c-34,65.9-40.4,114.7-34,225.2c10.6,186.9,76.5,291,231.5,369.6C8280.7-225.3,8374.1-216.8,8505.8-252.9z\" />\n        <path\n          d=\"M8270.1-473.8c-78.6-34-133.8-127.5-133.8-225.2c0-91.3,118.9-210.3,210.3-210.3c163.5,0,282.5,144.4,235.8,284.6C8535.6-484.5,8397.5-416.5,8270.1-473.8z\" />\n      </g>\n    </g>\n  </svg>`;\r\n}\r\nfunction generateCars(count = 100) {\r\n    return new Array(count).fill(1).map((_) => ({ name: getRandomName(), color: getRandomColor() }));\r\n}\r\n\n\n//# sourceURL=webpack://async-race-api/./src/model/cars.ts?");

/***/ }),

/***/ "./src/model/storage.ts":
/*!******************************!*\
  !*** ./src/model/storage.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.ts\");\n\r\nconst { cars: cars, count: carsCount } = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getCars)(1);\r\nconst { winners: winners, count: winnersCount } = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getWinners)({ page: 1, limit: 10, sort: \"time\", order: \"asc\" });\r\nconst storage = {\r\n    garagePage: 1,\r\n    winnersPage: 1,\r\n    cars,\r\n    winners,\r\n    carsCount,\r\n    winnersCount,\r\n    view: \"garage\",\r\n    sort: \"time\",\r\n    sortOrder: \"asc\",\r\n};\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://async-race-api/./src/model/storage.ts?");

/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCar\": () => (/* binding */ renderCar),\n/* harmony export */   \"renderPage\": () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _model_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/cars */ \"./src/model/cars.ts\");\n/* harmony import */ var _model_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/storage */ \"./src/model/storage.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_model_storage__WEBPACK_IMPORTED_MODULE_1__]);\n_model_storage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\nfunction renderCar({ id, name, color }) {\r\n    return (`\n    <div class=\"car-buttons\">\n      <button class=\"button car-button\" id=\"update-car-${id}\">Update</button>\n      <button class=\"button car-button\" id=\"remove-car-${id}\">Remove</button>\n      <p class=\"car-name\"> ${name} </p>\n    </div>\n    <div class=\"car-wrapper\">\n      <div class=\"car\">\n        <div class=\"start-buttons\">\n          <button class=\"small-button engine\" id=\"start-engine-car-${id}\">Go</button>\n          <button class=\"small-button engine\" id=\"stop-engine-car-${id}\"}>Stop</button>\n        </div>\n        <div class=\"car\" id=\"car-${id}\">\n          ${(0,_model_cars__WEBPACK_IMPORTED_MODULE_0__.createCarImage)(color)}\n        </div>\n      </div>\n      <div class=\"flag-${id}\">&#127988;</div>\n    </div>`);\r\n}\r\nfunction renderGarage() {\r\n    return `<h1>Garage (${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.carsCount})</h1>\n  <h2>Page №${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.garagePage}</h2>\n  <ul>\n    ${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.cars.map((car) => `\n    <li>${renderCar(car)}</li>\n    `).join('')}\n  </ul>`;\r\n}\r\nfunction renderWinners() {\r\n    return `<h1>Winners (${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.winnersCount})</h1>\n  <h2>Page №${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.winnersPage}</h2>\n  <table>\n    <thead>\n      <th>Number</th>\n      <th>Car</th>\n      <th>Name</th>\n      <th id=\"sort-wins\" class = \"table-button table-win\" ${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.sort === 'wins' ? _model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.sortOrder : ''}>Wins</th>\n      <th id=\"sort-time\" class = \"table-button table-time\" ${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.sort === 'wins' ? _model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.sortOrder : ''}>Time</th>\n    </thead>\n    <tbody>\n      ${_model_storage__WEBPACK_IMPORTED_MODULE_1__.storage.winners.map((winner, i) => `\n      <tr>\n        <td>${i + 1}</td>\n        <td>${(0,_model_cars__WEBPACK_IMPORTED_MODULE_0__.createCarImage)(winner.car.color)}</td>\n        <td>${winner.car.name}</td>\n        <td>${winner.wins}</td>\n        <td>${winner.time}</td>\n      </tr>`).join('')}\n    </tbody>\n  </table>\n  `;\r\n}\r\nasync function renderPage() {\r\n    const page = `\n  <div class=\"page-button\">\n    <button class=\"button garage-page-button\" id=\"garage-page-btn\">Garage</button>\n    <button class=\"button winner-page-button\" id=\"winner-page-btn\">Winners</button>\n  </div>\n  <div class=\"garage\">\n    <div class=\"car-creator\">\n      <form class=\"form\" id=\"create\">\n        <input class=\"input\" type=\"text\" name=\"name\" id=\"create-name\">\n        <input type=\"color\" name=\"color\" id=\"create-color\" value=\"#ffffff\">\n        <button class=\"button\" id=\"create-btn\">Create</button>\n      </form>\n      <form class=\"form\" id=\"update\">\n        <input class=\"input\" type=\"text\" name=\"name\" id=\"update-name\">\n        <input type=\"color\" name=\"color\" id=\"update-color\" value=\"#ffffff\">\n        <button class=\"button\" id=\"update-btn\">Update</button>\n      </form>\n    </div>\n    <div class=\"race-control-buttons\">\n      <button class=\"button\" id=\"race\">Race</button>\n      <button class=\"button\" id=\"stop\">Stop</button>\n      <button class=\"button\" id=\"add-car-btn\">Add cars</button>\n    </div>\n    <div class=\"cars\">\n      ${renderGarage()}\n    </div>\n  </div>\n  <div class=\"winners\">\n    \n  </div>\n  <div class=\"pagination\">\n    <button class=\"button\" disabled id=\"prev-btn\">prev</button>\n    <button class=\"button\" disabled id=\"next-btn\">next</button>\n  </div> `;\r\n    const html = document.createElement('div');\r\n    html.innerHTML = page;\r\n    document.body.appendChild(html);\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://async-race-api/./src/view/view.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;