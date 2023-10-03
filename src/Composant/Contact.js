import "../css/style.css"


function Contact() {
  return (
    
    <div className="contact">
        <h2>Contactez-moi</h2>
          <form className="formular" action="https://formspree.io/f/xknlqawl" method="post">
            <div className="names">
                <div className="form-group form-lastname ">
                    <label>Nom</label>
                    <input className="form-control" type="text" id="lastname" name="lastname" placeholder="Nom"/>
                </div>

                <div className="form-group form-firstname ">
                    <label>Prénom</label>
                    <input className="form-control" type="text" id="firstname" name="firstname" placeholder="Prénom"/>
                </div>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder="Email"/>
            </div>

            <div className="form-group">
                <label>Sujet</label>
                <input className="form-control" type="text" name="subject" placeholder="Sujet"/>
            </div>

            <div className="form-group">
                <label>Votre message</label>
                <textarea className="message form-control" name="message" placeholder="Votre message"></textarea> 
            </div>

            <button type="submit" >Envoyer mon message</button>
          </form>
    </div>

    
  );
}

export default Contact;