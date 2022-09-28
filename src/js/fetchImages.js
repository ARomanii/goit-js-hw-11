async function fetchImages() {
  
  try {
    const url = `https://pixabay.com/api/?key=30171396-620891811b30796fa2cf3b653&q=${formRef.elements.searchQuery.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
    const response = await axios.get(url);
    return response
  }
  catch {
    throw new Error("Что-то пошло не так");
  }