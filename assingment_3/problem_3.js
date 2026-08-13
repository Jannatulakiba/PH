function countHashtags(caption) {
    if(typeof caption !== "string") return "Invalid"

    const tags = caption.split(" ").filter(word => word.startsWith("#"));
  const longestTag = tags.reduce((longest ,tag) => tag.length > longest.length ? tag : longest, "");


  return  { hashtagCount: tags.length, 
    longestTag: longestTag.slice (1)}
}



    console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))

    console.log(countHashtags("No hashtags here"))
    console.log(countHashtags("#ai #ml data science"))
console.log(countHashtags(123))
console.log(countHashtags(["#fun"]))

 
