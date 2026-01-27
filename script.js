document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("page-container");
    const garageIntro = document.getElementById("garage-intro");
    const clickPrompt = document.getElementById("click-prompt");
    const bgm = document.getElementById("bgm");
    const clickSfx = document.getElementById("sfx-click");
    const hoverSfx = document.getElementById("sfx-hover");
    const loadSfx = document.getElementById("sfx-load");
    const volumeSlider = document.getElementById("bgm-volume");
    const sizeSlider = document.getElementById("card-size-slider");
    const contentWrapper = document.querySelector(".content");
    const staticOverlay = document.querySelector(".static");
    const root = document.documentElement;
    let audioUnlocked = false;

    const DEFAULT_VOLUME = 0.1;
    const DEFAULT_SIZE = 200;

    if (volumeSlider) volumeSlider.value = DEFAULT_VOLUME;
    if (bgm) bgm.volume = DEFAULT_VOLUME;

    const savedVolume = localStorage.getItem("bgmVolume");
    if (savedVolume !== null && volumeSlider && bgm) {
        volumeSlider.value = savedVolume;
        bgm.volume = savedVolume;
    }

    const savedSize = localStorage.getItem("cardSize");
    if (savedSize !== null && sizeSlider) {
        sizeSlider.value = savedSize;
        root.style.setProperty('--card-min-size', `${savedSize}px`);
    } else {
        root.style.setProperty('--card-min-size', `${DEFAULT_SIZE}px`);
    }

    function preloadImages() {
        const imageSet = new Set();
        const datasets = [
            window.VALUABLES,
            window.ATMS,
            window.WEAPONS,
            window.VEHICLES,
            window.MISSIONS,
            window.NPCS,
            window.LOCATIONS
        ];
        datasets.forEach(dataset => {
            if (!Array.isArray(dataset)) return;
            dataset.forEach(item => {
                if (item.image) imageSet.add(item.image);
                if (Array.isArray(item.images)) {
                    item.images.forEach(img => imageSet.add(img));
                }
            });
        });
        imageSet.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    window.openGarage = () => {
        if (audioUnlocked) return;
        audioUnlocked = true;
        if (clickPrompt) clickPrompt.classList.add("hidden");
        if (garageIntro) garageIntro.classList.add("open");
        if (clickSfx) {
            clickSfx.currentTime = 0;
            clickSfx.play().catch(() => {});
        }
        if (bgm) {
            bgm.volume = volumeSlider.value;
            bgm.play().catch(() => {});
        }
        setTimeout(() => {
            if (garageIntro) garageIntro.remove();
        }, 2800);
        document.querySelector('.tab[data-page="home"]').classList.add("active");
        preloadImages();
        loadPage("home");
    };

    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            if (!audioUnlocked) return;
            if (clickSfx) {
                clickSfx.currentTime = 0;
                clickSfx.play().catch(() => {});
            }
            if (staticOverlay) {
                staticOverlay.style.opacity = "0.15";
                setTimeout(() => staticOverlay.style.opacity = "0", 150);
            }
            document.querySelector(".tab.active")?.classList.remove("active");
            tab.classList.add("active");
            loadPage(tab.dataset.page);
        });
        tab.addEventListener("mouseenter", () => {
            if (!audioUnlocked) return;
            if (hoverSfx) {
                hoverSfx.currentTime = 0;
                hoverSfx.play().catch(() => {});
            }
        });
    });

    contentWrapper.addEventListener("click", e => {
        const btn = e.target.closest(".sort-btn");
        if (!btn || !audioUnlocked) return;
        if (clickSfx) {
            clickSfx.currentTime = 0;
            clickSfx.play().catch(() => {});
        }
        document.querySelector(".sort-btn.active")?.classList.remove("active");
        btn.classList.add("active");
    });

    contentWrapper.addEventListener("mouseenter", e => {
        const btn = e.target.closest(".sort-btn");
        if (!btn || !audioUnlocked) return;
        if (hoverSfx) {
            hoverSfx.currentTime = 0;
            hoverSfx.play().catch(() => {});
        }
    }, true);

    if (volumeSlider && bgm) {
        volumeSlider.addEventListener("input", () => {
            bgm.volume = volumeSlider.value;
            localStorage.setItem("bgmVolume", volumeSlider.value);
        });
    }

    if (sizeSlider) {
        sizeSlider.addEventListener("input", () => {
            root.style.setProperty('--card-min-size', `${sizeSlider.value}px`);
            localStorage.setItem("cardSize", sizeSlider.value);
        });
    }

    function loadPage(page) {
        container.innerHTML = '<div class="loading glitch">LOADING...</div>';
        if (audioUnlocked && loadSfx) {
            loadSfx.currentTime = 0;
            loadSfx.play().catch(() => {});
        }
        let content = "";
        if (page === "home" && typeof renderHome === "function") {
            content = renderHome();
        } else if (page === "valuables" && typeof renderValuables === "function") {
            content = renderValuables();
        } else if (page === "atms" && typeof renderATMs === "function") {
            content = renderATMs();
        } else if (page === "weapons" && typeof renderWeapons === "function") {
            content = renderWeapons();
        } else if (page === "vehicles" && typeof renderVehicles === "function") {
            content = renderVehicles();
        } else if (page === "gun-crates" && typeof renderGunCrates === "function") {
            content = renderGunCrates();
        } else if (page === "missions" && typeof renderMissions === "function") {
            content = renderMissions();
        } else if (page === "npcs" && typeof renderNPCs === "function") {
            content = renderNPCs();
        } else if (page === "locations" && typeof renderLocations === "function") {
            content = renderLocations();
        } else {
            content = `<h2>Work In Progress</h2><p>Under contruction...</p>`;
        }
        container.innerHTML = content;
    }
});