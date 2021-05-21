import { SignUpEmailPasswordInteractor } from 'domain/lib/usecase/auth';
import signUpContainer from 'infra/lib/dependency-injection/SignUp/container';
import { GqlSignUpEmailPasswordPresenter } from 'infra/lib/presenter/auth/SignUpEmailPassword';

export default async function signup(req, res) {
  const { email, password, name, roles, createdAt } = req.body;
  const useCase = signUpContainer.resolve<SignUpEmailPasswordInteractor>('useCase');

  if (!email || !password) {
    return res.status(400).send('Email and Password not provided!');
  }

  try {
    await useCase.handle({ email, password, name, roles, createdAt });

    let presenter = signUpContainer.resolve<GqlSignUpEmailPasswordPresenter>('useCase');

    presenter.getResponse();
    // setAuthCookie(res, auth.secret);
    // Cookies.set('token', token, { expires: 60 })
    
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(error.requestResult.statusCode).send(error.message);
  }
}
