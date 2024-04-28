const getDocumentName = (url: string): string => {
  return url.split("/").pop() || "";
};

export default { getDocumentName };
