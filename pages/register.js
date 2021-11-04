import Head from "next/head";
import Link from "next/link";
const Register = () => {
  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>
      <form className="mx-auto my-4" style={{maxWidth:"500px"}}> 
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p className="my-2">Already have an account? <Link href="/signin"><a style={{color:"crimson"}}>Login Now</a></Link></p>
      </form>
    </div>
  );
};

export default Register;
