const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    const formattedDate = date.toLocaleString('pt-BR', options);
    return formattedDate;
  };
  
export default formatDate;