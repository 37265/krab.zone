//TODO Add scaling target scroll speed
window.addEventListener("load", () => {
    let bulletCount = 5;
    let score = 0;

    document.querySelectorAll(".target").forEach(target => {
        target.addEventListener("click", () => {
            if (bulletCount > 0) {
                const points = target.getAttribute("data-points");
                hitTarget(parseInt(points));
            }
        })
    })

    if (bulletCount > 0) {
        document.querySelectorAll("marquee").forEach(marquee => {
            marquee.addEventListener("click", () => {
                if (bulletCount > 0) {
                    document.querySelector(".revolver-sound").currentTime = 0;
                    document.querySelector(".revolver-sound").play();
                    document.querySelector(".banjo-sound").play();
                    document.querySelector(`.bullet-${bulletCount}`).classList.add("invisible");
                    bulletCount--;
                }
            })
        })
    }
    document.querySelector(".reload-button").addEventListener("click", event => {
        event.preventDefault();
        reloadAmmo();
    })

    function reloadAmmo() {
        bulletCount = 5;
        document.querySelectorAll(".bullet").forEach(bullet => {
            bullet.classList.remove("invisible");
        })
    }

    function hitTarget(points) {
        score += points;
        document.querySelector(".score").innerHTML = score;
    }
})