// /**
//  * @license
//  * Copyright 2022 Google LLC. All Rights Reserved.
//  * SPDX-License-Identifier: Apache-2.0
//  */

// // Using @types/google-publisher-tag
// // https://www.npmjs.com/package/@types/google-publisher-tag

// window.googletag = window.googletag || { cmd: [] };

// googletag.cmd.push(() => {
//     // Define an ad slot for div with id "banner-ad".
//     googletag
//         .defineSlot(
//             '/6355419/Travel/Europe/France/Paris',
//             [300, 250],
//             'banner-ad'
//         )!
//         .addService(googletag.pubads());

//     // Enable the PubAdsService.
//     googletag.enableServices();

//     // Request and render an ad for the "banner-ad" slot.
//     googletag.display('banner-ad');
// });

// // <!-- Google Tag Manager -->
// // <script>(
// // function(w,d,s,l,i){
// // w[l]=w[l]||[];
// // w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
// // var f=d.getElementsByTagName(s)[0],
// // j=d.createElement(s),
// // dl=l!='dataLayer'?'&l='+l:'';
// // j.async=true;j.src=
// // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// // })
// // (window,document,'script','dataLayer','GTM-PSN3LLG4');</script>
// // <!-- End Google Tag Manager -->