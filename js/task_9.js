const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTagsCount = (tweets) => {
  return tweets.reduce((acc, curr) => {
    const tags = curr.tags;
    tags.forEach((tag) => {
        if(tag in acc){
            acc[tag] += 1;
        }
    });
    return acc;
  }, {
    js: 0,
    nodejs: 0,
    css: 0,
    html: 0,
    react: 0,
  });
};

console.log(getTagsCount(tweets)); // { js: 3, nodejs: 3, html: 2, css: 2, react: 2 }