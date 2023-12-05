const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];
  
  const myGallery = document.querySelector(".gallery");
  
  images.forEach((image) => {
    const addliItem = document.createElement("li");
    addliItem.classList.add("gallery-item");
  
    const addLinkItem = document.createElement("a");
    addLinkItem.classList.add("gallery-link");
    addLinkItem.href = image.original;
  
    const addImgItem = document.createElement("img");
    addImgItem.classList.add("gallery-image");
    addImgItem.src = image.preview;
    addImgItem.dataset.source = image.original;
    addImgItem.alt = image.description;
  
    addLinkItem.appendChild(addImgItem);
    addliItem.appendChild(addLinkItem);
    myGallery.appendChild(addliItem);
  });
  
  const addEventGallery = document.querySelector(".gallery");
  
  addEventGallery.addEventListener("click", (e) => {
    e.preventDefault();
  
    const addClickedElement = e.target;
    const getBigImage = addClickedElement.dataset.source;
  
    if (getBigImage) {
      openModalWindow(getBigImage);
    }
  });
  const openModalWindow = (imageSrc) => {
    const lightboxHTML = `
      <div class="modal">
        <img src="${imageSrc}" alt="Big Image" class="modal-image">
      </div>
    `;
    const lightbox = basicLightbox.create(lightboxHTML, {
      onShow: (instance) => {},
      onClose: (instance) => {},
    });
  
    lightbox.show();
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.close();
      }
    });
  };