const subList = document.querySelectorAll(".subLinkCont");
const linkList = document.querySelectorAll(".links");
const lineList = document.querySelectorAll(".line");

subList.forEach((sub, index) => {
    sub.addEventListener('mouseover', () => {
        linkList[index].style.cssText = `
            opacity: 1;
            z-index: 2;
            transition: opacity .5s ease-in-out;
        `;
        lineList[index].style.cssText = `
            width: 100%;
            height: .2rem;
            background-color: rgb(25, 88, 30);
            transition: all .5s ease-in-out
        `;
    });
});

subList.forEach((sub, index) => {
    sub.addEventListener('mouseleave', () => {
        linkList[index].style.cssText = `
            opcaity: 0;
            z-index: -1;
        `;
        lineList[index].style.cssText = `
            width: 0;
            height: 0;
            background-color: transparent;
        `;
    });
});

const signInLink = document.querySelector("#signIn");
const signInLine = document.querySelector(".signInLine");

signInLink.addEventListener('mouseover', () => {
    signInLine.style.cssText = `
            width: 100%;
            height: .2rem;
            background-color: rgb(25, 88, 30);
            transition: all .4s ease-in-out
    `;
})

signInLink.addEventListener('mouseleave', () => {
    signInLine.style.cssText = `
            width: 0;
            height: 0;
            background-color: transparent;
    `;
})