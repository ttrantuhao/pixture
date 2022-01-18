const pictureData = [
  {
    heartCount: 382,
    title: 'BLISS TEXTURE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/picture1.png',
  },
  {
    heartCount: 382,
    title: 'DECAYED',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/picture2.png',
  },
  {
    heartCount: 382,
    title: 'BLISS TEXTURE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/picture3.png',
  },
  {
    heartCount: 382,
    title: 'DECAYED',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/picture4.png',
  },
];

const articleData = [
  {
    heartCount: 382,
    title: 'BLISS TEXTURE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/article1.png',
  },
  {
    heartCount: 382,
    title: 'DECAYED',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/article2.png',
  },
  {
    heartCount: 382,
    title: 'BLISS TEXTURE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/article3.png',
  },
  {
    heartCount: 382,
    title: 'DECAYED',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    commentCount: 374,
    img: '/images/article4.png',
  },
];

const mobileScrollContainer = document.querySelector('.mobileScrollListContainer');
const pictureScrollContainer = document.querySelector('#pictureScrollList .scrollList');
const articleScrollContainer = document.querySelector('#articleScrollList .scrollList');
const pictureNextButton = document.getElementById('pictureNextButton');
const picturePreviousButton = document.getElementById('picturePreviousButton');
const articleNextButton = document.getElementById('articleNextButton');
const articlePreviousButton = document.getElementById('articlePreviousButton');

const sideWidth = 84;
const marginBetweenItem = 30;

const containerWidth = window.innerWidth - sideWidth * 2;
let itemWidth = (containerWidth - marginBetweenItem * 2) / 3;
if (containerWidth > 1400) {
  itemWidth = (containerWidth - marginBetweenItem * 3) / 4;
}

//--------------------------picture scroll--------------------------------
pictureScrollContainer.style.width = containerWidth - marginBetweenItem;
createScrollList(pictureData, pictureScrollContainer);
if (containerWidth > 1400 && pictureData.length === 4)
  pictureNextButton.classList.add('hidden');
if (containerWidth <= 1400 && pictureData.length === 3)
  pictureNextButton.classList.add('hidden');
// click left, move slides to the left
picturePreviousButton.addEventListener('click', (e) => {
  const currentItem = pictureScrollContainer.querySelector('.current');
  const previousItem = currentItem.previousElementSibling;
  const pictureScrollList = Array.from(pictureScrollContainer.children);
  const targetIndex = pictureScrollList.findIndex((slide) => slide === previousItem);
  console.log(targetIndex);

  //move to next slide
  moveToItem(pictureScrollContainer, currentItem, previousItem);
  updateArrow(targetIndex, pictureScrollList, picturePreviousButton, pictureNextButton);
});

// click right, move slides to the right
pictureNextButton.addEventListener('click', (e) => {
  const currentItem = pictureScrollContainer.querySelector('.current');
  const nextItem = currentItem.nextElementSibling;
  const pictureScrollList = Array.from(pictureScrollContainer.children);
  const targetIndex = pictureScrollList.findIndex((slide) => slide === nextItem);

  //move to next slide
  moveToItem(pictureScrollContainer, currentItem, nextItem);
  updateArrow(targetIndex, pictureScrollList, picturePreviousButton, pictureNextButton);
});

//--------------------- article scroll----------------------
articleScrollContainer.style.width = containerWidth;
createScrollList(articleData, articleScrollContainer);
if (containerWidth > 1400 && pictureData.length === 4)
  articleNextButton.classList.add('hidden');
if (containerWidth <= 1400 && pictureData.length === 3)
  articleNextButton.classList.add('hidden');

// click left, move slides to the left
articlePreviousButton.addEventListener('click', (e) => {
  const currentItem = articleScrollContainer.querySelector('.current');
  const previousItem = currentItem.previousElementSibling;
  const articleScrollList = Array.from(articleScrollContainer.children);
  const targetIndex = articleScrollList.findIndex((slide) => slide === previousItem);

  //move to next slide
  moveToItem(articleScrollContainer, currentItem, previousItem);
  updateArrow(targetIndex, articleScrollList, articlePreviousButton, articleNextButton);
});

// click right, move slides to the right
articleNextButton.addEventListener('click', (e) => {
  const currentItem = articleScrollContainer.querySelector('.current');
  const nextItem = currentItem.nextElementSibling;
  const articleScrollList = Array.from(articleScrollContainer.children);
  const targetIndex = articleScrollList.findIndex((slide) => slide === nextItem);

  //move to next slide
  moveToItem(articleScrollContainer, currentItem, nextItem);
  updateArrow(targetIndex, articleScrollList, articlePreviousButton, articleNextButton);
});

//---------------------- mobile scroll----------------------
pictureData.forEach((data, index) => {
  const item = createItem(data);
  if (index === 0) {
    item.style.marginLeft = marginBetweenItem + 'px';
  }
  mobileScrollContainer.appendChild(item);
});

// -------------------function------------------------------

function createScrollList(dataList, container) {
  dataList.forEach((data, index) => {
    const item = createItem(data);
    item.style.width = itemWidth + 'px';
    item.setAttribute('left', index * (itemWidth + marginBetweenItem));
    if (index === 0) {
      item.classList.add('current');
    }
    container.appendChild(item);
  });
}

function moveToItem(container, current, target) {
  // console.log(target.getAttribute('left'));
  container.style.transform = `translate(-${target.getAttribute('left')}px)`;
  current.classList.remove('current');
  target.classList.add('current');
}

function updateArrow(targetIndex, list, previousButton, nextButton) {
  if (targetIndex === 0) {
    console.log(1);
    previousButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  } else if (
    (targetIndex === list.length - 3 && containerWidth <= 1400) ||
    (targetIndex === list.length - 4 && containerWidth > 1400)
  ) {
    console.log(2);

    previousButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  } else {
    console.log(3);

    previousButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }
}

function createItem(data) {
  const item = document.createElement('div');
  item.classList.add('item');

  // image
  const image = document.createElement('div');
  image.classList.add('image');
  const mainImg = document.createElement('img');
  mainImg.src = data.img;
  image.appendChild(mainImg);

  const heart = document.createElement('div');
  heart.classList.add('heart');
  const heartImg = document.createElement('img');
  heartImg.src = './images/heart.svg';
  heart.appendChild(heartImg);
  const heartText = document.createElement('div');
  heartText.innerHTML = data.heartCount;
  heart.appendChild(heartText);
  image.appendChild(heart);

  // content
  const content = document.createElement('div');
  content.classList.add('content');
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = data.title;
  content.appendChild(title);

  const description = document.createElement('div');
  description.classList.add('description');
  description.innerHTML = data.desc;
  content.appendChild(description);

  // action
  const action = document.createElement('div');
  action.classList.add('action');

  const comment = document.createElement('div');
  comment.classList.add('comment');
  const commentImg = document.createElement('img');
  commentImg.src = '/images/comment.svg';
  const commentSpan = document.createElement('span');
  commentSpan.innerHTML = `${data.commentCount} comments`;
  comment.appendChild(commentImg);
  comment.appendChild(commentSpan);

  const option = document.createElement('div');
  option.classList.add('option');
  const optionImg = document.createElement('img');
  optionImg.src = './images/threeDotBlack.svg';
  option.appendChild(optionImg);

  action.appendChild(comment);
  action.appendChild(option);

  // square
  const square = document.createElement('div');
  square.classList.add('square');

  item.appendChild(image);
  item.appendChild(content);
  item.appendChild(action);
  item.appendChild(square);

  return item;
}
