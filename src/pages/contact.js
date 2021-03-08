import React, { useState }  from "react"
import axios from "axios";
import Layout from "../components/layout"


const Contact = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/7cc93aea-00c2-48e9-9540-98e5e38928ce",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thank You!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    
    return (
        <Layout>
            <div className="col-md-8 mt-5 max-w-4xl flex-grow mx-auto flex flex-col justify-around">
                <h1>Send Me a Message</h1>
                <br />
                <form onSubmit={handleOnSubmit}>
                <div className="form-group w-full block flex-grow lg:flex">
                    <label for="exampleInputEmail1" required="required">Email:&nbsp;&nbsp;&nbsp;</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <br />
                <div className="form-group w-full block flex-grow lg:flex">
                    <label for="exampleInputName">Name:&nbsp;&nbsp;</label>
                    <input type="textarea" name="name" className="form-control" id="exampleInputName" placeholder="Name" required="required"/>
                </div>
                <br />
    {/*}
                    <div className="form-group w-full block flex-grow lg:flex">
                        <label for="exampleFormControlSelect1">How did you get here?</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
                        <option>Github</option>
                        <option>Gitlab</option>
                        <option>Bitbucket</option>
                        </select>
                    </div>
    */}
                <br />
                <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                    <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                        Submit
                    </span>
                </button>
                <br />
                <br />
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
                </form>
            </div>
        </Layout>
    );
  };

export default Contact;