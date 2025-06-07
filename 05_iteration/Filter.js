
// forEach can't return the values
let arr = ["aditya","raj","Neha","Rahul","patel"]
 let newarr = arr.forEach((items) =>{
    // console.log(items);
    return items;
})
// console.log(newarr);

//filter return the values
let numarr = [1,2,3,4,5,6,7,8,9,10]
// let newNumarr = numarr.filter( (num)=> (num>4))
let newNumarr = numarr.filter( (num)=> {
    return num>4})
// console.log(newNumarr);


 const books = [
  { title: "one book", genre: "History", publish: 1997, edition: 2004 },
  { title: "mystery trails", genre: "Mystery", publish: 2003, edition: 2007 },
  { title: "future world", genre: "Science Fiction", publish: 2010, edition: 2015 },
  { title: "heart talks", genre: "Romance", publish: 2001, edition: 2006 },
  { title: "ancient minds", genre: "Philosophy", publish: 1985, edition: 1992 },
  { title: "war echoes", genre: "War", publish: 1999, edition: 2003 },
  { title: "silent code", genre: "Technology", publish: 2013, edition: 2019 },
  { title: "lost jungle", genre: "Adventure", publish: 1994, edition: 1998 },
  { title: "laugh riot", genre: "Comedy", publish: 2008, edition: 2011 },
  { title: "truth files", genre: "Biography", publish: 2005, edition: 2010 }
];

// let userBook = books.filter((bk) => (bk.genre === "History"));

let userBooks = books.filter((bk) => {
    return bk.publish === 1997 && bk.genre === "History" ;
});
// console.log(userBooks);

let userBookss = books.filter((bk) => {
    return bk.publish === 2003 || bk.genre === "History";
});
console.log(userBookss);

