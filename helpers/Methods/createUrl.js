function turkishToEnglish(str) {
    const turkishChars = 'çÇğĞıİöÖşŞüÜ';
    const englishChars = 'cCgGiIoOsSuU';
  
    return str.replace(/[^A-Za-z0-9]/g, char => {
      const index = turkishChars.indexOf(char);
      return index !== -1 ? englishChars[index] : char;
    });
  }
  
  function createUrlFromText(text) {
    const lowerCaseText = text.toLowerCase();
    const convertedText = turkishToEnglish(lowerCaseText);
    return convertedText.replace(/\s+/g, '-');
  }
  
module.exports = createUrlFromText;