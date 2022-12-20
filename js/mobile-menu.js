(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

HTML;
// <!DOCTYPE html>
// <html lang="ru">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Mobile menu workshop</title>
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css"
//       integrity="sha512-ISS7cAi1PEhQ8jnbJpJZMd29NlhNj4AWYyLOSp2CE/CsHxTCu+r+t0D2yoJudVrd0/8fTVPUVDzY5Tvli75u/g=="
//       crossorigin="anonymous"
//     />
//     <link rel="stylesheet" href="css/styles.css" />
//   </head>
//   <body>
//     <header class="page-header">
//       <div class="container">
//         <button
//           class="menu-toggle js-open-menu"
//           aria-expanded="false"
//           aria-controls="mobile-menu"
//         >
//           <svg
//             width="24"
//             height="24"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>

//         <ul class="menu">
//           <li><a href="" class="link">About</a></li>
//           <li><a href="" class="link">Products</a></li>
//           <li><a href="" class="link">Contacts</a></li>
//           <li><a href="" class="link">Career</a></li>
//         </ul>
//       </div>
//     </header>

//     <main>
//       <div class="container">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           possimus doloribus modi numquam quaerat reprehenderit, necessitatibus
//           consectetur corrupti recusandae consequatur ut dolor odio itaque iusto
//           beatae? Quaerat minima sint laborum ex, est eos quidem, quisquam,
//           magnam sed quos voluptatum. Pariatur veritatis quam neque aliquid quis
//           quod est deserunt tempora assumenda veniam modi, voluptatem temporibus
//           ab repellendus excepturi. Dolore architecto, sit molestias animi et
//           pariatur dolorem voluptatum nam laudantium veniam consectetur ratione
//           quod suscipit inventore dicta illum cum non. Fugit nobis recusandae
//           rerum! Recusandae ab maiores eveniet at laborum delectus iure. Nisi
//           commodi quam iusto, omnis quasi corporis incidunt perferendis, vel
//           voluptatem, rem eligendi! Ea pariatur voluptas odio consectetur non
//           blanditiis nam iure voluptate veniam cupiditate modi molestias quas
//           temporibus quo facilis, consequatur natus officiis sit accusamus
//           exercitationem placeat itaque. Placeat, non sed consequuntur quia modi
//           inventore a nemo recusandae officia, maxime accusamus eligendi id
//           mollitia quibusdam cumque? Cupiditate nam iusto praesentium
//           exercitationem doloremque provident, quidem, dolor vero totam dolores
//           veritatis fugiat. Ipsam omnis sapiente, voluptates consectetur earum
//           dolorum est enim natus aliquid aliquam reprehenderit mollitia tempore,
//           eius sunt, velit laudantium fugiat! Eaque tenetur voluptatum ipsa
//           voluptas harum tempora corporis. Corrupti cumque delectus aperiam
//           beatae et sequi at, assumenda odit minima!
//         </p>
//         <p>
//           Asperiores nesciunt aliquid dicta? Eaque similique iste et velit
//           tenetur pariatur veniam praesentium optio ducimus? Dicta doloribus,
//           quas magnam consectetur distinctio placeat numquam eius maiores ab
//           consequuntur facere dignissimos laboriosam itaque qui animi.
//           Exercitationem possimus est iusto id ab quod dolorem harum, commodi
//           distinctio voluptas eaque beatae consequuntur enim voluptatem alias
//           repellat architecto aperiam eius ullam fugit dolorum magnam fuga
//           vitae. Vel obcaecati rem, similique id necessitatibus sed, eius animi
//           hic iure provident fuga tempore odit ullam accusantium ad nobis
//           explicabo illum officia debitis natus facere! Facere sed placeat nihil
//           delectus ipsa quaerat dicta repellendus distinctio rem! Tenetur,
//           aperiam ea. Nulla corrupti laborum doloremque numquam dignissimos non
//           quam, quas, repellendus dolores maiores molestias dicta magnam!
//           Repudiandae quibusdam ducimus possimus ipsa consequuntur expedita,
//           excepturi sint, fuga temporibus pariatur eveniet sed nihil facere
//           dolor velit porro. Quidem voluptatem accusamus itaque numquam atque,
//           assumenda iusto hic inventore, quo, maxime illo explicabo ullam
//           doloremque neque voluptates necessitatibus nisi? Illo, praesentium
//           hic! Necessitatibus perferendis alias sunt quia vero at distinctio
//           harum deserunt, modi dolores numquam omnis doloremque nostrum, illo
//           reiciendis nemo officiis perspiciatis explicabo nobis possimus,
//           nesciunt molestiae rem? Magnam deserunt suscipit, dicta, veritatis sed
//           nisi iusto eveniet saepe corporis adipisci voluptates autem quasi
//           praesentium.
//         </p>
//         <p>
//           Id veritatis, suscipit sit sunt at tempora delectus? Itaque rerum ea,
//           vitae ullam reprehenderit modi. Deserunt blanditiis fugit accusamus,
//           dolore architecto assumenda sint aspernatur aut, error corrupti
//           deleniti voluptatibus sapiente alias autem repudiandae molestias
//           repellendus? Provident ratione laborum ab pariatur itaque odio facere
//           eius. Porro facilis commodi quaerat quis velit, esse sequi cum modi?
//           Sapiente laborum assumenda dolorem voluptates deserunt magnam sit, vel
//           non doloribus perferendis, ipsum quis eveniet. Consequuntur sapiente
//           obcaecati incidunt suscipit veritatis, eum officiis cum enim vel
//           quaerat laudantium corrupti, modi dignissimos facere quo praesentium,
//           exercitationem quae est delectus? Rem ipsam deleniti atque modi cum,
//           velit, autem maxime ullam expedita non adipisci. Quisquam, excepturi
//           culpa, quo praesentium minima ipsa inventore molestias possimus
//           commodi fugit voluptatibus repellendus in vitae nihil provident
//           temporibus. Sed pariatur perspiciatis assumenda. Excepturi vitae
//           temporibus ab, voluptates sapiente dicta! Quod, cumque sed dolor quae
//           obcaecati fugit doloribus placeat dolorum nulla tenetur odit eum
//           minima impedit ullam nemo vitae sunt? Porro pariatur facere deserunt
//           aperiam obcaecati libero, doloremque velit corporis ex commodi nemo
//           ratione, iusto minima animi perspiciatis beatae nulla natus, eveniet
//           tenetur corrupti architecto tempore? Aperiam vel nulla officiis
//           dignissimos repellendus perspiciatis provident, pariatur eligendi
//           itaque, beatae modi delectus iure deleniti? Iste, iusto? Quae.
//         </p>
//         <p>
//           Sint exercitationem expedita ut sed labore! Possimus molestiae
//           blanditiis quasi recusandae, quaerat temporibus sit numquam ut,
//           quisquam repudiandae asperiores repellendus dolor veritatis aperiam,
//           debitis dolorem consequuntur error deserunt id. Atque praesentium,
//           totam sequi debitis voluptates fugit eum deleniti hic provident nisi
//           eos perferendis qui libero soluta vero nostrum unde, magni fuga.
//           Inventore qui dolorem temporibus vel quas. Quam mollitia obcaecati
//           temporibus nulla non ad eos distinctio, minus quod voluptate?
//           Laudantium, alias amet quia nesciunt doloribus reprehenderit, ex
//           facilis iure, blanditiis nemo assumenda. Autem voluptatum ut facere.
//           Non harum a aliquam cumque maiores dicta aspernatur, eos, quia esse
//           quam facilis, eaque praesentium omnis quaerat molestiae tenetur optio.
//           Modi aperiam tenetur eligendi repellat expedita, pariatur repudiandae,
//           neque quasi molestiae enim dolor earum omnis eius delectus eveniet
//           ipsam rem beatae porro consectetur? Soluta maxime debitis quaerat
//           nulla laudantium, harum eaque earum dolores, quia aut similique
//           dolorum. Ex debitis veniam nostrum fuga odio sequi aliquam
//           exercitationem praesentium beatae nisi explicabo voluptatibus quis,
//           hic iusto corporis quas dolor dolorem adipisci? Iste porro sit
//           exercitationem assumenda obcaecati fuga tempore voluptatem, tenetur
//           mollitia harum non eaque. Sint, sapiente voluptatibus ipsum, eum,
//           possimus aliquam omnis provident iste excepturi eaque accusamus minima
//           ullam est minus amet ducimus veniam ea!
//         </p>
//         <p>
//           Numquam vitae incidunt ab fugit esse dolor quidem quibusdam iusto
//           suscipit aliquid dolore nihil, rem labore quisquam molestias cumque
//           temporibus dolorem inventore veritatis optio error tempora similique
//           officiis. Quos officia numquam ab, impedit veritatis ut obcaecati
//           fugit natus ipsam vel repellendus ratione! Vel iusto a doloribus
//           tempora sapiente! Ducimus vero, maxime animi modi nostrum, obcaecati
//           quo error cupiditate eos veritatis odio, nulla dolores est molestiae
//           atque dicta ex dolore ab dolor iste nam beatae. Eos harum tenetur
//           doloribus impedit ea ad quia cum laudantium. Animi harum quia neque
//           deleniti. Excepturi, quia eligendi temporibus laudantium dicta eos
//           quas necessitatibus nihil velit consequuntur libero cupiditate
//           nesciunt, explicabo quae minus tempora eum! Repellendus accusantium
//           aut assumenda odio porro voluptatibus rerum vero nam. Maiores
//           voluptatem mollitia accusantium placeat, quod quisquam animi nobis
//           vero et ullam omnis similique corporis quasi quam unde repudiandae
//           quaerat eligendi suscipit adipisci cum pariatur nemo. Provident ea
//           iusto et adipisci voluptatibus ratione laboriosam saepe harum ut
//           molestias nemo aliquid maiores necessitatibus culpa numquam asperiores
//           dignissimos eos qui perspiciatis beatae possimus, excepturi ipsum
//           placeat. Facilis, harum. Ullam veritatis rem explicabo nesciunt ea
//           odit, dicta porro quam consequatur commodi, vel voluptas illo
//           perferendis autem maiores dolorum quo. Reprehenderit veritatis
//           recusandae nobis sunt.
//         </p>
//       </div>
//     </main>

// <div class="menu-container js-menu-container" id="mobile-menu">
//   <button class="menu-toggle js-close-menu">
//     <svg
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//     >
//       <path
//         fill-rule="evenodd"
//         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//         clip-rule="evenodd"
//       ></path>
//     </svg>
//   </button>

//   <ul class="mobile-menu">
//     <li><a href="" class="link">About</a></li>
//     <li><a href="" class="link">Products</a></li>
//     <li><a href="" class="link">Contacts</a></li>
//     <li><a href="" class="link">Career</a></li>
//   </ul>
// </div>

// <script
//   defer
//   src="https://cdnjs.cloudflare.com/ajax/libs/body-scroll-lock/3.1.5/bodyScrollLock.min.js"
//   integrity="sha512-HowizSDbQl7UPEAsPnvJHlQsnBmU2YMrv7KkTBulTLEGz9chfBoWYyZJL+MUO6p/yBuuMO/8jI7O29YRZ2uBlA=="
//   crossorigin="anonymous"
// ></script>
// <script defer src="js/mobile-menu.js"></script>
//   </body>
// </html>
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// mobile-menu-workshop/index.html at main · goitacademy/mobile-menu-workshop

CSS;
// body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//   line-height: 1.5;
//   color: #212121;
//   background-color: #fff;
// }

// .container {
//   min-width: 320px;
//   max-width: 1170px;
//   padding-left: 15px;
//   padding-right: 15px;
//   margin-left: auto;
//   margin-right: auto;
// }

// .page-header {
//   box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
//     0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
// }

// .page-header .container {
//   min-height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// }

// .menu {
//   display: flex;
//   padding: 0;
//   margin: 0;
//   list-style: none;
// }

// @media (max-width: 767px) {
//   .menu {
//     display: none;
//   }
// }

// .menu .link {
//   padding: 10px;
//   color: inherit;
//   text-decoration: none;
// }

// .menu .link:hover,
// .menu .link:focus {
//   text-decoration: underline;
// }

// .menu-toggle {
//   min-height: 40px;
//   min-width: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   margin: 0;
//   padding: 0;
//   background-color: transparent;
//   cursor: pointer;
//   border: none;
//   border-radius: 50%;
//   outline: none;
// }

// @media (min-width: 768px) {
//   .menu-toggle {
//     display: none;
//   }
// }

// .menu-toggle:hover,
// .menu-toggle:focus {
//   background-color: rgba(0, 0, 0, 0.1);
// }

// .menu-container {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   padding: 32px;
//   background-color: #3f51b5;
//   z-index: 999;

//   transform: translateX(100%);
//   transition: transform 250ms ease-in-out;
// }

// .menu-container.is-open {
//   transform: translateX(0);
// }

// .menu-container .menu-toggle {
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   color: #fff;
// }

// .mobile-menu {
//   padding: 0;
//   margin: 0;
//   list-style: none;
// }

// .mobile-menu .link {
//   display: block;
//   padding: 10px;
//   color: #fff;
//   text-decoration: none;
// }
