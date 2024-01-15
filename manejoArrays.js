const posts = [{
    id: 1,
    title: "Mi primer post",
    image: 'https://img.com/1',
    tags: ['javascript', 'webdevelopment']
},{
    id: 2,
    title: "Mi experiencia con React",
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment' , 'react']
}, {
    id: 3,
    title: "Por qué dejé Angular",
    image: 'https://img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular']
}]

console.log(posts.find(post => post.title == "Por qué dejé Angular"));

//Para saber si existe algun elemento en el array (booleano):
console.log(posts.some(post => post.id === 1));
console.log(posts.some(post => post.tags.includes('react')));
//Para saber si se incluye en todos:
console.log(posts.every(post => post.tags.includes('react')));//Devolvería falso.

console.log(posts.map(post => post.title));


console.log(posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]));
}, []));
//El set es para eliminar los resultados repetidos.