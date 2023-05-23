export default async function handler(req, res) {
  const date = new Date();

  if (res.status(200)) {
    res.status(200).json(date);
  } else {
    throw console.error("응답 오류");
  }
}
