const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]')
const tabPictures = document.querySelectorAll('picture');

let activeIndex = 0;

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        setActiveTab(index);
    })
    
});

function setActiveTab(index) {
   // Dseselect all tabs
    tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", false);
        tab.tabIndex = -1;
    });
    
    // Hide all Panels and pictures
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    tabPictures.forEach((picture) => {
        picture.setAttribute("hidden", true);
    });

    // Select the new tab
    tabs[index].setAttribute("aria-selected", true);
    tabs[index].tabIndex = 0;
    tabs[index].focus();
    
    tabPanels[index].removeAttribute("hidden");
    tabPictures[index].removeAttribute("hidden");


    setActivePanel(index);
    setActivePicture(index);
    activeIndex = index;
}

tabList.addEventListener("keydown", (e) => {
    const lastIndex = tabs.length - 1;
    if (e.code === "ArrowUp" || e.code === "ArrowRight") {
        e.preventDefault();
        if (activeIndex === lastIndex) {
            activeIndex = 0;
        } else {
            activeIndex++;
        }
        
    }
    else if (e.code === "ArrowDown" || e.code === "ArrowLeft") {
        e.preventDefault();
        if (activeIndex === 0) {
            activeIndex = lastIndex;
        } else {
            activeIndex--;
        }
      
    }
    else if (e.code === "Home") {
        e.preventDefault();
        activeIndex = 0;
    }
    else if (e.code === "End") {
        e.preventDefault();
        activeIndex = lastIndex;
    }
     setActiveTab(activeIndex);
});


