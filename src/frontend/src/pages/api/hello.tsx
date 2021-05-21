// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import singUpContainer from 'infra/lib/dependency-injection/SignUp/container'
export default (req, res) => {
  let useCase = singUpContainer;
  res.status(200).json({ name: 'John Doe' })
}
