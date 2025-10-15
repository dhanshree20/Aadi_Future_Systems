 const products = {
      massage: [
        {
          image: "ProductImages/Royal_Comfort_Massage_Chair/img1.png",
          subtitle: "Massage Chair",
          title: "Royal Comfort Massage Chair",
          link: "Royal_Comfort_Massage_Chair.html"
        },
        {
          image: "ProductImages/Grand_Serenity_FullBody_Massage_Chair/img1.webp",
          subtitle: "Massage Chair",
          title: "Grand Serenity Full Body Massage Chair",
          link: "Grand_Serenity_FullBody_Massage_Chair.html"
        },
        {
          image: "ProductImages/Aura_Comfort_Massage_Chair/img1.webp",
          subtitle: "Massage Chair",
          title: "Aura Comfort Massage Chair",
          link: "Aura_Comfort_Massage_Chair.html"
        },
        {
          image: "ProductImages/Highland_Bliss_Massage_Chair/img1.png",
          subtitle: "Massage Chair",
          title: "Highland Bliss Massage Chair",
          link: "Highland_Bliss_Massage_Chair.html"
        },
        {
          image: "ProductImages/Imperial_Supreme_Massage_Chair/img1.png",
          subtitle: "Massage Chair",
          title: "Imperial Supreme Massage Chair",
          link: "Imperial_Supreme_Massage_Chair.html"
        },
        {
          image: "ProductImages/Maestro_Platinum_FullBody_Massage_Chair/img1.png",
          subtitle: "Massage Chair",
          title: "Maestro Platinum Full Body Massage Chair",
          link: "Maestro_Platinum_FullBody_Massage_Chair.html"
        },
        {
          image: "ProductImages/Grand_Aura_Massage_Chair/img1.png",
          subtitle: "Massage Chair",
          title: "Grand Aura Massage Chair",
          link: "Grand_Aura_Massage_Chair.html"
        },
      ],
      leg: [
        {
          image: "ProductImages/Reflex_Swing_ProLegMassager/img1.webp",
          subtitle: "Leg Massager",
          title: "Reflex Swing Pro",
          link: "Reflex_Swing_ProLegMassager.html"
        },
        {
          image: "ProductImages/Reflex_Swing_U_ComfortFootMassager/img1.webp",
          subtitle: "Leg Massager",
          title: "Reflex Swing U Comfort ",
          link: "Reflex_Swing_U_ComfortFootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Leg Massager",
          title: "Leg And Foot Massager",
          link: "Leg_And_FootMassager.html"
        }
      ],
      other: [
        {
          image: "ProductImages/Kansya_Thali_FootMassageMachine/img1.webp",
          subtitle: "Foot Massager",
          title: "Kansya Thali Foot Massage Machine",
          link: "Kansya_Thali_FootMassageMachine.html"
        },
        {
          image: "ProductImages/Kansya_2_WatiFootMassager/img1.webp",
          subtitle: "Foot Massager",
          title: "Kansya 2 Wati Foot Massager",
          link: "Kansya_2_WatiFootMassager.html"
        },
        {
          image: "ProductImages/Massage_ChairCover/img1.webp",
          subtitle: "Other Massager",
          title: "Massage Chair Cover",
          link: "Massage_ChairCover.html"
        },
        {
          image: "ProductImages/Dancing_Queen/img1.webp",
          subtitle: "Other Massager",
          title: "Dancing Queen",
          link: "Dancing_Queen.html"
        },
        {
          image: "ProductImages/Knee_Lover_Massager/img1.webp",
          subtitle: "Other Massager",
          title: "Knee Lover Massager",
          link: "Knee_Lover_Massager.html"
        },
        {
          image: "ProductImages/Eye_Massager/img1.webp",
          subtitle: "Other Massager",
          title: "Eye Massager",
          link: "Eye_Massager.html"
        },
        {
          image: "ProductImages/Fascia_Gun_Massager/img1.webp",
          subtitle: "Gun Massage",
          title: "Fascia Gun Massager",
          link: "Fascia_Gun_Massager.html"
        },
        {
          image: "ProductImages/Tens_Massager/img1.webp",
          subtitle: "Other Massager",
          title: "Tens Massager",
          link: "Tens_Massager.html"
        },
        {
          image: "ProductImages/Gym_VibrationMachine/img1.webp",
          subtitle: "Exercise Machine",
          title: "Gym Vibration Machine",
          link: "Gym_VibrationMachine.html"
        },
        {
          image: "ProductImages/Tepid_BackMassager/img1.webp",
          subtitle: "Back Massager",
          title: "Tepid Back Massager",
          link: "Tepid_BackMassager.html"
        },
        {
          image: "ProductImages/Body_MassageGun/img1.webp",
          subtitle: "Massage Gun",
          title: "Body Massage Gun",
          link: "Body_MassageGun.html"
        }
      ]
    };

function showProducts(category, element) {
      document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
      if (element) element.classList.add('active');

      const container = document.getElementById('productContainer');
      container.innerHTML = "";

      products[category].forEach(product => {
        const card = `
          <div class="product-card">
            <div class="product-image">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
              <div class="title">${product.title}</div>
              <a href="${product.link}" class="read-more">Read More</a>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    }

// Read URL query string and set default tab
    window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category') || 'massage';
      const tabButton = Array.from(document.querySelectorAll('.tab-buttons button'))
        .find(btn => btn.textContent.toLowerCase().includes(category));
      showProducts(category, tabButton);

       // scroll exact section par
  const section = document.getElementById(category + "-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
    };
