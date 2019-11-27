const sonatas = [];

for (let number = 1; number <= 32; number++) {
  const sonata = require(`@/data/sonatas/${number}.json`);
  sonatas.push(sonata);
}

export default sonatas;
