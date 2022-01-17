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

  item.appendChild(image);
  item.appendChild(content);
  item.appendChild(action);
  return item;
}

const mobileScrollContainer = document.querySelector('.mobileScrollListContainer');
const pictureScrollContainer = document.querySelector('.pictureScrollContainer');
const articleScrollContainer = document.querySelector('.articleScrollContainer');

pictureData.forEach((data) => {
  const item = createItem(data);
  mobileScrollContainer.appendChild(item);
});
