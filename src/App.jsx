import './App.css'

function App() {

  return (
    <>
      <img className="logo" src="src\assets\contact-form-icon.svg" alt="Becv logo" />
      <section className='contact-form'>
        <header className='header'>
          <h1 className='title'>Interested in our business pricing?</h1>
          <h2 className='description'>Fill out the form to view details and we’ll contact you as soon as possible.</h2>
        </header>
        <form className='form'>
          <div className='name'>
            <label className='label' htmlFor="">Name</label>
            <input className='input' type="name" placeholder='Ethan Johnson' />
          </div>
          <div className='email'>
            <label className='label' htmlFor="">Company Email</label>
            <input className='input' type="email" placeholder='ethan@johnson.com' />
          </div>
          <div className='size'>
            <label className='label' htmlFor="">Company Size</label>
            <select className="select" name="company-size" id="company-size">
              <option className='option' value="50-100">50-100 employees</option>
              <option className='option' value="100-500">100-500 employees</option>
            </select>
          </div>
          <div className='subject'>
            <label className='label' htmlFor="">Subject</label>
            <select className="select" name="subject" id="subject">
              <option className='option' value="building-landing-pages">Building Landing pages</option>
              <option className='option' value="building-landing-pages">Building Landing pages</option>
            </select>
          </div>
          <div className='message'>
            <label className='label' htmlFor="">Message</label>
            <textarea className='textarea' name="message" id="message" cols="30" rows="10" placeholder='50-100 employees'></textarea>
          </div>
          <button className='button'>Contact Sales</button>
        </form>
      </section>
    </>
  )
}

export default App
