export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;

    console.log(data);

    res.status(200).json({ message: "All good!" });
  } else {
    res.status(405).end();
  }
}
