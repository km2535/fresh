export default function handler(req, res) {
  console.log(123);
  res.status(200).json("처리완료");
}
