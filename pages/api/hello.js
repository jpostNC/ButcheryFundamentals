import { createSheet, checkSheets, appendRow } from '../../lib/googleSheets';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  const test = await appendRow(2)

  console.log(test)

  res.status(200).json({ name: 'John Doe' })
}
