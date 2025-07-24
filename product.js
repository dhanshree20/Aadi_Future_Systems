 const products = {
      massage: [
        {
          image: "ProductImages/Kings_Elite_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Kings Elite Massage Chair",
          link: "Kings_Elite_Massage_Chair.html"
        },
        {
          image: "ProductImages/Dream_Relax_FullBodyMassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Dream Relax Full Body Massage Chair",
          link: "Dream_Relax_FullBody.html"
        },
        {
          image: "ProductImages/Legacy_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Legacy Massage Chair",
          link: "Legacy_Massage_Chair.html"
        },
        {
          image: "ProductImages/Highland_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Highland Massage Chair",
          link: "Highland_Massage_Chair.html"
        },
        {
          image: "ProductImages/Imperial_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Imperial Massage Chair",
          link: "Imperial_Massage_Chair.html"
        },
        {
          image: "ProductImages/Maestro_FullBodyMassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Maestro Full Body Massage Chair",
          link: "Maestro_Full_Body.html"
        },
        {
          image: "ProductImages/Admiral_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Admiral Massage Chair",
          link: "Admiral_Massage_Chair.html"
        },
        {
          image: "ProductImages/Zero_GravityMassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Zero Gravity Massage Chair",
          link: "Zero_Gravity_MassageChair.html"
        },
        {
          image: "ProductImages/Lazydaze_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Lazydaze Massage Chair",
          link: "Lazydaze_Massage_Chair.html"
        },
        {
          image: "ProductImages/Isnazz_MassageChair/img1.webp",
          subtitle: "Massage Chair",
          title: "Isnazz Massage Chair",
          link: "Isnazz_Massage_Chair.html"
        }
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
      foot: [
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
      ],
      gun: [
        {
          image: "ProductImages/Body_MassageGun/img1.webp",
          subtitle: "Massage Gun",
          title: "Body Massage Gun",
          link: "Body_MassageGun.html"
        }
      ],
      back: [
        {
          image: "ProductImages/Tepid_BackMassager/img1.webp",
          subtitle: "Back Massager",
          title: "Tepid Back Massager",
          link: "Tepid_BackMassager.html"
        }
      ],
      exercise: [
        {
          image: "ProductImages/Gym_VibrationMachine/img1.webp",
          subtitle: "Exercise Machine",
          title: "Gym Vibration Machine",
          link: "Gym_VibrationMachine.html"
        }
      ],
      pulse: [
        {
          image: "ProductImages/Electronic_PulseMassager/img1.webp",
          subtitle: "Pulse Massager",
          title: "Electronic Pulse Massager",
          link: "Electronic_PulseMassager.html"
        }
      ],
      other: [
        {
          image: "ProductImages/Massage_ChairCover/img1.webp",
          subtitle: "Massage Chair Cover",
          title: "Massage Chair Cover",
          link: "Massage_ChairCover.html"
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
    };
