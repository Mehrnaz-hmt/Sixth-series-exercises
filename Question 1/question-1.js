const solution = (str1, str2) => { 
    let common = 0; 
    str1.split("").forEach((e) => { 
     let index = str2.search(e); 
     str2 = str2.slice(0, index) + str2.slice(index + 1); 
     if (index >= 0 && str2.includes(e)) common++; 
    }); 
    return common; 
   }; 
    
   console.log(solution("aaabcccf", "abccffff"));