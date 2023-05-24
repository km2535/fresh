export const imgUploader = (file) => {
  const formData = new FormData();
  formData.append("images", file);
  fetch("/api/upload/new", { method: "POST", body: formData });
};
