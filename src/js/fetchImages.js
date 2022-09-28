async function fetchImages() {
  
  try {
    const url = `https://pixabay.com/api/?key=30188307-c49a871897b6d5bfff07bff1b&q=${formRef.elements.searchQuery.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
    const response = await axios.get(url);
    return response
  }
  catch {
    throw new Error("Все пошло не по плану");
  }
};