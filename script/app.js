var btnPause = document.querySelector('.js-pause');
var btnFast = document.querySelector('.js-fast');
var btnSlow = document.querySelector('.js-slow');
var btnNormal = document.querySelector('.js-normal');

btnPause.onclick = function () {
    hoverMaster.paused(!hoverMaster.paused());
    btnPause.classList.toggle('is-paused');
}

btnFast.onclick = () => hoverMaster.timeScale(3);
btnNormal.onclick = () => hoverMaster.timeScale(1.5);
btnSlow.onclick = () => hoverMaster.timeScale(.75);

let hoverMaster = gsap.timeline({ repeat: -1 })
    .timeScale(1.5)
    .add(hoverRobot())
    .add(hoverShadow(), '-=2')
    .add(hoverFire(), '-=2')
    .add(hoverHead(), '-=2')
    .add(hoverArmLeft(), '-=2')
    .add(hoverArmRight(), '-=2');

function hoverRobot() {
    let tl = gsap.timeline();
    tl
        .fromTo('#Robot', {
            y: 2.5
        },
            {
                y: -5,
                duration: .75,
                ease: "sine.inOut"
            })
        .to('#Robot', {
            y: 2.5,
            duration: 1.25,
            ease: "sine.inOut"
        });
    return tl;
}

function hoverShadow() {
    let tl = gsap.timeline();
    tl
        .set('#Shadow', {
            transformOrigin: "50% 100%"
        })
        .to('#Shadow', {
            scale: .75,
            duration: .75,
            ease: "sine.inOut"
        })
        .to('#Shadow', {
            scale: 1,
            duration: 1.25,
            ease: "sine.inOut"
        });
    return tl;
}

function hoverFire() {
    let tl = gsap.timeline();
    tl
        .set('#Fire', {
            transformOrigin: "50% 0%"
        })
        .to('#Fire', {
            scale: 1.125,
            duration: .5,
            ease: "sine.out"
        })
        .to('#Fire', {
            scale: 1,
            duration: 1.25,
            ease: "sine.out"
        });
    return tl;
}

function hoverHead() {
    let tl = gsap.timeline();
    tl
        .to('#Head', {
            y: 1,
            duration: .5,
            ease: "Power2.out"
        })
        .to('#Head', {
            y: 0,
            duration: .5,
            ease: "sine.out"
        });
    return tl;
}

function hoverArmLeft() {
    let tl = gsap.timeline();
    tl
        .set('#Arm-left', {
            transformOrigin: "100% 0%"
        })
        .to('#Arm-left', {
            rotate: -4,
            duration: .5,
            ease: "Power2.out"
        })
        .to('#Arm-left', {
            rotate: 0,
            duration: .75,
            ease: "sine.out"
        })
    return tl;
}

function hoverArmRight() {
    let tl = gsap.timeline();
    tl
        .set('#Arm-right', {
            transformOrigin: "0% 0%"
        })
        .to('#Arm-right', {
            rotate: 4,
            duration: .5,
            ease: "Power2.out"
        })
        .to('#Arm-right', {
            rotate: 0,
            duration: .75,
            ease: "sine.out"
        })
    return tl;
}