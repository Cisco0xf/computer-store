'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "79b8269bd4e19b410b82e2ca5adf2e32",
".git/config": "933e32c11e4c3da6fb358073b0cbd226",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d8661aaa9bc22dd35c32eabad0c4898e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14803dd37605853ca8d1c6a8fc28b022",
".git/logs/refs/heads/main": "c132bd3400a3de71c40a98b45c6b5584",
".git/logs/refs/remotes/origin/main": "0baf97fd219a0216797ede2cb6d571d6",
".git/objects/05/cd69899f2633443eea798a3ef0a1bd81e5403a": "c956dceed18463bc646ba816c90bc8ca",
".git/objects/06/da72036d29ef9dae13438b4f1d7ce63341632d": "da79298bc1b9eab9911c32fe13a1fa57",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/d5ab9e70ab28876ecebdbffaecaec78fd1f8e6": "4d18db9b96b94a74b38a901679ee026b",
".git/objects/0a/e4a9ec1fec70854b62216712d7e7d5cf865a9b": "2f14777476f8973022647fab520758b4",
".git/objects/0b/7a23a66284bac6abcdd22a6aa1158536ebc597": "0d079cb9cab9710e62da337007af01e3",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/0e/6bfc0a33095adb8c3030003b69774b3ec5d4b2": "332a463b07d15e94c7ea3c421a1ecbef",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/21/3566a26bc5e5e45ad41cd2ba6298688344c225": "4c5166511f1d34eef3d4b675043d3de5",
".git/objects/22/00f1a695869bad9ea6cdc5614e26481cda3898": "6dcc4be28007b82c409f511c96ae4c58",
".git/objects/2b/c89a9614f101932bc6ad06cd03f75f546ffccb": "712406f21714822d5a6eab081c74b419",
".git/objects/2f/764882827d8131bd2a64bc0d05ed8c44716daf": "1f2859fb58f0ca30155a8cd19a988455",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/9efc67b966077179ce9fd2ff7101678253a382": "bc35243f43a5645e5083f58c5bb9a87c",
".git/objects/3d/4f294357dae484b4ea31f8f7de6661aeb6dca9": "e4d8d136ecd2ac3c425e322f79de7e53",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/b1331c04436f7127cb3dcec1d6bc7582954fc7": "07d56653fb7b2893351a3d97816a1a38",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/239f0a4635b840fedb2583147babf44f20d086": "99d0aab268a562d41b63df6f3c5b1512",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/48/b4de7c7e5bc730d8b029ffb3c6bc51ba94645d": "13fcca1800300fd73c7134442793429f",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/4a/5999de662b72c16d2ca1d55f4c0f8077b94677": "36a78ebe10709ee23ee71163a26595b4",
".git/objects/4c/984ab774db9deafdfbaead1ee1d5302a6cea1a": "fe53ea2e22f6c6a6c98958df93f4ac73",
".git/objects/4f/220cadba3cd920804925146b2e8a9cccced689": "5dab78ebe5c23889a737eab7af200ce8",
".git/objects/4f/274d1fcb7e1e28abc87701f8511e2f927e46d1": "9c634bd315c82556216621104bdace2d",
".git/objects/53/5845672aee6bab0d0975bf773572a7fcf505b9": "10dfce34d2474462fd14b0f0c6c14f9c",
".git/objects/56/9731e188d263c4f0b8fc55c78c9bb556bfe5f3": "62b6f84c7689b007ca6314f4de5f76b7",
".git/objects/5f/002bcd8cf45e1d4fba8cc3ba3f94ede9444b5e": "9191f8446e950de22f051befb3a02349",
".git/objects/64/023e3059ace82aeb3a0a97a9f496d60c5bc6dd": "b05afec039eff2175ae32f60bcfeb3a6",
".git/objects/6a/40dd37b5b48c31c5de34b2d2383f9535f4441b": "96780bd93c394843b0ae0f80aceb2b17",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/28e7afc2088e6cf1a5c203f0aef3ddb0cef3ca": "629d695e8104af9b0e9a7f3f2be1a46a",
".git/objects/70/5e52200d82cf156ad29d7a1288aec69255ec66": "3488596e66a1aa456f1442c5f0bec0d3",
".git/objects/75/d8dd380b9f4fe41d8d112dd7b25fc8b5408120": "93c05c1660eaf121a3164889b6f411de",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/79/9830654ee996ae5dcd426975c6928938da1854": "a3400b3189a050f8eb3f4ffe4473eebc",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/7d/219f533a4ff449e2928d80dfa2daf6b9ec38fc": "91aee785d82c84e569d54587dce49027",
".git/objects/7f/1e48b18414ee5c71394e0a5634fde093a3589f": "7b07e4271ec70058c58868d116dd9867",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/82/caf282345a544ed710cae74259082d12b31a27": "2c92d8f098f25cd12499e74501b02c53",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/b7ac772458a25329152eb427b125123e8f0274": "512e6f277e43a613ae978cd58db505f8",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/8b/c81073c28542acaae330e3d440d46e6309bbd0": "a20537aa9766ad19a9c9ef2ec8f4fa47",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/c5/3d39782dead3acf3327dadf531d366ea7ffda1": "89769138a0e708305355fb8b0a6918b7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/39d7d26db91ac523d8be076a97c068ef6bd9e0": "d4763ebdb7fb6c28a544cc023b865bf4",
".git/objects/d3/6b2df6a7556c7e49be89c85be0e314aa421e7a": "56bcfa44a8cae1f8813c993ac5121115",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/dd/6189456ea956710cf8d7c88857fa63624ee52b": "0b98201c13428f155aaf19d1ddfafc2f",
".git/objects/de/9d492683909d376ace5ac06894a8d394edd281": "bbfab5afbe5f809025a87319a187a562",
".git/objects/e6/12715117af6d221b530fa1203b0d55f6b2260a": "55b888315544a22171b7fbab13a4d5c3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/a8b89a956ae72020c27c59ff9632ac0a8afa1f": "4e6fef5a04b47e7dd05dfa5e6e361e03",
".git/refs/heads/main": "9fb3dceda8451e10fef8c866524d2647",
".git/refs/remotes/origin/main": "9fb3dceda8451e10fef8c866524d2647",
"assets/AssetManifest.bin": "52c83c85ec4fc8bef383099dbdf5c31e",
"assets/AssetManifest.bin.json": "7927a4e8bc46fc0b3dfd73efc513fcab",
"assets/AssetManifest.json": "0e0c7c87d2a602cd9ec786e58e9cb95f",
"assets/assets/fonts/main.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/images/svg/google.svg": "364f498866bb8f7fdb4905969453caa6",
"assets/FontManifest.json": "5efbb2c064975b58ecb5de0d041d09d2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "61cb76c638b74384df307338b847dc53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_avif_web/web/avif_decoder.js": "210926744b435703473ea7f724275ac6",
"assets/packages/flutter_avif_web/web/avif_decoder.loader.js": "c2b3ae85eff12c898be99f617bc8e3ef",
"assets/packages/flutter_avif_web/web/avif_decoder.wasm": "d8b6e291f463af6b88177d0783e3a6e5",
"assets/packages/flutter_avif_web/web/avif_decoder.worker.js": "5af61e88dca5abd4d6ec4c90873af2a4",
"assets/packages/flutter_avif_web/web/avif_encoder.js": "3cf41745d751be9d7352436cba71473d",
"assets/packages/flutter_avif_web/web/avif_encoder.loader.js": "846bfb4fe692bfee3237bd1af3841907",
"assets/packages/flutter_avif_web/web/avif_encoder.worker.js": "dc1e3bc5fbfc8387d7a029ac791ad4d3",
"assets/packages/flutter_avif_web/web/avif_encoder_bg.wasm": "ed284f35b9e048f5a0e55c90f4bfe1d1",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "7bfd53e82eba07b0d16601eaa22ff3bc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "ce8252fcc7985d21391dd4334fd88191",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c7f562e1d5c83fd8a354b7b7d4c42480",
"icons/Icon-192.png": "e311288454b2fd8da2b494570f6fe435",
"icons/Icon-512.png": "ad7069d4e4513fd1b501888f6d455c84",
"index.html": "c6beeb0e2d011f7965e2cbdb6c88ded2",
"/": "c6beeb0e2d011f7965e2cbdb6c88ded2",
"main.dart.js": "43d1d4a578b58c9a9b655704b1e193a7",
"manifest.json": "dcac8a6f355ab98fbfdd7156a004b94a",
"version.json": "ea865c82640e064e3a1a708d4a91e32f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
