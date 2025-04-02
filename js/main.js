//** tab menu *//

const tabMenu = () => {
    const tabs = document.querySelectorAll("[data-button]");
    const contents = document.querySelectorAll("[data-content]");

    const tabClick = (e) => {
        //クリックされたdata-buttonの値
        const targetValue = e.target.dataset.button;
        console.log(targetValue);

        //クリックされたtab
        const targetTab = tabs[targetValue];
        console.log(targetTab);

        //クリックされたtabに対応するcontents
        const targetContent = document.querySelector(`[data-content="${targetValue}"]`);
        console.log(targetContent);

        //全てのis-activeをremove
        [...tabs, ...contents].forEach((item) => item.classList.remove("is-active"));

        //クリックしたタブにis-activeをadd
        targetTab.classList.add("is-active");

        //クリックしたコンテンツにis-activeをadd
        targetContent.classList.add("is-active");

        //content表示アニメーション
        gsap.fromTo(
            targetContent,
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.inOut",
            }
        );
    };

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => tabClick(e));
    });
};

tabMenu();
