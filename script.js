
document.addEventListener("DOMContentLoaded", function () {

    // ===== Слайдер Swiper =====
    const swiperElement = document.querySelector(".mySwiper");

    if (swiperElement && typeof Swiper !== "undefined") {
        new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }

    // ===== Гамбургер-меню =====
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("active");

            document.body.style.overflow =
                mobileMenu.classList.contains("active")
                    ? "hidden"
                    : "auto";
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                mobileMenu.classList.remove("active");
                document.body.style.overflow = "auto";
            });
        });
    }

    // ===== ТАБИ GAMECORE =====
    const tabButtons = document.querySelectorAll(".gc-tab-btn");
    const tabPanels = document.querySelectorAll(".gc-tab-panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-tab");

            tabButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            tabPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            button.classList.add("active");

            const targetPanel = document.getElementById(targetId);

            if (targetPanel) {
                targetPanel.classList.add("active");
            } else {
                console.error("Не знайдено вкладку:", targetId);
            }
        });
    });

    // ===== МОДАЛЬНЕ ВІКНО =====
    const modal = document.getElementById("my-modal");
    const openModal = document.getElementById("open-modal-btn");
    const closeModal = document.querySelector(".close-modal");

    function hideModal() {
        if (modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "auto";
        }
    }

    if (modal && openModal && closeModal) {

        openModal.addEventListener("click", function () {
            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        });

        closeModal.addEventListener("click", hideModal);

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                hideModal();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                hideModal();
            }
        });
    }

    // ===== ФОРМА =====
    const callbackForm = document.getElementById("callback-form");
    const formSuccess = document.getElementById("form-success");

    if (callbackForm && formSuccess) {
        callbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (callbackForm.checkValidity()) {
                formSuccess.classList.add("visible");
                callbackForm.reset();
            }
        });
    }

});
